# React Weather App
This is a simple weather forecast application built with React, Vite, Tailwind CSS, and OpenWeather API. The app displays the current weather information for a specific location and allows users to search for weather updates in different cities.

Features:

Displays the weather forecast for a specified city.
Shows temperature, weather conditions, wind speed, and humidity.
Provides a search functionality for users to check weather conditions in various cities.

TODO:

OpenWeather API provides 5 days of weather data in 3-hour intervals. I plan to add cards that display the weather forecast by the hour and by day, allowing users to see the weather at different times.

### Installation
To get started with this project, clone the repository and install the necessary dependencies:


```
git clone https://github.com/denizinec/react-weather-app.git
cd react-weather-app
npm install
```

### Running the Application

To run the development server, use the following command:

```
npm run dev
```
This will start the application on your local machine.

OpenWeather API Key
This project uses the OpenWeather API to fetch weather data. You need to provide your own API key to access the service.

Go to the OpenWeather website and sign up for an API key if you don't have one already.
```javascript

const response = await fetch(
                `https://api.openweathermap.org/data/2.5/forecast?q=${param}&units=metric&lang=tr&appid={API_KEY}`
            );

```
Replace {API_KEY} in the code with your actual OpenWeather API key.
