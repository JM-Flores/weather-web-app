import { Box, Grid, Heading, HStack } from "@chakra-ui/react";
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
    <Box height={"100vh"}>
      <Heading>Weather Forecast</Heading>
      <Grid templateColumns="1fr 80px" gap={2} width={"100%"} marginY={4}>
        <CitySelector
          onSelect={(city) => setWeatherQuery({ ...weatherQuery, city: city })}
        />
        <UnitSelector
          onSelect={(unit) =>
            setWeatherQuery({ ...weatherQuery, unitTemperature: unit })
          }
          selectedUnit={weatherQuery.unitTemperature}
        />
      </Grid>
      <QueryResult weatherQuery={weatherQuery} />
    </Box>
  );
}

export default App;
