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
    path('api/add-watchlist', views.add_watchlist, name="addWatchList"),
    path('api/remove-watchlist', views.remove_watchlist, name="removeWatchList"),
    path('api/get-watchlist', views.get_watchlist, name="getWatchList"),
    path('api/add-like', views.add_like, name="addLike"),
    path('api/remove-like', views.remove_like, name="removeLike"),
    path('api/get-like', views.get_like, name="getLike"),
]
