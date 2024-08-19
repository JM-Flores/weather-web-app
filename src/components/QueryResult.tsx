import { Text, VStack } from "@chakra-ui/react";
import useWeather from "../hooks/useWeather";
import CardSkeleton from "./CardSkeleton";
import CurrentWeatherCard from "./CurrentWeatherCard";
import WeatherForecastCard from "./WeatherForecastCard";
import { weatherQuery } from "../App";

interface Props {
  weatherQuery: weatherQuery;
}

const QueryResult = ({ weatherQuery }: Props) => {
  const { currentWeather, locationData, forecast, error, isLoading } =
    useWeather(weatherQuery.city);

  if (!weatherQuery.city) return null;
  if (error) return <Text color="red">{error}</Text>;
  if (isLoading) return <CardSkeleton />;

  return (
    <VStack spacing={2}>
      {!isLoading && (
        <>
          <CurrentWeatherCard
            weatherQuery={weatherQuery}
            currentWeather={currentWeather}
            locationData={locationData}
          />
          <WeatherForecastCard forecast={forecast} />
        </>
      )}
    </VStack>
  );
};

export default QueryResult;
