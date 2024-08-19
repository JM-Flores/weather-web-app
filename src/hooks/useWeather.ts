import { useEffect, useState } from "react"
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface CurrentWeather {
    temp_c: number;
    temp_f: number;
    feelslike_c: number;
    feelslike_f: number;
    wind_mph: number;
    wind_kph: number;
    gust_mph: number;
    gust_kph: number;
    condition: {
        code: number;
        icon: string;
        text: string;
    };
}

interface Location {
    localtime: string;
}

interface FetchWeatherResponse {
    current: CurrentWeather;
    location: Location;
}

const useWeather = (city: string | null) => {
    const [weather, setWeather] = useState<CurrentWeather>({} as CurrentWeather);
    const [locationData, setLocationData] = useState<Location>({} as Location);
    const [error, setError] = useState("");
    const [isloading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        
        if (city) {
            setLoading(true);
            apiClient
            .get<FetchWeatherResponse>("/forecast.json", {
              params: {
                q: city,
                aqi: "no",
              },
              signal: controller.signal
            })
            .then((res) => {
              setWeather(res.data.current);
              setLocationData(res.data.location);
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

    return {weather, locationData, error, isloading};
}

export default useWeather;