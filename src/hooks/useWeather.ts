import { useEffect, useState } from "react"
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Condition {
    code: number;
    icon: string;
    text: string;
}

interface CurrentWeather {
    temp_c: number;
    temp_f: number;
    condition: Condition;
}

interface FetchWeatherResponse {
    current: CurrentWeather;
}

const useWeather = (city: string | null) => {
    const [weather, setWeather] = useState<CurrentWeather>({} as CurrentWeather);
    const [error, setError] = useState("");
    const [isloading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        
        if (city) {
            setLoading(true);
            apiClient
            .get<FetchWeatherResponse>("/current.json", {
              params: {
                q: city,
                aqi: "no",
              },
              signal: controller.signal
            })
            .then((res) => {
              setWeather(res.data.current);
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

    return {weather, error, isloading};
}

export default useWeather;