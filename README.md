# PieTube 🎬

PieTube is a full-stack movie streaming web application that allows users to browse and watch public domain movies. Users can create profiles, rate films, and organize their viewing experience through favorites and a watchlist system.

---

## 🚀 Features

- 🎥 Stream public domain movies  
- ⭐ Rate movies  
- ❤️ Favorite movies  
- 📺 Add movies to a personal watchlist  
- 👤 User authentication and profile system  
- 🖼️ Profile picture uploads (stored in AWS S3)  
- 🔎 Browse and discover movies  

---

## 🏗️ Tech Stack

### Frontend
- React (Vite)
- Axios
- React Router

### Backend
- Django
- Django REST Framework
- MySQL

### Cloud / Infrastructure
- AWS EC2 (hosting full stack app)
- AWS S3 (profile image storage)

---

## ☁️ Deployment Overview

- The application is deployed on an **AWS EC2 instance**, hosting both frontend and backend services.
- User-uploaded media (profile pictures) are stored in an **AWS S3 bucket**.
- The backend exposes a REST API consumed by the React frontend.

---

## 👤 Core Functionality

### User System
- User registration and authentication
- Session handling
- Profile pages with customizable avatars

### Movie System
- Browse public domain movie library
- View detailed movie information
- Rate movies on a per-user basis

### Personal Features
- Add/remove favorites
- Maintain a watchlist
- View personalized user activity
