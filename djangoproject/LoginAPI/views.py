from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt, ensure_csrf_cookie, csrf_protect
from django.views.decorators.http import require_POST
from django.middleware.csrf import get_token
from django.contrib.auth.hashers import make_password
import djangoproject.DatabaseManager
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth import get_user_model
import json
import boto3
import uuid

# Get the active user
User = get_user_model()

@csrf_protect
def createAccount(request):
    """
    Handles user account creation via a POST request.

    Expects a JSON payload in the following format:
    {
        "data": {
            "username": "desired_username",
            "emailAddress": "user@example.com",
            "password": "securePassword123",
            "confirmPassword": "securePassword123"
        }
    }

    Returns:
        JsonResponse with success or error status and message.
        - 200 on success
        - 400 on client-side errors (e.g., passwords don't match, invalid input)
        - 405 if request method is not POST
    """

    if request.method == 'POST':
        try:
            # Parse the JSON data from the request body
            data = json.loads(request.body)
            userInput = data.get('data')
            if userInput.get('password') != userInput.get('confirmPassword'):
                print("Passwords don't match")
                return JsonResponse({'status': 'error',  'message': 'Confirm password does not match'}, status=400)

            # Create a new user
            user = User.objects.create_user(
                username=userInput.get('username'),
                email=userInput.get('emailAddress'),
                password=userInput.get('password')
            )
            user.save()

            # Return a response to the frontend
            return JsonResponse({'status': 'success', 'message': 'Data received'})
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)}, status=400)
    return JsonResponse({'status': 'error', 'message': 'Invalid request method'}, status=405)

@csrf_protect
def loginAccount(request):
    """
    Authenticates and logs in a user via a POST request.

    Expects a JSON payload in the following format:
    {
        "username": "user123",
        "password": "securePassword"
    }

    Returns:
        JsonResponse:
            - On success: { 'status': 'success', 'message': 'Logged in successfully' }
            - On failure: { 'status': 'error', 'message': <error description> }
            - HTTP 400 for bad credentials or input
            - HTTP 405 if request method is not POST
    """

    if request.method == 'POST':
        try:
            # Parse the JSON data from the request body
            data = json.loads(request.body)
            user = authenticate(request, username=data.get('username'), password=data.get('password'))
            if user is not None:
                login(request, user)
                return JsonResponse({'status': 'success', 'message': 'Logged in successfully'})
            else:
                return JsonResponse({'status': 'error', 'message': 'Invalid username or password'}, status=400)
            
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)}, status=400)
    return JsonResponse({'status': 'error', 'message': 'Invalid request method'}, status=405)

@ensure_csrf_cookie
def checkAuth(request):
    """
    Checks if the current user is authenticated.

    This view is useful for frontend apps to verify session-based login state.
    It also ensures the CSRF cookie is set on the response, which is required
    for secure POST/PUT/DELETE requests.

    Returns:
        JsonResponse:
            - If authenticated: { 'authenticated': True, 'username': <username> }
            - If not authenticated: { 'authenticated': False }
    """

    if request.user.is_authenticated:
        return JsonResponse({'authenticated': True, 'username': request.user.username})
    else:
        return JsonResponse({'authenticated': False})

@require_POST
def updatePassword(request):
    """
    Allows an authenticated user to update their password.

    Expects a JSON payload in the following format:
    {
        "oldPassword": "currentPassword123",
        "newPassword": "newSecurePassword456",
        "confirmPassword": "newSecurePassword456"
    }

    Returns:
        JsonResponse:
            - On success: { 'status': 'success', 'message': 'Password updated successfully!' }
            - On error: { 'status': 'error', 'message': <error description> }
    """
    data = json.loads(request.body)
    user = authenticate(request, username=request.user.username, password=data.get('oldPassword'))
    if user is not None:
        newPassword = data.get('newPassword')
        confimPassword = data.get('confirmPassword')
        if newPassword != confimPassword:
            return JsonResponse({'status': 'error', 'message': 'Passwords do not match.'})
        user.set_password(data.get('newPassword'))
        user.save()

        return JsonResponse({'status': 'success', 'message': 'Password updated successfully!'})
    else:
        return JsonResponse({'status': 'error', 'message': 'Incorrect old password.'})
            
