from django.http import JsonResponse
import djangoproject.DatabaseManager
import json
from django.views.decorators.http import require_POST


def add_watchlist(request):
    user = request.user
    data = json.loads(request.body)
    MovieID = data.get('MovieID')
    response = djangoproject.DatabaseManager.insertData(f"INSERT IGNORE INTO PieTube.watchlist (UserID, MovieID) VALUES ({user.id}, {MovieID});")
    return JsonResponse(response, status=200,safe=False)

def remove_watchlist(request):
    user = request.user
    data = json.loads(request.body)
    MovieID = data.get('MovieID')
    response = djangoproject.DatabaseManager.insertData(f"DELETE FROM PieTube.watchlist WHERE UserID = {user.id} AND MovieID = {MovieID}")
    return JsonResponse(response, status=200, safe=False)

def get_watchlist(request):
    user = request.user
    response = djangoproject.DatabaseManager.fetchData(f"SELECT * FROM PieTube.watchlist w JOIN PieTube.Movie m on m.MovieID = w.MovieID WHERE UserID = {user.id};")
    print(response)
    return JsonResponse(response, status=200, safe=False)

