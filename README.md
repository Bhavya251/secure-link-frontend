# SecureLink - Frontend

This is the frontend of **SecureLink**, a secure and responsive chat application built with React and Material UI (MUI). This frontend supports theme toggling, responsive layouts, and user authentication pages.

## 🌐 Live Stack (Frontend)
- **Framework:** React (Vite)
- **Styling:** Material UI (MUI v5)
- **Routing:** React Router v6
- **Theme:** Light/Dark Toggle using MUI Custom Themes
- **Assets:** Local images for light and dark mode

---

## 📁 Folder Structure

```
secure-link-frontend/
├── public/
├── src/
│   ├── assets/
│   │   └── images/               # Theme-based hero images
│   ├── components/
│   │   └── ThemeToggle.jsx       # Theme switcher
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   └── ForgotPassword.jsx
│   ├── theme/
│   │   ├── theme.js              # Light and dark theme config
│   │   └── ThemeContext.jsx      # Theme context provider
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── package.json
└── README.md
```

---

## ✅ Pages Completed

### 🏠 Home
- Hero section with theme-aware image
- Responsive grid layout
- Welcome text + CTA buttons (Login, Signup)

### 🔐 Login
- Email and password fields
- MUI form validation
- Placeholder login button

### 🧾 Signup
- Name, email, password, confirm password
- Input validations
- MUI layout

### 🔁 Forgot Password
- Email input
- MUI Alert + success/error placeholder (awaiting backend)

---

## 🎨 Theme Toggle
- Switch between light and dark themes
- Custom MUI `ThemeContext`
- Theme preference persists across routes
- Hero image updates based on selected theme

---

## 🧩 Integration Ready
The app is ready for backend integration for:
- Login
- Signup
- Forgot Password

---

## 🛠️ To-Do
- 🔄 Integrate backend APIs (auth)
- 👤 Create profile page after login
- 💬 Design chat interface (with WebSocket)
- 🧪 Add error handling and validation logic

---

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/your-username/secure-link-frontend.git
cd secure-link-frontend

# Install dependencies
npm install

# Run the dev server
npm run dev
```

---

## 👨‍💻 Author
- **Name:** Bhavya Patel
- **Frontend:** React + MUI + Vite
- **Backend (upcoming):** Django + REST + Channels

---
