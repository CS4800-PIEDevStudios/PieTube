import pytest
import json
from LoginAPI.models import CustomUser
from django.urls import reverse
from django.contrib.auth import get_user_model
from django.views.decorators.csrf import csrf_exempt
from django.test import Client

User = get_user_model()

@pytest.fixture
def test_user(db):
    user = User.objects.create_user(username="testuser", email="test@example.com", password="testpass123")
    return user

@pytest.fixture
def auth_client(test_user):
    client = Client(enforce_csrf_checks=True)

     # Fetch CSRF token by hitting a view that has @ensure_csrf_cookie
    client.get("/login-api/checkAuth")

    client.login(username="testuser", password="testpass123")
    return client


# Tests for Create Account view
# ===============================================================
@pytest.mark.django_db
def test_create_account_success(client):
    url = '/login-api/createAccount'
    payload = {
        "data": {
            "username": "testuser",
            "emailAddress": "test@example.com",
            "password": "securePassword123",
            "confirmPassword": "securePassword123"
        }
    }

    response = client.post(
        url,
        data=json.dumps(payload),
        content_type="application/json"
    )

    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "success"
    assert CustomUser.objects.filter(username="testuser").exists()


@pytest.mark.django_db
def test_create_account_password_mismatch(client):
    url = '/login-api/createAccount'
    payload = {
        "data": {
            "username": "testuser2",
            "emailAddress": "test2@example.com",
            "password": "pass123",
            "confirmPassword": "pass456"
        }
    }

    response = client.post(
        url,
        data=json.dumps(payload),
        content_type="application/json"
    )
    
    assert response.status_code == 400
    data = response.json()
    assert data["status"] == "error"
    assert "Confirm password does not match" in data["message"]


@pytest.mark.django_db
def test_create_account_invalid_method(auth_client):
    url = '/login-api/createAccount'
    response = auth_client.get(url)

    assert response.status_code == 405
    data = response.json()
    assert data["status"] == "error"
    assert data["message"] == "Invalid request method"


# Tests for Login Account view
# ===============================================================
@pytest.mark.django_db
def test_login_success(auth_client, test_user):
    # Fetch CSRF token by hitting a view that has @ensure_csrf_cookie
    auth_client.get("/login-api/checkAuth")
    csrf_token = auth_client.cookies['csrftoken'].value

    # Send login request
    response = auth_client.post(
        "/login-api/loginAccount",
        data=json.dumps({
            "username": "testuser",
            "password": "testpass123"
        }),
        content_type="application/json",
        HTTP_X_CSRFTOKEN=csrf_token
    )

    print("CSRF:", csrf_token)
    print("Response:", response.content)

    assert response.status_code == 200
    assert response.json()["status"] == "success"

# Tests for Check Auth view
# ===============================================================

def test_check_auth(auth_client):
    response = auth_client.get("/login-api/checkAuth")
    assert response.status_code == 200
    assert response.json()["authenticated"] is True

# Tests for Update Password view
# ===============================================================

def test_update_password_success(auth_client, test_user):
    csrf_token = auth_client.cookies['csrftoken'].value

    response = auth_client.post("/login-api/updatePassword", json.dumps({
        "oldPassword": "testpass123",
        "newPassword": "newpass456",
        "confirmPassword": "newpass456"
    }), content_type="application/json", HTTP_X_CSRFTOKEN=csrf_token)
    assert response.status_code == 200
    assert response.json()["status"] == "success"

# Tests for Update About view
# ===============================================================


# Tests for Update Username view
# ===============================================================

def test_update_username_success(auth_client, test_user):
    csrf_token = auth_client.cookies['csrftoken'].value
    response = auth_client.post("/login-api/updateUsername", json.dumps({
        "password": "testpass123",
        "newUsername": "newusername"
    }), content_type="application/json", HTTP_X_CSRFTOKEN=csrf_token)
    assert response.status_code == 200
    assert response.json()["status"] == "success"

# Tests for Get Profile Data view
# ===============================================================
def test_get_profile(auth_client):
    response = auth_client.get("/login-api/getProfileData")
    print(response)
    assert response.status_code == 200



# Tests for Logout view
# ===============================================================

def test_logout(auth_client):
    csrf_token = auth_client.cookies['csrftoken'].value
    response = auth_client.post("/login-api/logoutAccount", content_type="application/json", HTTP_X_CSRFTOKEN=csrf_token)
    assert response.status_code == 200
    assert response.json()["message"] == "Logged out successfully"