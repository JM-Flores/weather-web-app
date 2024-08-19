import { Heading, Text } from "@chakra-ui/react";
import "./App.css";
import CitySelector from "./components/CitySelector";
import { useEffect, useState } from "react";
import apiClient from "./services/api-client";

function App() {
  const [city, setCity] = useState<string | null>(null);

  const onCitySelect = (city: string | null) => {
    setCity(city);
  };

  useEffect(() => {
    if (city) {
      apiClient
        .get("/current.json", {
          params: {
            q: city,
            aqi: "no",
          },
        })
        .then((res) => {
          console.log(res.data);
        });
    }
  }, [city]);

  return (
    <>
      <Heading>Weather Forecast</Heading>
      <CitySelector onSelect={onCitySelect} />
    </>
  );
}

export default App;
