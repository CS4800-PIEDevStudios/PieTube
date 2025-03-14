from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.hashers import make_password
import json
import djangoproject.DatabaseManager

@csrf_exempt  # Disable CSRF for simplicity (use proper CSRF handling in production)
def createAccount(request):
    if request.method == 'POST':
        try:
            # Parse the JSON data from the request body
            data = json.loads(request.body)
            print(data)
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
