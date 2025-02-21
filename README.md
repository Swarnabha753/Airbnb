# 🌍 WanderLust (Airbnb Clone)

Welcome to **WanderLust**, a full-featured Airbnb clone! This web application allows users to create accounts, list properties, and rent properties from others. It demonstrates modern web technologies while following the **MVC (Model-View-Controller)** design pattern.

---

## 📖 Table of Contents
- [✨ Features](#-features)
- [🛠 Technologies Used](#-technologies-used)
- [📥 Installation](#-installation)
- [🚀 Usage](#-usage)
- [📂 Project Structure](#-project-structure)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)

---

## ✨ Features
✅ **User Authentication**: Secure user registration and login functionality.  
✅ **Property Listings**: Users can create, edit, and delete their own listings.  
✅ **Reviews & Ratings**: Users can leave feedback on properties they have visited.  
✅ **Map Integration**: Interactive maps powered by **Mapbox** for property display.  
✅ **Image Uploads**: Property images are stored using **Cloudinary**.  
✅ **Responsive Design**: Fully mobile-friendly, styled with **Bootstrap**.  

---

## 🛠 Technologies Used

### 📌 Backend:
- **Express.js** - Web framework for Node.js
- **MongoDB & MongoDB Atlas** - Database for storing user and property data
- **Passport.js** - User authentication
- **JOI** - Schema validation
- **Multer** - File uploads
- **cookie-parser** & **method-override**
- **dotenv** - Environment variable management

### 🎨 Frontend:
- **EJS** - Template engine
- **Bootstrap** - Styling framework
- **Mapbox** - Interactive maps

### ☁️ Cloud Services:
- **Cloudinary** - Image hosting
- **Render** - Deployment platform

---

## 📥 Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/WanderLust.git
   cd WanderLust
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Set up environment variables:**
   - Create a `.env` file and add the following:
     ```env
     CLOUDINARY_CLOUD_NAME=your_cloud_name
     CLOUDINARY_API_KEY=your_api_key
     CLOUDINARY_API_SECRET=your_api_secret
     MAPBOX_TOKEN=your_mapbox_token
     ```
4. **Run the server:**
   ```sh
   npm start
   ```
5. **Visit the application:**
   Open your browser and go to `http://localhost:3000`

---

## 🚀 Usage
- **Sign up or log in** to your account.
- **Create a property listing** with images and details.
- **Browse and book** properties from other users.
- **Leave reviews** after staying at a property.

---

## 📂 Project Structure
```
WanderLust/
│── models/         # Database schemas
│── routes/         # Application routes
│── views/          # EJS templates
│── public/         # Static files (CSS, JS, Images)
│── config/         # Configuration files
│── app.js          # Main application file
│── .env            # Environment variables
│── package.json    # Dependencies and scripts
```

---

## 🤝 Contributing
Contributions are welcome! If you'd like to improve **WanderLust**, follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`
3. Make your changes and commit: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature-branch`
5. Open a Pull Request!

---

## 📜 License
This project is licensed under the **MIT License**. Feel free to modify and use it as needed!

---

🚀 **Happy Coding & Safe Travels!** ✈️🏡



Cloud Services:

Cloudinary for image storage

Render for deployment
