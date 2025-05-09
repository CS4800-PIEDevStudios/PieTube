"""
URL configuration for djangoproject project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('api/get-movie-data', views.getMovieData, name="getMovieData"),
    path('api/get-user-data', views.getUserData, name="getUserData"),
    path('api/get-actor-data', views.getActorData, name="getActorData"),
    path('api/get-genre-data', views.getGenreData, name="getGenreData"),
    path('api/get-movie-role-data', views.getMovieRoleData, name="getMovieRoleData"),
    path('api/get-movie-genre-data', views.getMovieGenreData, name="getMovieGenreData"),
    path('api/get-trailer-data', views.getTrailerData, name="getTrailerData"),
    path('api/get-director-data', views.getDirectorData, name="getDirectorData"),
    path('api/get-recommendation-data', views.getRecommendationData, name="getRecommendationData"),
    path('api/filter-genres', views.genreFiltering, name = "genreFiltering"),
    path('api/get-movie-by-id', views.getMovieDataByID, name = "getMovieDataByID"),
    path('api/get-movie-genres-by-id', views.getMovieGenresByID, name = "getMovieGenresDataByID"),
    path('api/get-movie-actors-by-id', views.getMovieActorsByID, name = "getMovieActorsDataByID"),
    path('api/filter-age-rating', views.ageRatingFiltering, name = "ageRatingFiltering"),
    path('api/search-movies', views.searchMovies, name='searchMovies'),
    path('api/create-comment', views.createComment, name = "createComment"),
    path('api/get-comments', views.getComments, name = "getComments"),
    path('api/get-replies', views.getReplies, name = "getReplies"),
    path('api/create-reply', views.createReply, name = "createReply"),
    path('api/get-liked-genres', views.getLikedGenres, name = "getLikedGenres"),
]
