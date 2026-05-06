# 🎧 Spotify Clone Backend (MERN + MVCR)

A scalable and secure backend for a Spotify-like music streaming application, built using the MERN stack and structured with the MVCR (Model-View-Controller-Routes) architecture. This project includes JWT-based authentication and follows real-world backend development practices.

---

## 🚀 Features

* JWT Authentication (Login / Register / Protected Routes)
* User Management System
* Music / Songs API
* Playlist Management
* Like / Favorite System
* Search Functionality
* RESTful API Design
* Clean MVCR Architecture
* MongoDB Integration (Mongoose)

---

## 🏗️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JSON Web Token (JWT)
* bcrypt.js
* dotenv

---

## 📁 Folder Structure (MVCR Pattern)

```bash
backend/
│
├── src/
│   ├── models/        # Database schemas (Mongoose Models)
│   ├── controllers/   # Business logic
│   ├── routes/        # API routes
│   ├── db/            # Database & environment configs
│   ├── middlewares/   # Authentication & error handling
│   └── utils/         # Helper functions
│
├── .env
├── package.json
└── server.js
```

---

## 🔐 Authentication (JWT)

* Uses JSON Web Tokens for secure authentication
* Token is generated on login/signup
* Protected routes require token in headers:

```bash
Authorization: Bearer <your_token>
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/zohaibimtiaz472007/spotifyClone.git
cd spotifyClone
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Create a `.env` file in the root directory and add:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4. Run the server

```bash
npm run dev
```

or

```bash
npm start
```

---

## 📡 API Endpoints (Sample)

### Auth Routes

```bash
POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/logout
```

### User Routes

```bash
GET    /api/users/profile
```

### Music Routes

```bash
POST   /api/upload
GET    /
```

### Playlist Routes

```bash
POST   /api/album
GET    /api/albumId/:id
```

---

## 🛡️ Middleware

* Auth Middleware → Verifies JWT token
* Error Handler → Centralized error handling
* Async Wrapper → Cleaner async/await handling

---

## 🧪 Testing

You can test APIs using:

* Postman
* Thunder Client
* Insomnia

---

## 🌟 Future Improvements

* Audio streaming support
* Recommendation system
* Analytics dashboard
* Cloud storage integration
* Mobile app support

---

## 📌 Notes

* This is a backend-only project
* Designed to connect with a React frontend
* Built with scalability and clean architecture in mind

---

## 🤝 Contributing

Pull requests are welcome. For major changes, open an issue first.
