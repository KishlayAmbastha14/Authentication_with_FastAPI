# 🔐 Authentication with FastAPI

A production-ready implementation of Authentication and Authorization mechanisms using FastAPI.

This project demonstrates modern authentication strategies including Sessions, JWT, OAuth2, and Role-Based Access Control (RBAC).

---

## 🚀 Features

- ✅ Session-Based Authentication (Stateful)
- ✅ JWT-Based Authentication (Stateless)
- ✅ OAuth2 Integration (Google Login Ready)
- ✅ Role-Based Access Control (RBAC)
- ✅ Secure Password Hashing
- ✅ Session Expiry Handling
- ✅ Redis Support (Optional for performance)

---

## 🧠 Authentication vs Authorization

| Authentication | Authorization |
|---------------|---------------|
| Who are you? | What are you allowed to do? |

---

## 🏗 Tech Stack

- FastAPI
- PostgreSQL / SQLite
- Redis (for sessions)
- JWT (JSON Web Tokens)
- OAuth2
- Passlib (Password Hashing)
- Uvicorn

---

## 🔐 Authentication Methods Implemented

### 1️⃣ Session-Based (Stateful)
- Server stores session data
- Session ID sent via cookies
- Expiry support
- Redis for faster lookups

### 2️⃣ JWT-Based (Stateless)
- Server issues signed token
- Token stored in client
- No server-side storage required
- Ideal for APIs & microservices

### 3️⃣ OAuth2 (Optional)
- Social login integration
- Google / GitHub ready structure

---

## 🛡 Authorization

### Role-Based Access Control (RBAC)

Roles:
- Admin
- User

Access control handled via:
- Role verification dependencies
- Protected routes

---

## 🔑 Password Security

- Passwords are hashed (not stored in plain text)
- Uses secure hashing algorithms
- Resistant to reverse attacks

---

## 📂 Project Structure
uthentication-with-fastapi/
│
├──auth-backend/
│ ├── main.py
│ ├── models.py
│ ├── auth.py
│ ├── routes.py
│ ├── database.py
│ └── dependencies.py
│
├── requirements.txt
└── README.md


---

## ⚙️ Installation

```bash
git clone https://github.com/your-username/authentication-with-fastapi.git
cd authentication-with-fastapi
pip install -r requirements.txt
uvicorn app.main:app --reload
````

```🧪 API Endpoints

Method	 Endpoint	  Description
POST	  /register	  Register new user
POST	  /login    	Login user
GET	   /profile	    Get logged-in user profile
GET	   /admin	      Admin-only route
