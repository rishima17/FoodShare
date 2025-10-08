🥗 LeftOver Food Donation Platform

A web platform built using the MERN Stack that connects food donors (restaurants, hotels, cafés, individuals) with NGOs and people in need — reducing food waste and helping communities.

🚀 Live Links

Frontend: https://leftover-food-donation.vercel.app

Backend: https://leftover-food-donation.onrender.com

✨ Features
👥 User & Auth

User registration and login with secure validation

JWT-based authentication

Error handling and feedback messages

🏨 Food Partner System

Register as a Restaurant, Hotel, Cafe, or Individual

Provide location, contact details, and description

Automatically stored in the backend database

Helps identify potential food donors

📬 Contact Form

Simple contact form for users to send queries or feedback

Stores messages in MongoDB

🧑‍💻 Admin

Can access all food partner submissions and messages

Ready for dashboard integration

🌐 General

Modern React UI

Responsive layout

Backend API with validation and error handling

Secure CORS setup for frontend–backend communication

Deployed frontend on Vercel

Deployed backend on Render

🧩 Tech Stack

Frontend:

React.js

React Router DOM

CSS / Inline Styling

Backend:

Node.js

Express.js

MongoDB Atlas

Mongoose ORM

Security & Config:

dotenv (Environment variables)

bcrypt (Password hashing)

jsonwebtoken (JWT Authentication)

cors (Cross-Origin Resource Sharing)

Deployment:

Vercel (Frontend)

Render (Backend)

⚙️ Project Structure
LeftOver-Food-Donation/
├── backend/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── contactController.js
│   │   ├── foodpartnerController.js
│   ├── models/
│   │   ├── userModel.js
│   │   ├── foodpartner.js
│   ├── routes/
│   │   ├── authRoute.js
│   │   ├── contactRoute.js
│   │   ├── foodpartnerRoute.js
│   ├── server.js
│   ├── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── index.js
│
└── README.md

📦 Installation & Setup
Prerequisites

Node.js (v16 or later)

MongoDB Atlas connection string

npm or yarn

Clone the Repository
git clone https://github.com/your-username/LeftOver-Food-Donation.git
cd LeftOver-Food-Donation

Backend Setup
cd backend
npm install


Create a .env file and add:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


Run the backend:

npm start

Frontend Setup
cd frontend
npm install
npm run dev


Open the app in your browser:
👉 http://localhost:5173

🔐 API Endpoints
Auth Routes
Method	Endpoint	Description
POST	/api/auth/register	Register a new user
POST	/api/auth/login	Login existing user
Food Partner Routes
Method	Endpoint	Description
POST	/api/food-partner	Submit food partner registration
Contact Routes
Method	Endpoint	Description
POST	/api/contact	Submit a contact message
🧠 How It Works

Users can register and log in securely using JWT authentication.

Food partners can fill out a form with details about their restaurant, hotel, café, or as an individual donor.

The system stores submissions in MongoDB using Mongoose models.

The backend API validates all input before saving.

The frontend communicates with the backend via fetch() requests protected with proper CORS setup.

🤝 Contributing

Contributions are welcome!
If you want to contribute:

Fork the repository

Create a new branch (git checkout -b feature-name)

Make your changes

Commit (git commit -m "Added feature XYZ")

Push and open a Pull Request





“Together, let’s reduce food waste and feed more people.”
