from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.hashers import check_password
from django.contrib.auth.hashers import make_password

from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib import messages

import json
import djangoproject.DatabaseManager

@csrf_exempt  # Disable CSRF for simplicity (use proper CSRF handling in production)
def createAccount(request):
    if request.method == 'POST':
        try:
            # Parse the JSON data from the request body
            data = json.loads(request.body)
            userInput = data.get('data')

            if userInput.get('password') != userInput.get('confirmPassword'):
                print("Passwords don't match")
                return JsonResponse({'status': 'error',  'message': 'Confirm password does not match'}, status=400)

            # Perform database operations here
            password = make_password(userInput.get('password'))
            confirmPassword = make_password(userInput.get('confirmPassword'))
            print("Data Recieved: " + str(userInput.get('username') + " " + str(userInput.get('emailAddress') + " " + password + " " + confirmPassword)))
            djangoproject.DatabaseManager.insertData("INSERT INTO PieTube.User (Username, Email, PasswordHash) VALUES ('" + str(userInput.get('username')) + "', '" + str(userInput.get('emailAddress') + "', '" + password + "');"))

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
            print(data)
            userInput = data.get('data')
            hashedPassword =  djangoproject.DatabaseManager.fetchData("SELECT PasswordHash from PieTube.User WHERE Username='" + userInput.get("username") +"';")[0].get('PasswordHash')
            if not check_password(userInput.get('password'), hashedPassword):
                print("Incorrect Password")
                return JsonResponse({'status': 'error',  'message': 'Something went wrong.'}, status=400)

            # Perform login and session creation here
            print("Login Successful!")
            # Return a response to the frontend
            return JsonResponse({'status': 'success', 'message': 'Login Successful'})
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)}, status=400)
    return JsonResponse({'status': 'error', 'message': 'Invalid request method'}, status=405)
