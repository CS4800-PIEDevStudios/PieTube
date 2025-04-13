from django.shortcuts import render
from django.http import JsonResponse
import mysql.connector
from django.db import connection
import djangoproject.DatabaseManager
import json
from django.views.decorators.http import require_POST

def getMovieData(request):
	"""
    Retrieves all movies from the PieTube database.

    Returns:
        JsonResponse:
            - On success: JSON representation of all movies in the database.
            - On failure: { 'status': 'error', 'message': 'Error fetching movie data' }
    """
	result = djangoproject.DatabaseManager.fetchData("SELECT * FROM PieTube.Movie")
	return JsonResponse(result, safe=False)

@require_POST
def getMovieDataByID(request):
	"""
    Retrieves movie data by its ID, including information about the director.
    
    Expects a POST request with the following JSON payload:
    {
        "id": <movie_id>
    }

    Returns:
        JsonResponse:
            - On success: Movie data along with director info in JSON format.
            - On failure: { 'status': 'error', 'message': <error description> }
    """
	data = json.loads(request.body)
	id = data.get('id')
	result = djangoproject.DatabaseManager.fetchData(f"SELECT * FROM PieTube.Movie INNER JOIN PieTube.Director ON PieTube.Movie.DirectorID = PieTube.Director.DirectorID WHERE MovieID = {id} ;")
	return JsonResponse(result, safe=False)


def getMovieGenresByID(request):
	"""
    Retrieves genres associated with a movie by its ID.

    Expects a POST request with the following JSON payload:
    {
        "id": <movie_id>
    }

    Returns:
        JsonResponse:
            - On success: List of genre names associated with the movie.
            - On failure: { 'status': 'error', 'message': <error description> }
    """
	data = json.loads(request.body)
	id = data.get('id')
	result = djangoproject.DatabaseManager.fetchData(f"SELECT * FROM PieTube.MovieGenre INNER JOIN PieTube.Genre ON PieTube.MovieGenre.GenreID = PieTube.Genre.GenreID WHERE MovieID = {id};")
	print(result)
	resultArray = []
	for i in result:
		resultArray.append(i["GenreName"])
	return JsonResponse(resultArray, safe=False)

def getMovieActorsByID(request):
	"""
    Retrieves actors associated with a movie by its ID.

    Expects a POST request with the following JSON payload:
    {
        "id": <movie_id>
    }

    Returns:
        JsonResponse:
            - On success: List of actor names associated with the movie.
            - On failure: { 'status': 'error', 'message': <error description> }
    """
	data = json.loads(request.body)
	id = data.get('id')
	result = djangoproject.DatabaseManager.fetchData(f"SELECT * FROM PieTube.MovieRole INNER JOIN PieTube.Actor ON PieTube.MovieRole.ActorID = PieTube.Actor.ActorID WHERE MovieID = {id};")
	resultArray = []
	for i in result:
		resultArray.append(i["Name"])
	return JsonResponse(resultArray, safe=False)



