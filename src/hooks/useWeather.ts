import { useEffect, useState } from "react"
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Condition {
    icon: string;
        text: string;
}

export interface CurrentWeather {
    temp_c: number;
    temp_f: number;
    feelslike_c: number;
    feelslike_f: number;
    wind_mph: number;
    wind_kph: number;
    gust_mph: number;
    gust_kph: number;
    condition: Condition;
}

export interface Location {
    localtime: string;
}

export interface ForecastDay {
    date: string;
    day: {
        mintemp_c: number;
        mintemp_f: number;
        maxtemp_c: number;
        maxtemp_f: number;
        condition: Condition;
    };
}

interface FetchWeatherResponse {
    current: CurrentWeather;
    location: Location;
    forecast: {
        forecastday: ForecastDay[];
    };
}

const useWeather = (city: string | null) => {
    const [currentWeather, setCurrentWeather] = useState<CurrentWeather>({} as CurrentWeather);
    const [locationData, setLocationData] = useState<Location>({} as Location);
    const [forecast, setForecast] = useState<ForecastDay[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        
        if (city) {
            setLoading(true);
            apiClient
            .get<FetchWeatherResponse>("/forecast.json", {
              params: {
                q: city,
                days: 3,
                aqi: "no",
                alerts: "no"
              },
              signal: controller.signal
            })
            .then((res) => {
              setCurrentWeather(res.data.current);
              setLocationData(res.data.location);
              setForecast(res.data.forecast.forecastday);
              setLoading(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message)
                setLoading(false);
            });

        }

        return () => controller.abort();
      }, [city]);

    return {currentWeather, locationData, forecast, error, isLoading};
}

export default useWeather;