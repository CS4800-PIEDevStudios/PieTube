"""
Django settings for djangoproject project.

Generated by 'django-admin startproject' using Django 5.1.6.

For more information on this file, see
https://docs.djangoproject.com/en/5.1/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/5.1/ref/settings/
"""

from pathlib import Path

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/5.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-zm#=^#g3v^i^k1a#(-&7j)l7+56u9v-0ir!y9(7%!)5oe=8o)_'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['*', '23.20.205.143', '127.0.0.1', 'pietube-database.cwl0gw24qtjq.us-east-1.rds.amazonaws.com', 'ec2-23-20-205-143.compute-1.amazonaws.com', 'localhost']


# CSRF_COOKIE_PATH = '/' 
CSRF_COOKIE_AGE = 31449600  # 60 seconds * 60 minutes * 24 hours * 365 days


CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",
    'http://localhost:5174',
    'http://localhost:5175',
    'http://localhost:8000',
	'http://127.0.0.1:8000',
    'https://cs4800-piedevstudios.github.io',

]

CORS_ALLOW_HEADERS = [
    'content-type',
    'X-CSRFToken',
    'Authorization',
]

CORS_ALLOW_METHODS = [
    'GET',
    'POST',
    'OPTIONS',
    'PUT',
    'DELETE',
]

CSRF_TRUSTED_ORIGINS = [
	'http://127.0.0.1:8000',
	'http://localhost:5173',
    'http://localhost:5174',
    'http://localhost:5175',
    'http://localhost:8000',
    'https://cs4800-piedevstudios.github.io',
    'https://ec2-23-20-205-143.compute-1.amazonaws.com'
]


SESSION_COOKIE_SAMESITE = 'Lax'
SESSION_COOKIE_SECURE = True 

# For development only
# CORS_ORIGIN_ALLOW_ALL = True
CORS_ORIGIN_ALLOW_ORIGIN = True

# CORS_ALLOW_ALL_ORIGINS = True

CSRF_COOKIE_SECURE = True  # Disable if not using HTTPS in development FALSE WHEN DEV
CSRF_COOKIE_HTTPONLY = False  # Allow JavaScript access to the CSRF cookie
CSRF_COOKIE_SAMESITE = 'Lax'  # Allow cookies in cross-origin requests LAX WHEN DEV

SESSION_COOKIE_DOMAIN = '.cs4800-piedevstudios.github.io'
CSRF_COOKIE_DOMAIN = '.cs4800-piedevstudios.github.io'

CORS_ALLOW_CREDENTIALS = True








# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.contenttypes',
    'django.contrib.staticfiles',
    'django.contrib.sessions',  
    'django.contrib.auth',      
    'django.contrib.messages',  
    'rest_framework',
    'myapp',
    'LoginAPI',
    'corsheaders'
]

MIDDLEWARE = [
	'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'djangoproject.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'djangoproject.wsgi.application'


# Database
# https://docs.djangoproject.com/en/5.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'PieTube',
        'USER': 'admin',
        'PASSWORD': 'OvCCanRNLvBjdfiKUt3I',
        'HOST': 'pietube-database.cwl0gw24qtjq.us-east-1.rds.amazonaws.com',  # e.g., AWS RDS endpoint
        'PORT': '3306',
    }
}


# Password validation
# https://docs.djangoproject.com/en/5.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/5.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# USER MODEL

AUTH_USER_MODEL = 'LoginAPI.CustomUser'


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.1/howto/static-files/

STATIC_URL = 'static/'

# Default primary key field type
# https://docs.djangoproject.com/en/5.1/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
