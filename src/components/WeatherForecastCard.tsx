import {
  Card,
  CardHeader,
  Divider,
  Heading,
  HStack,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ForecastDay } from "../hooks/useWeather";

interface Props {
  forecast: ForecastDay[];
}

const WeatherForecastCard = ({ forecast }: Props) => {
  return (
    <Card>
      <CardHeader paddingY={4}>
        <Heading size="md">Weather Forecast</Heading>
      </CardHeader>
      <Divider color={"gray"} />
      <VStack divider={<StackDivider />}>
        {forecast.map((forecastDay) => (
          <HStack>
            <Text>{forecastDay.date}</Text>
            <Text>{forecastDay.day.maxtemp_c}</Text>;
            <Text>{forecastDay.day.mintemp_c}</Text>;
          </HStack>
        ))}
      </VStack>
    </Card>
  );
};

export default WeatherForecastCard;
