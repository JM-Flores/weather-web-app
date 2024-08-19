import { Box, Heading } from "@chakra-ui/react";
import "./App.css";
import CitySelector from "./components/CitySelector";
import { useState } from "react";
import CurrentWeatherCard from "./components/CurrentWeatherCard";

function App() {
  const [city, setCity] = useState<string | null>(null);

  const onCitySelect = (city: string | null) => {
    setCity(city);
  };

  return (
    <>
      <Heading>Weather Forecast</Heading>
      <Box margin={5}>
        <CitySelector onSelect={(city) => onCitySelect(city)} />
      </Box>
      <CurrentWeatherCard city={city} />
    </>
  );
}

export default App;
