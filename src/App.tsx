import { Heading, HStack, VStack } from "@chakra-ui/react";
import "./App.css";
import CitySelector from "./components/CitySelector";
import { useState } from "react";
import CurrentWeatherCard from "./components/CurrentWeatherCard";
import UnitSelector from "./components/UnitSelector";
import WeatherForecastCard from "./components/WeatherForecastCard";

function App() {
  const [city, setCity] = useState<string | null>(null);
  const [unit, setUnit] = useState<string>("celcius");

  return (
    <>
      <Heading>Weather Forecast</Heading>
      <VStack spacing={2} marginTop={5}>
        <HStack width={"100%"}>
          <CitySelector onSelect={(city) => setCity(city)} />
          <UnitSelector
            onSelect={(unit) => setUnit(unit)}
            selectedUnit={unit}
          />
        </HStack>
        <CurrentWeatherCard
          city={city}
          unitTemperature={unit}
          unitDistance="k"
        />
        <WeatherForecastCard />
      </VStack>
    </>
  );
}

export default App;
