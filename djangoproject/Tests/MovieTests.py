import pytest
import json
from unittest.mock import patch

# Fixtures to mock DatabaseManager methods
@pytest.fixture
def mock_fetch_data():
    with patch('djangoproject.DatabaseManager.fetchData') as mock:
        yield mock

@pytest.fixture
def mock_insert_data():
    with patch('djangoproject.DatabaseManager.insertData') as mock:
        yield mock

# Movie Data Views
@pytest.mark.django_db
def test_get_movie_data(client, mock_fetch_data):
    mock_fetch_data.return_value = [{"MovieID": 1, "Title": "Test Movie"}]
    response = client.get("/api/get-movie-data")
    assert response.status_code == 200
    assert response.json() == [{"MovieID": 1, "Title": "Test Movie"}]

@pytest.mark.django_db
def test_get_movie_data_by_id(client, mock_fetch_data):
    mock_fetch_data.return_value = [{"MovieID": 1, "Title": "Test Movie", "DirectorName": "Jane Doe"}]
    response = client.post("/api/get-movie-by-id", data=json.dumps({"id": 1}), content_type="application/json")
    assert response.status_code == 200
    assert response.json()[0]["Title"] == "Test Movie"

@pytest.mark.django_db
def test_get_movie_genres_by_id(client, mock_fetch_data):
    mock_fetch_data.return_value = [{"GenreName": "Action"}, {"GenreName": "Drama"}]
    response = client.post("/api/get-movie-genres-by-id", data=json.dumps({"id": 1}), content_type="application/json")
    assert response.status_code == 200
    assert response.json() == ["Action", "Drama"]

@pytest.mark.django_db
def test_get_movie_actors_by_id(client, mock_fetch_data):
    mock_fetch_data.return_value = [{"Name": "Actor A"}, {"Name": "Actor B"}]
    response = client.post("/api/get-movie-actors-by-id", data=json.dumps({"id": 1}), content_type="application/json")
    assert response.status_code == 200
    assert response.json() == ["Actor A", "Actor B"]

# Genre & Age Filtering
@pytest.mark.django_db
def test_get_liked_genres(client, mock_fetch_data):
    mock_fetch_data.return_value = [{"GenreName": "Comedy"}, {"GenreName": "Horror"}]
    response = client.get("/api/get-liked-genres?userID=1")
    assert response.status_code == 200
    assert response.json() == ["Comedy", "Horror"]

@pytest.mark.django_db
def test_genre_filtering(client, mock_fetch_data):
    mock_fetch_data.return_value = [{"MovieID": 1, "Title": "Movie A", "Genres": "Action, Comedy"}]
    response = client.get("/api/filter-genres?genres=Action,Comedy")
    assert response.status_code == 200
    assert response.json()[0]["Genres"] == ["Action", "Comedy"]

@pytest.mark.django_db
def test_age_rating_filtering(client, mock_fetch_data):
    mock_fetch_data.return_value = [{"MovieID": 1, "Title": "Movie A", "AgeRating": "PG-13"}]
    response = client.get("/api/filter-age-rating?ratings=PG-13")
    assert response.status_code == 200
    assert response.json()[0]["AgeRating"] == "PG-13"

# Comments & Replies
@pytest.mark.django_db
def test_create_comment(client, mock_insert_data, django_user_model):
    user = django_user_model.objects.create_user(username="test", password="pass")
    client.force_login(user)
    mock_insert_data.return_value = {"status": "success"}
    response = client.post("/api/create-comment", data=json.dumps({"MovieID": 1, "content": "Great movie!"}), content_type="application/json")
    assert response.status_code == 200
    assert response.json()["status"] == "success"

@pytest.mark.django_db
def test_get_comments(client, mock_fetch_data):
    mock_fetch_data.return_value = [{"id": 1, "content": "Nice!", "MovieID": 1, "UserID": 1, "ParentID": None}]
    response = client.post("/api/get-comments", data=json.dumps({"MovieID": 1}), content_type="application/json")
    assert response.status_code == 200
    assert response.json()[0]["content"] == "Nice!"

@pytest.mark.django_db
def test_get_replies(client, mock_fetch_data):
    mock_fetch_data.return_value = [{"id": 2, "content": "I agree!", "MovieID": 1, "UserID": 2, "ParentID": 1}]
    response = client.post("/api/get-replies", data=json.dumps({"MovieID": 1, "ParentID": 1}), content_type="application/json")
    assert response.status_code == 200
    assert response.json()[0]["content"] == "I agree!"

@pytest.mark.django_db
def test_create_reply(client, mock_insert_data, django_user_model):
    user = django_user_model.objects.create_user(username="test", password="pass")
    client.force_login(user)
    mock_insert_data.return_value = {"status": "success"}
    response = client.post("/api/create-reply", data=json.dumps({"MovieID": 1, "content": "Thanks!", "ParentID": 1}), content_type="application/json")
    assert response.status_code == 200
    assert response.json()["status"] == "success"

# Search
@pytest.mark.django_db
def test_search_movies(client, mock_fetch_data):
    mock_fetch_data.side_effect = [
        [{"MovieID": 1, "Title": "The Great Adventure"}],  # title matches
        [{"MovieID": 2, "Title": "Adventure Time"}]        # description matches
    ]
    response = client.get("/api/search-movies?query=Adventure")
    assert response.status_code == 200
    data = response.json()
    assert "title_matches" in data
    assert "description_matches" in data
