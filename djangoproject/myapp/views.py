from django.shortcuts import render
from django.http import JsonResponse
import mysql.connector
from django.db import connection
import djangoproject.DatabaseManager
import json
from django.views.decorators.http import require_POST
from django.views.decorators.csrf import csrf_exempt

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
    genre_names = request.GET.get('genres', '')  # Get raw string
    genre_names = genre_names.split(',')  # Split into a list

    if not genre_names or genre_names == ['']:
        return JsonResponse({"error": "No genres provided"}, status=400)



    # Dynamically create placeholders for SQL query
    placeholders = ', '.join(['%s'] * len(genre_names))

    query = f"""
        SELECT DISTINCT m.MovieID, m.Title, m.Poster
        FROM PieTube.Movie AS m
        INNER JOIN PieTube.MovieGenre AS mg ON m.MovieID = mg.MovieID
        INNER JOIN PieTube.Genre AS g ON mg.GenreID = g.GenreID
        WHERE g.GenreName IN ({placeholders})
    """

    result = djangoproject.DatabaseManager.fetchData(query, genre_names)  # Pass individual values
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
