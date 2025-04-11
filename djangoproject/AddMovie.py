
import requests
import djangoproject.DatabaseManager   
import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'djangoproject.settings')
django.setup()

# MAKE SURE THESE ARE ALL CORRECT BEFORE ADDING
imdbID = "tt0057701" 
trailer = "https://www.youtube.com/embed/yubrwPJYc7E?si=ofHZJ9p5qG5KfowZ" # NEEDS TO BE EMBED LINK
embed = "https://archive.org/embed/TheYesterdayMachine1963" # LINK FROM INTERNET ARCHIVE







apiKey = "4a4dbd88"
url = f"https://www.omdbapi.com/?i={imdbID}&apikey={apiKey}"
response = requests.get(url)

# Check if the request was successful
if response.status_code == 200:
    # Convert response to JSON
    data = response.json()
    print("Data received from API:")
	# Parse data: 
    title = data["Title"]
    year = data["Year"]
    ageRating = data["Rated"]
    releaseDate = data["Released"]
    runtime = data["Runtime"].split()[0]
    director = data["Director"]
    actors = data["Actors"] # TURN INTO LIST
    genre = data["Genre"] # TURN INTO LIST
    description = data["Plot"]
    rating = data["imdbRating"]
    poster = data["Poster"]
    actorList = actors.split(", ")
    genreList = genre.split(", ")
    print(genreList)
    directorList = director.split(", ")

    # Insert into Director Table
    djangoproject.DatabaseManager.insertData(f"INSERT IGNORE INTO PieTube.Director (Name) VALUES (\"{directorList[0]}\");")
    directorID = djangoproject.DatabaseManager.fetchData(f"SELECT * FROM PieTube.Director WHERE Name=\"{directorList[0]}\";")
    directorID = directorID[0]['DirectorID']

    

    # Insert into Movie Table
    djangoproject.DatabaseManager.insertData(f"INSERT IGNORE INTO PieTube.Movie (DirectorID, Summary, Title, AgeRating, Rating, Duration, Language, ReleaseDate, Poster, Trailer, EmbedLink) VALUES ({directorID}, \"{description}\", \"{title}\", \"{ageRating}\", {rating}, \"{runtime}\", \"English\", \"{releaseDate}\", \"{poster}\", \"{trailer}\", \"{embed}\");")
    movieID = djangoproject.DatabaseManager.fetchData(f"SELECT * FROM PieTube.Movie WHERE Title=\"{title}\";")
    movieID = movieID[0]['MovieID']

    # Insert into Actors Table
    for actor in actorList:
        djangoproject.DatabaseManager.insertData(f"INSERT IGNORE INTO PieTube.Actor (Name) VALUES (\"{actor}\");")
        actorID = djangoproject.DatabaseManager.fetchData(f"SELECT * FROM PieTube.Actor WHERE Name=\"{actor}\";")
        actorID = actorID[0]['ActorID']
        djangoproject.DatabaseManager.insertData(f"INSERT IGNORE INTO PieTube.MovieRole (ActorID, MovieID) VALUES ({actorID}, {movieID});")

    # Insert into Genre Table
    for genre in genreList:
        djangoproject.DatabaseManager.insertData(f"INSERT IGNORE INTO PieTube.Genre (GenreName) VALUES (\"{genre}\");")
        genreID = djangoproject.DatabaseManager.fetchData(f"SELECT * FROM PieTube.Genre WHERE GenreName=\"{genre}\";")
        genreID = genreID[0]['GenreID']
        djangoproject.DatabaseManager.insertData(f"INSERT IGNORE INTO PieTube.MovieGenre (GenreID, MovieID) VALUES ({genreID}, {movieID});")


    print(title)
    print(directorList)
    print(directorID)
    print(movieID)
    
    
else:
    print(f"Failed to retrieve data. Status code: {response.status_code}")
