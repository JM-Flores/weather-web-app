import { Heading, HStack, VStack } from "@chakra-ui/react";
import "./App.css";
import CitySelector from "./components/CitySelector";
import { useState } from "react";
import CurrentWeatherCard from "./components/CurrentWeatherCard";
import UnitSelector from "./components/UnitSelector";
import WeatherForecastCard from "./components/WeatherForecastCard";

export interface weatherQuery {
  city: string | null;
  unitTemperature: string;
  unitDistance: string;
}

function App() {
  const [weatherQuery, setWeatherQuery] = useState<weatherQuery>({
    unitTemperature: "celcius",
    unitDistance: "k",
  } as weatherQuery);

  return (
    <>
      <Heading>Weather Forecast</Heading>
      <VStack spacing={2} marginTop={5}>
        <HStack width={"100%"}>
          <CitySelector
            onSelect={(city) =>
              setWeatherQuery({ ...weatherQuery, city: city })
            }
          />
          <UnitSelector
            onSelect={(unit) =>
              setWeatherQuery({ ...weatherQuery, unitTemperature: unit })
            }
            selectedUnit={weatherQuery.unitTemperature}
          />
        </HStack>
        <CurrentWeatherCard weatherQuery={weatherQuery} />
        <WeatherForecastCard />
      </VStack>
    </>
  );
}

export default App;
