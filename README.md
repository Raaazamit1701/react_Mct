# Weather Application

A simple weather application built with React that allows users to fetch and display weather data for various cities. The application provides an intuitive interface for searching cities, viewing current weather conditions, and managing fetched data.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)

## Demo

Check out the live demo of the application: [Weather Application Demo](https://react-mct-rho.vercel.app/)

You can also view the source code on GitHub: [Weather Application GitHub Repository](https://github.com/Raaazamit1701/react_Mct.git)

## Features

- Fetch weather data for multiple cities.
- Highlight the city currently being processed.
- Display weather details, including temperature, pressure, and a description.
- Search for specific cities and get immediate feedback if they exist in the data.
- Update weather descriptions and delete city entries from the displayed list.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling the application.
- **Vercel**: Hosting platform for frontend frameworks.

## Installation

To run the application locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Raaazamit1701/react_Mct.git

2. Navigate into the project directory:
   ```bash
   git clone https://github.com/Raaazamit1701/react_Mct.git

3. Install the required dependencies:
   ```bash
   npm install


4. Start the development server:

   ```bash
   npm run dev


5. Open your browser and go to http://localhost:3000 to view the application.
  

## Usage

- Click the **Get Weather** button to fetch weather data for cities listed in the application.
- Use the **search bar** to find specific cities. If found, it highlights the corresponding entry in the weather details table.
- You can **update the description** of any city and **delete** any city from the displayed data.

## File Structure 

``` bash
react-weather-app/ ├── public/ │ ├── index.html │ └── favicon.ico ├── src/ │ ├── Component/ │ │ ├── CityList.js │ │ ├── Search.js │ │ └── WeatherDetails.js │ ├── App.js │ ├── index.js │ ├── App.css │ └── index.css ├── package.json ├── README.md └── .gitignore