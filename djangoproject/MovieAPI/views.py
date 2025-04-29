from django.http import JsonResponse
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



def genreFiltering(request):	# function for filtering by genre, called by Home and GenreFilter
	"""
    Retrieves movie data for movies in specific genres.
    
    Expects a GET request in either of the following formats:
    {
		GET /api/movies?genres=Genre,Genre
        GET /api/movies?genres=Genre,Genre&excludedGenres=Genre,Genre
    }

    Returns:
        JsonResponse:
            - On success: Movie ID, title, poster, summary, and genres for each movie that meets the submitted parameters.
            - On failure: { 'status': 'error', 'message': <error description> }
    """
	genre_names = request.GET.get('genres', '') 	# get genre names as one long string
	genre_names = genre_names.split(',')  			# split into a list

	excluded_genres = request.GET.get('excludedGenres', '').split(',') #do same for genres to exclude


	if not genre_names: 							# error message for when api is called without proper params
		return JsonResponse({"error": "No genres provided"}, status=400)


	placeholders = ', '.join(['%s'] * len(genre_names))	# create placeholder for SQL query
	if excluded_genres:
		exclusion_placeholders = ', '.join(['%s'] * len(excluded_genres)) 
	else:
		exclusion_placeholders = ""

	# SQL query, use f""" so placeholders can be passed. COMMENT ON SQL TEXT EVENTUALLY
	exclusion_clause = ""	# set exclusion clause to be blank by default
	if excluded_genres:		# if exclusion parameters are passed, include query to exclude movies with those genres
		exclusion_clause = f"""
            AND m.MovieID NOT IN (
                SELECT DISTINCT mg.MovieID 
                FROM PieTube.MovieGenre AS mg 
                INNER JOIN PieTube.Genre AS g ON mg.GenreID = g.GenreID 
                WHERE g.GenreName IN ({exclusion_placeholders})
            )
        """
	# query to find data for all movies with at least one genre in the passed genre_names and without any in 
	# the passed excluded_genres
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

	
	if excluded_genres: params = genre_names + excluded_genres # if genres are being excluded, include them in params
	else: params = genre_names	#if no genres excluded, just include genre_names in passed params
    		
	result = djangoproject.DatabaseManager.fetchData(query, params)  # fetch movies in given genres

	for movie in result:	# iterate through each movie
		movie["Genres"] = movie.get("Genres", "").split(", ") if movie.get("Genres") else []	# properly format each movie


	return JsonResponse(result, safe=False)	# pass movie data as JSON




def ageRatingFiltering(request):	# function for filtering by Age rating
    selected_ratings = request.GET.get('ratings', '').split(',')	# use request.GET to retrieve ratings

    if not selected_ratings:    # if no parameters retrieved, send an error message
        return JsonResponse({"error": "No age ratings provided"}, status=400)

    placeholders = ', '.join(['%s'] * len(selected_ratings))    # format age ratings


    # SQL query to filter out movies that dont have the selected age ratings
    query = f"""
        SELECT DISTINCT m.MovieID, m.Title, m.Poster, m.Summary, m.AgeRating
        FROM PieTube.Movie AS m
        WHERE m.AgeRating IN ({placeholders})
        ORDER BY m.Title
    """

    result = djangoproject.DatabaseManager.fetchData(query, selected_ratings)    # perform query

    return JsonResponse(result, safe=False)    #pass results as JSON

@require_POST
def createComment(request):
	user = request.user
	print(user)
	data = json.loads(request.body)
	print(data)
	MovieID = data.get("MovieID")
	content = data.get("content")
	print("Movie ID", MovieID)
	print("content", content)
	query = f"INSERT INTO PieTube.comments (MovieID, UserID, content) VALUES ({MovieID}, {user.id}, \'{content}\');"
	result = djangoproject.DatabaseManager.insertData(query)
	print(result)
	return JsonResponse(result, safe=False)

def getComments(request):

	data = json.loads(request.body)
	MovieID = data.get("MovieID")

	if MovieID == None:
		return JsonResponse("Null MovieID", safe=False, status=404)


	print("COMMENTS",MovieID)
	query = f'''
			SELECT c.id AS id, content, MovieID, UserID, ParentID, created_at, username, profilePic FROM PieTube.comments c JOIN PieTube.LoginAPI_customuser u ON c.UserID = u.id 
			WHERE c.MovieID = {MovieID} AND c.ParentID IS NULL
			'''
	result = djangoproject.DatabaseManager.fetchData(query)
	print(result)
	return JsonResponse(result, safe=False, status = 200)

def getReplies(request):

	data = json.loads(request.body)
	MovieID = data.get("MovieID")
	ParentID = data.get("ParentID")

	if MovieID == None:
		return JsonResponse("Null MovieID", safe=False, status=404)
	if ParentID == None:
		return JsonResponse("Null ParentID", safe=False, status=404)


	print("COMMENTS",MovieID)
	query = f'''
			SELECT c.id AS id, content, MovieID, UserID, ParentID, created_at, username, profilePic FROM PieTube.comments c JOIN PieTube.LoginAPI_customuser u ON c.UserID = u.id 
			WHERE c.MovieID = {MovieID} AND c.ParentID ={ParentID}
			'''
	result = djangoproject.DatabaseManager.fetchData(query)
	print(result)
	return JsonResponse(result, safe=False, status = 200)

def createReply(request):
	user = request.user
	print(user)
	data = json.loads(request.body)
	print(data)
	MovieID = data.get("MovieID")
	content = data.get("content")
	ParentID = data.get("ParentID")
	print("Movie ID", MovieID)
	print("content", content)
	query = f"INSERT INTO PieTube.comments (MovieID, UserID, content, ParentID) VALUES ({MovieID}, {user.id}, \'{content}\', {ParentID});"
	result = djangoproject.DatabaseManager.insertData(query)
	print(result)
	return JsonResponse(result, safe=False)


def searchMovies(request):
    query = request.GET.get('query', '').strip()
    if not query:
        return JsonResponse({"error": "no query"}, status=400)
    
    formatted_query = f"%{query}%"

    title_query = "SELECT * FROM PieTube.Movie WHERE Title LIKE %s"
    title_results = djangoproject.DatabaseManager.fetchData(title_query, [formatted_query])
    

    title_ids = [movie["MovieID"] for movie in title_results] if title_results else []
    

    if title_ids:
        placeholders = ', '.join(['%s'] * len(title_ids))
        description_query = f"""
            SELECT * FROM PieTube.Movie 
            WHERE Summary LIKE %s 
              AND MovieID NOT IN ({placeholders})
        """
        params = [formatted_query] + title_ids
        description_results = djangoproject.DatabaseManager.fetchData(description_query, params)
    else:
        description_query = "SELECT * FROM PieTube.Movie WHERE Summary LIKE %s"
        description_results = djangoproject.DatabaseManager.fetchData(description_query, [formatted_query])
    
    response_data = {
        "title_matches": title_results,
        "description_matches": description_results,
    }
    
    return JsonResponse(response_data, safe=False)

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
