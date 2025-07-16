# 🌤️ Weather App

A simple, responsive weather application built with HTML, CSS, and JavaScript that displays weather information for various cities around the world.

## 📋 Features

- **City Search**: Enter any city name to get weather information
- **Multiple Weather Metrics**: View detailed information about:
  - 🌡️ Temperature (with Celsius/Fahrenheit toggle)
  - 💧 Humidity levels
  - ☀️ UV Index
  - 💨 Wind Speed
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **Visual Indicators**: Color-coded icons that change based on weather conditions
- **Local Storage**: Temporarily stores weather data for navigation between pages

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Styling and responsive design
- **JavaScript (ES6+)**: Application logic and interactivity
- **Font Awesome**: Weather-related icons
- **Local Storage API**: Data persistence between page navigation

## 📁 Project Structure

```
weather-app/
├── index.html          # Main landing page
├── temperature.html    # Temperature display page
├── humidity.html       # Humidity display page
├── uv.html            # UV Index display page
├── wind.html          # Wind speed display page
├── script.js          # Main JavaScript functionality
├── styles.css         # CSS styling
├── sample.json        # Sample weather data
└── README.md          # Project documentation
```

## 🏃‍♂️ Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic understanding of HTML/CSS/JavaScript (for development)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/EdwinShibuMathew/weather-app.git
   cd weather-app
   ```

2. **Open the application**

   - Simply open `index.html` in your web browser
   - Or use a local development server:

     ```bash
     # Using Python
     python -m http.server 8000

     # Using Node.js (if you have live-server installed)
     npx live-server
     ```

3. **Access the app**
   - Navigate to `http://localhost:8000` (if using a server)
   - Or directly open the `index.html` file in your browser
   - Or visit https://github.com/EdwinShibuMathew/weather-app/deployments/github-pages

## 🎮 How to Use

1. **Enter a City**: Type a city name in the input field on the main page
2. **Get Weather**: Click the "Get Weather" button to load data
3. **Navigate**: Use the navigation buttons to view different weather metrics:
   - **Temperature**: View current temperature with toggle between °C and °F
   - **Humidity**: Check humidity percentage with visual indicators
   - **UV Index**: Monitor UV levels with safety color coding
   - **Wind Speed**: See wind speed with intensity indicators

## 🌍 Available Cities

The app currently includes sample data for these cities:

- Dublin
- New York
- Tokyo
- Sydney
- London
- Paris

## 🎨 Features Detail

### Temperature Page

- Displays temperature in Celsius by default
- Click "Toggle °C/°F" to switch between Celsius and Fahrenheit
- Color-coded icon (yellow for warm, blue for cool)

### Humidity Page

- Shows humidity as a percentage
- Blue icon for high humidity (>70%), gray for normal levels

### UV Index Page

- Displays UV index value
- Red icon for high UV (>7), green for safe levels

### Wind Speed Page

- Shows wind speed in km/h
- Orange icon for strong winds (>20 km/h), black for normal

## 🔧 Customization

### Adding More Cities

Edit the `sample.json` file to add more cities:

```json
{
  "cityName": "Your City",
  "temperatureCelsius": 22,
  "humidity": 0.65,
  "uvIndex": 6,
  "windSpeed": "12km"
}
```

### Styling

Modify `styles.css` to customize:

- Color schemes
- Typography
- Layout and spacing
- Responsive breakpoints

### Adding Features

The modular JavaScript structure makes it easy to add:

- More weather metrics
- Different data sources
- Enhanced animations
- Weather forecasts

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source, feel free to use it as components

## 🐛 Known Issues

- Data is currently static (from `sample.json`)
- Limited to predefined cities
- No real-time weather API integration

## 🚀 Future Enhancements

- [ ] Integration with real weather API (OpenWeatherMap, WeatherAPI)
- [ ] 5-day weather forecast
- [ ] Geolocation support
- [ ] Weather alerts and notifications
- [ ] Dark/Light theme toggle
- [ ] Weather maps integration
- [ ] Historical weather data
- [ ] Favorite cities feature

## 👨‍💻 Author

**Your Name**

- GitHub: [@EdwinShibuMathew](https://github.com/EdwinShibuMathew/weather-app)
- Email: iedwini777@gmail.com

## 🙏 Acknowledgments

- [Font Awesome](https://fontawesome.com/) for the weather icons
- [OpenWeatherMap](https://openweathermap.org/) for weather data inspiration
- The web development community for best practices and inspiration

---

⭐ **Star this repository if you found it helpful!**
