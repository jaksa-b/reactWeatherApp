import axios from 'axios';
const API_KEY = '870f145172f007953413a5f2f0bb8209';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?units=metric&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city}`;
  const request = axios.get(url);

  console.log("Request: ", request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
