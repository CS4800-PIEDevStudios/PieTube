import pytest
import json
from LoginAPI.models import CustomUser
from django.urls import reverse
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt

#Disable CSRF for testing convenience (ONLY for test purposes)
@csrf_exempt
def csrf_free_create_account_view(request):
    from LoginAPI.views import createAccount
    return createAccount(request)

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
def test_create_account_invalid_method(client):
    url = '/login-api/createAccount'
    response = client.get(url)

    assert response.status_code == 405
    data = response.json()
    assert data["status"] == "error"
    assert data["message"] == "Invalid request method"
