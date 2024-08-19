import { Heading, HStack } from "@chakra-ui/react";
import "./App.css";
import CitySelector from "./components/CitySelector";
import { useState } from "react";
import CurrentWeatherCard from "./components/CurrentWeatherCard";
import UnitSelector from "./components/UnitSelector";

function App() {
  const [city, setCity] = useState<string | null>(null);
  const [unit, setUnit] = useState<string>("celcius");

  return (
    <>
      <Heading>Weather Forecast</Heading>
      <HStack margin={5}>
        <CitySelector onSelect={(city) => setCity(city)} />
        <UnitSelector onSelect={(unit) => setUnit(unit)} selectedUnit={unit} />
      </HStack>
      <CurrentWeatherCard city={city} unit={unit} />
    </>
  );
}

export default App;