def genreFiltering(request):	#function for filtering by genre, called by Home and GenreFilter
    genre_names = request.GET.get('genres', '') #get genre names as one long string
    genre_names = genre_names.split(',')  #split into a list

    excluded_genres = request.GET.get('excludedGenres', '').split(',') #do same for genres to exclude


    if not genre_names: #error message for when api is called without proper params
        return JsonResponse({"error": "No genres provided"}, status=400)


    placeholders = ', '.join(['%s'] * len(genre_names))	#create placeholder for SQL query
    if excluded_genres:
        exclusion_placeholders = ', '.join(['%s'] * len(excluded_genres)) 
    else:
        exclusion_placeholders = ""

	#SQL query, use f""" so placeholders can be passed. COMMENT ON SQL TEXT EVENTUALLY
    exclusion_clause = ""
    if excluded_genres:
        exclusion_clause = f"""
            AND m.MovieID NOT IN (
                SELECT DISTINCT mg.MovieID 
                FROM PieTube.MovieGenre AS mg 
                INNER JOIN PieTube.Genre AS g ON mg.GenreID = g.GenreID 
                WHERE g.GenreName IN ({exclusion_placeholders})
            )
        """
    query = f"""
		SELECT DISTINCT m.MovieID, m.Title, m.Poster, m.Summary, 
		GROUP_CONCAT(DISTINCT g.GenreName ORDER BY g.GenreName SEPARATOR ', ') AS Genres
		FROM PieTube.Movie AS m
		INNER JOIN PieTube.MovieGenre AS mg ON m.MovieID = mg.MovieID
		INNER JOIN PieTube.Genre AS g ON mg.GenreID = g.GenreID
		WHERE m.MovieID IN (
			SELECT DISTINCT mg.MovieID
			FROM PieTube.MovieGenre AS mg
			INNER JOIN PieTube.Genre AS g ON mg.GenreID = g.GenreID
			WHERE g.GenreName IN ({placeholders})
		)
		{exclusion_clause}
		GROUP BY m.MovieID
		"""

	
    if excluded_genres: params = genre_names + excluded_genres 
    else: params = genre_names
    		
    result = djangoproject.DatabaseManager.fetchData(query, params)  #fetch movies in genres

    for movie in result:
        movie["Genres"] = movie.get("Genres", "").split(", ") if movie.get("Genres") else []


    return JsonResponse(result, safe=False)	#pass genres




def ageRatingFiltering(request):
    selected_ratings = request.GET.get('ratings', '').split(',')

    if not selected_ratings:
        return JsonResponse({"error": "No age ratings provided"}, status=400)

    placeholders = ', '.join(['%s'] * len(selected_ratings))

    query = f"""
        SELECT DISTINCT m.MovieID, m.Title, m.Poster, m.Summary, m.AgeRating
        FROM PieTube.Movie AS m
        WHERE m.AgeRating IN ({placeholders})
        ORDER BY m.Title
    """

    result = djangoproject.DatabaseManager.fetchData(query, selected_ratings)

    return JsonResponse(result, safe=False)






# Retrieve all users
def getUserData(request):

	result = djangoproject.DatabaseManager.fetchData("SELECT * FROM PieTube.auth_user")

	print(result)

	return JsonResponse(result, safe=False)

# Retrieve all actors
def getActorData(request):

	result = djangoproject.DatabaseManager.fetchData("SELECT * FROM PieTube.Actor")

	print(result)

	return JsonResponse(result, safe=False)

# Retrieve all genres
def getGenreData(request):

	result = djangoproject.DatabaseManager.fetchData("SELECT * FROM PieTube.Genre")

	print(result)

	return JsonResponse(result, safe=False)

# Retrieve all movie roles
def getMovieRoleData(request):
	
	result = djangoproject.DatabaseManager.fetchData("SELECT * FROM PieTube.MovieRole")

	print(result)

	return JsonResponse(result, safe=False)

# Retrieve all movie genres

def getMovieGenreData(request):
	
	result = djangoproject.DatabaseManager.fetchData("SELECT * FROM PieTube.MovieGenre")

	print(result)

	return JsonResponse(result, safe=False)

# Retrieve all directors
def getDirectorData(request):
	
	result = djangoproject.DatabaseManager.fetchData("SELECT * FROM PieTube.Director")

	print(result)

	return JsonResponse(result, safe=False)

# Retrieve all trailers
def getTrailerData(request):
	
	result = djangoproject.DatabaseManager.fetchData("SELECT * FROM PieTube.Trailer")

	print(result)

	return JsonResponse(result, safe=False)

# Retrieve all reccomendations
def getRecommendationData(request):

	result = djangoproject.DatabaseManager.fetchData("SELECT * FROM PieTube.Recommendation")

	print(result)

	return JsonResponse(result, safe=False)
