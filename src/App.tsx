import { Box, Heading } from "@chakra-ui/react";
import "./App.css";
import { useState } from "react";
import QueryResult from "./components/QueryResult";
import QueryContainer from "./components/QueryContainer";

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
    <Box height={"100vh"} minWidth="400px">
      <Heading>Weather Forecast</Heading>
      <QueryContainer
        weatherQuery={weatherQuery}
        setWeatherQuery={setWeatherQuery}
      />
      <QueryResult weatherQuery={weatherQuery} />
    </Box>
  );
}

export default App;
