# 📝 FullStack Note Taking App

A full-stack note taking application built from scratch using **React.js**, **Node.js**, **SQLite**, **JWT authentication**, and **bcryptjs**. This app supports secure user registration/login and allows authenticated users to create, view, and manage their notes.

> 🚀 **No tutorials, no boilerplates — built entirely by reading official docs and Stack Overflow.** A pure documentation-driven development challenge!

---

## 🌟 Features

- 🔐 **Authentication**
  - JWT-based secure login and signup
  - Passwords hashed with bcryptjs
- 📓 **Notes**
  - Create, read, and delete notes per user
  - Protected note routes (only accessible when logged in)
- 💾 **Database**
  - Lightweight and fast SQLite database for data persistence
- 🧭 **Routing**
  - Frontend and backend routing handled with React Router and Express.js
- 💡 **Stateful UI**
  - React state hooks for dynamic UI changes
  - Toast notifications for feedback (success/error)

---

## 🧱 Tech Stack

| Frontend | Backend | Auth | Database |
|----------|---------|------|----------|
| React.js | Node.js (Express) | JWT, bcryptjs | SQLite |

---

## 📁 Project Structure

Note-App/
├── client/ # React frontend
│ └── src/
│ ├── pages/
│ ├── components/
│ └── css/
├── server/
│ ├── middleware/ # auth middleware
│ ├── routes/ # auth & notes routes
│ └── db.js # SQLite DB connection
├── .env # Environment variables
├── package.json # Backend dependencies
└── vite.config.js # Frontend config


---

## ⚙️ Setup Instructions

### Clone the repository

bash
git clone https://github.com/your-username/fullstack-noteapp.git
cd fullstack-noteapp


cd server
npm install
node server.js
Make sure to add a .env file with your JWT secret key.

### Frontend Setup

cd client
npm install
npm run dev

### Preview

![Screenshot 2025-06-15 144241](https://github.com/user-attachments/assets/c22d5219-5770-481a-b0e6-a3cad71da38e)
![Screenshot 2025-06-15 144234](https://github.com/user-attachments/assets/365c5b86-ea47-42da-bbb9-61a7ea1eaac3)
![Screenshot 2025-06-15 144302](https://github.com/user-attachments/assets/1da36bb5-d892-4451-9e1d-9ddbbc0632a6)
![Screenshot 2025-06-15 144253](https://github.com/user-attachments/assets/6ff113e1-7a7c-45c7-9b32-b5bb5793e6cb)



https://github.com/user-attachments/assets/d757c8a7-5c7f-4ec4-a61b-30e005d1e747


🔐 Environment Variables
Create a .env file in the root of the backend (/server) and add:
JWT_SECRET=your_jwt_secret_key

🙌 Credits
Built entirely without YouTube tutorials or copy-pasted starter kits — just:

📚 Official documentation

💬 Stack Overflow

🧠 Pure curiosity and trial-and-error

📌 Future Improvements
Add edit functionality to notes

Add user profile page

Search and filter notes

Deployment on Render/Netlify/Verce/Glitch

💬 Feedback
If you have any feedback, questions, or suggestions, feel free to open an issue or message me directly.

⭐️ Star this repo
If you found this useful or inspiring, give it a ⭐ on GitHub to show support!


---

Let me know if you'd like this adapted into a **GitHub README with actual images**, badge icons, or deployed live demo link placeholders!
