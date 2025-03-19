from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.hashers import check_password
from django.contrib.auth.hashers import make_password

from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.contrib.auth.models import User


import json
import djangoproject.DatabaseManager

def authenticate_user(username, password):
    try:
        # Retrieve the user from the database
        user = User.objects.get(username=username)
        # Check if the provided password matches the hashed password
        if check_password(password, user.password):
            return user  # Authentication successful
        else:
            return None  # Incorrect password
    except User.DoesNotExist:
        return None  # User not found

@csrf_exempt  # Disable CSRF for simplicity (use proper CSRF handling in production)
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

@csrf_exempt  # Disable CSRF for simplicity (use proper CSRF handling in production)
def loginAccount(request):
    if request.method == 'POST':
        try:
            # Parse the JSON data from the request body
            data = json.loads(request.body)
            userInput = make_password(data.get('password'))
            print(userInput)
            user = authenticate(request, username=data.get('username'), password=data.get('password'))
            print(user)

            if user is not None:
                login(request, user)
                return JsonResponse({'status': 'success', 'message': 'Logged in successfully'})
            else:
                return JsonResponse({'status': 'error', 'Invalid Credentials': str(e)}, status=400)
            
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)}, status=400)
    return JsonResponse({'status': 'error', 'message': 'Invalid request method'}, status=405)

def checkAuth(request):
    print(request.user)
    if request.user.is_authenticated:
        return JsonResponse({'status': 'success', 'username': request.user.username})
    else:
        return JsonResponse({'status': 'error', 'message': 'Not authenticated'}, status=401)

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







