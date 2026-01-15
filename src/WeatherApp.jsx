import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Nashik",
    feelsLike: 20.69,
    humidity: 30,
    tempMax: 21.68,
    tempMin: 21.68,
    temperature: 21.68,
    weather: "clear sky",
  });
  let updateInfo = (info) => {
    setWeatherInfo(info);
  };
  return (
    <div>
      <h2>Weather App</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
