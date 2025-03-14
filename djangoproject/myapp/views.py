from django.shortcuts import render
from django.http import JsonResponse
import mysql.connector
from django.db import connection
import djangoproject.DatabaseManager

def getMovieData(request):
	
	result = djangoproject.DatabaseManager.fetchData("SELECT * FROM PieTube.Movie")

	return JsonResponse(result, safe=False)

def getUserData(request):

	result = djangoproject.DatabaseManager.fetchData("SELECT * FROM PieTube.auth_user")

	print(result)

	return JsonResponse(result, safe=False)

def getActorData(request):

	result = djangoproject.DatabaseManager.fetchData("SELECT * FROM PieTube.Actor")

	print(result)

	return JsonResponse(result, safe=False)

def getGenreData(request):

	result = djangoproject.DatabaseManager.fetchData("SELECT * FROM PieTube.Genre")

	print(result)

	return JsonResponse(result, safe=False)

def getMovieRoleData(request):
	
	result = djangoproject.DatabaseManager.fetchData("SELECT * FROM PieTube.MovieRole")

	print(result)

	return JsonResponse(result, safe=False)

def getMovieGenreData(request):
	
	result = djangoproject.DatabaseManager.fetchData("SELECT * FROM PieTube.MovieGenre")

	print(result)

	return JsonResponse(result, safe=False)

def getDirectorData(request):
	
	result = djangoproject.DatabaseManager.fetchData("SELECT * FROM PieTube.Director")

	print(result)

	return JsonResponse(result, safe=False)

def getTrailerData(request):
	
	result = djangoproject.DatabaseManager.fetchData("SELECT * FROM PieTube.Trailer")

	print(result)

	return JsonResponse(result, safe=False)

def getRecommendationData(request):

	result = djangoproject.DatabaseManager.fetchData("SELECT * FROM PieTube.Recommendation")

	print(result)

	return JsonResponse(result, safe=False)