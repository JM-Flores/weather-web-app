import { Grid } from "@chakra-ui/react";
import CitySelector from "./CitySelector";
import UnitSelector from "./UnitSelector";
import { weatherQuery } from "../App";

interface Props {
  weatherQuery: weatherQuery;
  setWeatherQuery: (weatherQuery: weatherQuery) => void;
}

const QueryContainer = ({ weatherQuery, setWeatherQuery }: Props) => {
  return (
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
  );
};

export default QueryContainer;
