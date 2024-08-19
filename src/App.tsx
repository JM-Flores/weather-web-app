import { Heading, HStack } from "@chakra-ui/react";
import "./App.css";
import CitySelector from "./components/CitySelector";
import { useState } from "react";
import UnitSelector from "./components/UnitSelector";
import QueryResult from "./components/QueryResult";

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
      <HStack width={"100%"} marginBlockEnd={4}>
        <CitySelector
          onSelect={(city) => setWeatherQuery({ ...weatherQuery, city: city })}
        />
        <UnitSelector
          onSelect={(unit) =>
            setWeatherQuery({ ...weatherQuery, unitTemperature: unit })
          }
          selectedUnit={weatherQuery.unitTemperature}
        />
      </HStack>
      <QueryResult weatherQuery={weatherQuery} />
    </>
  );
}

export default App;
