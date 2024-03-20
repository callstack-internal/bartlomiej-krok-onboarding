export interface WeatherListResponse {
  cnt: number;
  list: WeatherResponseItem[];
}

export interface WeatherResponseItem {
  clouds: Clouds;
  coord: Coord;
  dt: number;
  id: number;
  main: Main;
  name: string;
  sys: Sys;
  visibility: number;
  weather: Weather[];
  wind: Wind;
}

interface Clouds {
  all: number;
}
interface Coord {
  lon: number;
  lat: number;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}
interface Sys {
  country: string;
  timezone: number;
  sunrise: number;
  sunset: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Wind {
  speed: number;
  deg: number;
}