@require_POST
def updateAbout(request):
    """
    Updates the 'about' section for the currently authenticated user.

    Expects a JSON payload like:
    {
        "about": "A few words about me..."
    }

    Returns:
        JsonResponse:
            - On success: { 'status': 'success', 'message': 'About updated successfully!' }
            - On error: { 'status': 'error', 'message': <error description> }
    """

    data = json.loads(request.body)
    user = request.user
    if user is not None:
        djangoproject.DatabaseManager.insertData("UPDATE  LoginAPI_customuser SET about = '" + data.get('about') + "' WHERE id = " + str(user.id) + ";")
        return JsonResponse({'status': 'success', 'message': 'About updated successfully!'})
    else:
        return JsonResponse({'status': 'error', 'message': 'Something went wrong.'})
        
@require_POST
def updateUsername(request):
    """
    Updates the username of the currently authenticated user
    after verifying their password.

    Expects a JSON payload in the format:
    {
        "password": "currentPassword123",
        "newUsername": "new_username"
    }

    Returns:
        JsonResponse:
            - On success: { 'status': 'success', 'message': 'Username updated successfully!' }
            - On failure: { 'status': 'error', 'message': <error description> }
    """
    data = json.loads(request.body)
    user = authenticate(request, username=request.user.username, password=data.get('password'))
    if user is not None:
        user.username = data.get('newUsername')
        user.save()
        return JsonResponse({'status': 'success', 'message': 'About updated successfully!'})
    else:
        return JsonResponse({'status': 'error', 'message': 'Something went wrong.'})


# Fetches profile data (ensure that user is logged in before this)
def getProfileData(request):
    """
    Retrieves the full profile data for the currently authenticated user.

    Returns:
        JsonResponse:
            - On success: JSON representation of the user object (excluding sensitive fields).
            - On failure: { 'status': 'error', 'message': 'User Not Logged In' }
    """

    if request.user.is_authenticated:
        result = djangoproject.DatabaseManager.fetchData("SELECT * FROM LoginAPI_customuser WHERE id = '" + str(request.user.id)+ "';")
        return JsonResponse(result, safe=False)
    else:
        return JsonResponse({'status': 'error', 'message': 'User Not Logged In'}, status=405)
    
@require_POST
def logoutAccount(request):
    """
    Logs the currently authenticated user out of the application.

    This view ensures that the user's session is terminated, and they are
    logged out.

    Returns:
        JsonResponse:
            - On success: { 'status': 'success', 'message': 'Logged out successfully' }
            - On failure: { 'status': 'error', 'message': 'User already logged out' }
    """

    logout(request)  # Log the user out
    return JsonResponse({'status': 'success', 'message': 'Logged out successfully'})


@api_view(['POST'])
def generate_presigned_url(request):
    AWS_ACCESS_KEY_ID= ""
    AWS_SECRET_ACCESS_KEY = ""
    AWS_STORAGE_BUCKET_NAME = "pietube-media"

    s3 = boto3.client('s3',
                      aws_access_key_id=AWS_ACCESS_KEY_ID,
                      aws_secret_access_key=AWS_SECRET_ACCESS_KEY)

    file_name = request.data.get('file_name')
    file_type = request.data.get('file_type')

    if not file_name or not file_type:
        return JsonResponse({"error": "Missing file name or type"}, status=400)

    unique_filename = f"profile_pictures/{uuid.uuid4()}_{file_name}"

    presigned_post = s3.generate_presigned_post(
        Bucket=AWS_STORAGE_BUCKET_NAME,
        Key=unique_filename,
        Fields={"Content-Type": file_type},
        Conditions=[
            {"Content-Type": file_type}
        ],
        ExpiresIn=3600  # URL valid for 1 hour
    )

    return JsonResponse({
        'url': presigned_post['url'],
        'fields': presigned_post['fields'],
        'file_url': f"https://{AWS_STORAGE_BUCKET_NAME}.s3.amazonaws.com/{unique_filename}"
    })



