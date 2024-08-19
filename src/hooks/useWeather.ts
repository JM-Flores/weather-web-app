import { useEffect, useState } from "react"
import apiClient from "../services/api-client";

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
    const [error, setError] = useState(null);
    const [isloading, setLoading] = useState(false);

    // setLoading(true);
    useEffect(() => {
        if (city) {
          apiClient
            .get<FetchWeatherResponse>("/current.json", {
              params: {
                q: city,
                aqi: "no",
              },
            })
            .then((res) => {
              setWeather(res.data.current);
            //   setLoading(false);
            })
            .catch((err) => {
                setError(err.message)
                // setLoading(false);
            });

        }
      }, [city]);

    return {weather, error, isloading};
}

export default useWeather;