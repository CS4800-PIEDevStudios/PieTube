from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.hashers import make_password
import json
import mysql.connector

@csrf_exempt  # Disable CSRF for simplicity (use proper CSRF handling in production)
def createAccount(request):
    if request.method == 'POST':
        try:
            # Parse the JSON data from the request body
            data = json.loads(request.body)
            userInput = data.get('data')

            # Perform database operations here

            print("Data Recieved: " + userInput)

            # Return a response to the frontend
            return JsonResponse({'status': 'success', 'message': 'Data received', 'data': userInput})
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)}, status=400)
    return JsonResponse({'status': 'error', 'message': 'Invalid request method'}, status=405)
