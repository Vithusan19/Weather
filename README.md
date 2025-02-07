# Weather App (Frontend)

This repository contains the frontend of a Weather App built with React. The application fetches real-time weather data for a specific location using a weather API and is fully responsive for mobile devices.

## 🚀 Features

- 🌤️ Fetch real-time weather details for a specific location
- 🔄 Auto-refresh and live updates
- 📱 Mobile-responsive UI
- 🎨 User-friendly interface with clean design

## 🛠️ Tech Stack

- **Frontend:** React, CSS
- **API:** OpenWeatherMap / WeatherAPI (or any real weather API)
- **State Management:** React Hooks / Context API (if applicable)
- **Version Control:** Git & GitHub

## 📌 Getting Started

### 1️⃣ Clone the Repository
```bash
 git clone https://github.com/vithusan19/weather-app.git
 cd weather-app
```

### 2️⃣ Install Dependencies
```bash
 npm install
```


```

### 4️⃣ Run the Application
```bash
 npm run dev
```
The app will be available at `http://localhost:3000/`

## 📂 Project Structure
```
/weather-app
│── src/
│   ├── components/   # Reusable UI components
│   ├── pages/        # Application pages       
│   ├── assets/       # Images & static files
│   ├── utils/        # Utility functions
│── public/          # Static assets
│── package.json
│── README.md
```

## 📡 API Integration
- Uses `fetch` or `Axios` to call a real weather API.
- Example API request:
```js
fetch(`https://api.openweathermap.org/data/2.5/weather?q=Colombo&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
  .then(response => response.json())
  .then(data => console.log(data));
```

## 👥 Contributors
Want to contribute? Feel free to fork the repository and create a pull request!

## 📧 Contact
For any issues or feature requests, contact me at **vithu0919@gmail.com**

---
💡 **Star** the repository if you find it useful! ⭐

