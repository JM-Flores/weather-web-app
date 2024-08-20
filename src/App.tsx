import { Box, Grid, Heading } from "@chakra-ui/react";
import "./App.css";
import { useState } from "react";
import QueryResult from "./components/QueryResult";
import QueryContainer from "./components/QueryContainer";
import NavBar from "./components/NavBar";

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
    <Grid templateRows={"70px 1fr"} width={"100vw"}>
      <NavBar weatherQuery={weatherQuery} setWeatherQuery={setWeatherQuery} />
      <Box display="flex" justifyContent="center" marginTop={8}>
        <Box height={"100vh"} minWidth="400px" maxWidth={"600px"}>
          <QueryResult weatherQuery={weatherQuery} />
        </Box>
      </Box>
    </Grid>
  );
}

export default App;
