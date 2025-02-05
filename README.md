# 🏆 **EquiSports - E-Commerce Platform for Sports Equipment**

## 🌟 Project Overview

**EquiSports** is a responsive **e-commerce platform** designed for sports enthusiasts. It offers a seamless shopping experience with dynamic product management, user authentication, and order processing. Built with **React, Firebase, and TailwindCSS**, EquiSports provides a fast and interactive user interface with advanced search and filtering options.

🔗 **Live Project:** [EquiSports](https://equisports-b8d0f.web.app/)

### 🚀 Technologies Used

- **Frontend:** React, React Router, Vite
- **State Management & API Handling:** Axios
- **UI & Styling:** TailwindCSS, Swiper.js
- **SEO Optimization:** React Helmet
- **Animations & Effects:** React Awesome Reveal
- **Notifications & Tooltips:** React Toastify, React Tooltip, React Hot Toast
- **Authentication & Database:** Firebase

### ✨ Core Features

✅ **User Authentication** - Secure login & registration with Firebase  
✅ **Dynamic Product Management** - Add, edit, and manage products  
✅ **Search & Filtering** - Find products quickly with advanced search options  
✅ **Shopping Cart & Wishlist** - Save products and checkout easily  
✅ **Order Processing** - Manage orders with real-time updates  
✅ **Customer Reviews** - Users can rate and review products  
✅ **Interactive UI** - Smooth transitions with Swiper & React Awesome Reveal  
✅ **SEO Optimization** - React Helmet for better search rankings  
✅ **Real-time Database Updates** - Firebase Firestore for instant data sync

### 🔑 Environment Variables

Create a `.env.local` file in the root directory and add the following:

```sh
# Firebase Configuration
VITE_apiKey=your_firebase_api_key_here
VITE_authDomain=your_firebase_project_authDomain
VITE_projectId=your_firebase_project_id
VITE_storageBucket=your_firebase_storage_bucket
VITE_messagingSenderId=your_firebase_messaging_sender_id
VITE_appId=your_firebase_app_id
```

> ⚠️ **Important:** Never commit `.env.local` to version control. Add it to `.gitignore`.

### 📦 Dependencies

### **Main Dependencies**

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router": "^7.0.2",
  "react-router-dom": "^7.0.2",
  "firebase": "^11.0.2",
  "axios": "^1.7.9",
  "react-awesome-reveal": "^4.2.14",
  "react-helmet": "^6.1.0",
  "react-hot-toast": "^2.4.1",
  "react-icons": "^5.4.0",
  "react-toastify": "^10.0.6",
  "react-tooltip": "^5.28.0",
  "swiper": "^11.1.15",
  "vite": "^6.0.1"
}
```

### **Development Dependencies**

```json
{
  "@eslint/js": "^9.15.0",
  "@vitejs/plugin-react": "^4.3.4",
  "eslint": "^9.15.0",
  "eslint-plugin-react": "^7.37.2",
  "postcss": "^8.4.49",
  "tailwindcss": "^3.4.16"
}
```

### 🛠️ Installation & Setup

Follow these steps to set up the project locally:

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/parthosarothi46/EquiSports-Client.git
cd EquiSports-Client
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Create an `.env.local` File

```sh
touch .env.local
```

Copy the environment variables from the **🔑 Environment Variables** section above into this file.

### 4️⃣ Start the Development Server

```sh
npm run dev
```

By default, the project runs on `http://localhost:5173/`.

### 5️⃣ Build for Production

```sh
npm run build
```

### 6️⃣ Lint the Code

```sh
npm run lint
```

## 🤝 Contribution Guidelines

Contributions are welcome! Follow these steps to contribute:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature-branch`)
3. **Commit changes** (`git commit -m "Added new feature"`)
4. **Push to your fork** (`git push origin feature-branch`)
5. **Open a Pull Request**

---
