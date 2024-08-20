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

  if (!weatherQuery.city)
    return (
      <Text fontWeight={"bold"} align={"center"}>
        Choose a city
      </Text>
    );
  if (error) return <Text color="red">{error}</Text>;
  if (isLoading) return <CardSkeleton />;

  return (
    <VStack spacing={4}>
      {!isLoading && (
        <>
          <CurrentWeatherCard
            weatherQuery={weatherQuery}
            currentWeather={currentWeather}
            locationData={locationData}
          />
          <WeatherForecastCard
            weatherQuery={weatherQuery}
            forecast={forecast}
            localTime={locationData.localtime}
          />
        </>
      )}
    </VStack>
  );
};

export default QueryResult;
