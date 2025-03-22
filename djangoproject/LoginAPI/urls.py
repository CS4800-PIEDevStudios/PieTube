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
    path('login-api/createAccount', views.createAccount, name="createAccount"),
    path('login-api/loginAccount', views.loginAccount, name="loginAccount"),
    path('login-api/logoutAccount', views.logoutAccount, name="logoutAccount"),
    path('login-api/accountInfo', views.accountInfo, name="accountInfo"),
    path('login-api/checkAuth', views.checkAuth, name="checkAuth"),
    path('login-api/getProfileData', views.getProfileData, name="getProfileData"),
    path('login-api/updatePassword', views.updatePassword, name="updatePassword"),
    path('login-api/updateAbout', views.updateAbout, name="updateAbout"),
    path('login-api/updateUsername', views.updateUsername, name="updateUsername"),
]
