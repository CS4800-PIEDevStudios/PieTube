PieTube 🎬

PieTube is a full-stack movie streaming web application that allows users to browse and watch public domain movies. Users can create profiles, rate films, and organize their viewing experience through favorites and a watchlist system.

🚀 Features
🎥 Stream public domain movies
⭐ Rate movies
❤️ Favorite movies
📺 Add movies to a personal watchlist
👤 User authentication and profile system
🖼️ Profile picture uploads
🔎 Movie browsing and discovery
🏗️ Tech Stack

Frontend

React (Vite)
Axios
React Router

Backend

Django
Django REST Framework
MySQL

Infrastructure

AWS EC2 (hosting frontend + backend)
AWS S3 (profile picture storage)
☁️ Deployment Architecture
Frontend and backend are deployed on an AWS EC2 instance.
Static and media files (including user profile images) are stored and served via an AWS S3 bucket.
REST API handles communication between frontend and backend.
🧑‍💻 Core Functionality
User System
Register / login / logout
Profile customization with profile images stored in S3
Persistent user sessions
Movie System
Browse public domain movie catalog
View movie details
Rate movies (user-based rating system)
Personalization
Add/remove favorites
Manage watchlist
View personalized profile activity
