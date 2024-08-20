import {
  Card,
  CardHeader,
  Divider,
  Heading,
  HStack,
  Image,
  Table,
  Tbody,
  Td,
  Text,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { ForecastDay } from "../hooks/useWeather";
import { weatherQuery } from "../App";
import {
  getDayOfWeek,
  getDayOrNight,
  getMonthDay,
} from "../modules/formatDate";

interface Props {
  weatherQuery: weatherQuery;
  forecast: ForecastDay[];
  localTime: string;
}

const WeatherForecastCard = ({ weatherQuery, forecast, localTime }: Props) => {
  const unitTemperature =
    weatherQuery.unitTemperature === "celcius" ? "C" : "F";

  return (
    <Card width={"100%"} overflow={"hidden"}>
      <CardHeader paddingY={4}>
        <Heading size="md" textAlign={"left"}>
          Weather Forecast
        </Heading>
      </CardHeader>
      <Divider color={"gray"} />
      <Table>
        <Tbody>
          {forecast.map((day, index) => (
            <Tr key={day.date}>
              <Td>
                <VStack spacing={0}>
                  <Text fontWeight={"bold"}>
                    {index === 0
                      ? getDayOrNight(day.date)
                      : getDayOfWeek(day.date)}
                  </Text>
                  <Text fontSize={"small"}>{getMonthDay(day.date)}</Text>
                </VStack>
              </Td>
              <Td>
                <HStack>
                  <Image src={day.day.condition.icon} alt="" boxSize={10} />
                  <Text fontWeight={"bold"} fontSize={"x-large"}>
                    {Math.round(day.day.maxtemp_c)}&deg;
                    {unitTemperature}
                  </Text>
                  <Text fontSize={"medium"}>
                    {Math.round(day.day.mintemp_c)}&deg;
                    {unitTemperature}
                  </Text>
                </HStack>
              </Td>
              <Td>
                <Text fontWeight={"bold"}>{day.day.condition.text}</Text>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Card>
  );
};

export default WeatherForecastCard;
