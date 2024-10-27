// CityList.js
import React from "react";

const CityList = ({ cities, onGetWeather, highlightedCity, fetchedCities }) => {
  return (
    <div className="w-1/5 bg-white p-6 flex flex-col items-center border-r border-blue-300 shadow-md rounded-l-lg">
      <button
        className="bg-blue-600 text-white py-2 px-5 mb-6 rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
        onClick={onGetWeather}
      >
        Get Weather
      </button>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="text-blue-600 font-semibold">City</th>
          </tr>
        </thead>
        <tbody>
          {cities.map((city) => (
            <tr
              key={city}
              className={`${
                highlightedCity === city
                  ? "bg-blue-100 border-green-500 font-semibold"
                  : fetchedCities.includes(city)
                  ? "text-green-600 text-bold border-2 border-green-300"
                  : ""
              } transition-all duration-200`}
            >
              <td className="py-3 px-2 border-b border-blue-200">{city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CityList;
