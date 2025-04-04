from django.shortcuts import render
from django.http import JsonResponse
import mysql.connector
from django.db import connection
import djangoproject.DatabaseManager
import json
from django.views.decorators.http import require_POST

def getMovieData(request):
	
	result = djangoproject.DatabaseManager.fetchData("SELECT * FROM PieTube.Movie")

	return JsonResponse(result, safe=False)

@require_POST
def getMovieDataByID(request):
	data = json.loads(request.body)
	id = data.get('id')
	result = djangoproject.DatabaseManager.fetchData(f"SELECT * FROM PieTube.Movie INNER JOIN PieTube.Director ON PieTube.Movie.DirectorID = PieTube.Director.DirectorID WHERE MovieID = {id} ;")
	return JsonResponse(result, safe=False)

def getMovieGenresByID(request):
	data = json.loads(request.body)
	id = data.get('id')
	result = djangoproject.DatabaseManager.fetchData(f"SELECT * FROM PieTube.MovieGenre INNER JOIN PieTube.Genre ON PieTube.MovieGenre.GenreID = PieTube.Genre.GenreID WHERE MovieID = {id};")
	print(result)
	resultArray = []
	for i in result:
		resultArray.append(i["GenreName"])
	return JsonResponse(resultArray, safe=False)

def getMovieActorsByID(request):
	data = json.loads(request.body)
	id = data.get('id')
	result = djangoproject.DatabaseManager.fetchData(f"SELECT * FROM PieTube.MovieRole INNER JOIN PieTube.Actor ON PieTube.MovieRole.ActorID = PieTube.Actor.ActorID WHERE MovieID = {id};")
	print(result)
	resultArray = []
	for i in result:
		resultArray.append(i["Name"])
	return JsonResponse(resultArray, safe=False)


def genreFiltering(request):
	genre_ids = request.GET.getlist('genres')
	genre_ids_str = ','.join(genre_ids)
	result = djangoproject.DatabaseManager.fetchData(f"""
        SELECT DISTINCT m.id, m.title 
        FROM PieTube.Movie AS m
        INNER JOIN PieTube.MovieGenre AS mg ON m.id = mg.movie_id
        WHERE mg.genre_id IN ({genre_ids_str})
    """)
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
