from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt, ensure_csrf_cookie, csrf_protect
from django.contrib.auth.hashers import check_password
from django.contrib.auth.hashers import make_password
from django.middleware.csrf import get_token
import djangoproject.DatabaseManager
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
import json

@csrf_protect
def createAccount(request):
    if request.method == 'POST':
        try:
            # Parse the JSON data from the request body
            data = json.loads(request.body)
            userInput = data.get('data')
            print(userInput)
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
            print(user.password)


            # Return a response to the frontend
            return JsonResponse({'status': 'success', 'message': 'Data received'})
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)}, status=400)
    return JsonResponse({'status': 'error', 'message': 'Invalid request method'}, status=405)

@csrf_protect
def loginAccount(request):
    if request.method == 'POST':
        try:
            # Parse the JSON data from the request body
            data = json.loads(request.body)
            csrf_token = get_token(request)
            print("CSRF TOKEN " + str(csrf_token))
            user = authenticate(request, username=data.get('username'), password=data.get('password'))
            if user is not None:
                login(request, user)
                return JsonResponse({'status': 'success', 'message': 'Logged in successfully'})
            else:
                return JsonResponse({'status': 'error', 'Invalid Credentials': str(e)}, status=400)
            
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)}, status=400)
    return JsonResponse({'status': 'error', 'message': 'Invalid request method'}, status=405)

@ensure_csrf_cookie
def checkAuth(request):
    print("Session Key:", request.session.session_key)
    print("User:", request.user)
    print("Is Authenticated:", request.user.is_authenticated)
    print("Session Data:", request.session.items())
    if request.user.is_authenticated:
        print("USER IS AUTHENTICATED")
        return JsonResponse({'authenticated': True, 'username': request.user.username})
    else:
        print("USER IS NOT AUTHENTICATED")
        return JsonResponse({'authenticated': False})


# Fetches profile data (ensure that user is logged in before this)
def getProfileData(request):
    result = djangoproject.DatabaseManager.fetchData("SELECT * FROM PieTube.auth_user WHERE Username = '" + str(request.user.username)+ "';")
    return JsonResponse(result, safe=False)

def logoutAccount(request):
    if request.method == 'POST':
        try:
            logout(request)    
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)}, status=400)
    return JsonResponse({'status': 'error', 'message': 'Invalid request method'}, status=405)

@csrf_exempt  # Disable CSRF for simplicity (use proper CSRF handling in production)
def accountInfo(request):
    print("Account Info")
    print(request.user)
    return JsonResponse({'status': 'success', 'username': request.user.username})







