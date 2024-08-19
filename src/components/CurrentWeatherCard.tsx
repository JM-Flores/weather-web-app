import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Grid,
  Heading,
  HStack,
  Image,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import useWeather from "../hooks/useWeather";
import CardSkeleton from "./CardSkeleton";
import { weatherQuery } from "../App";

interface Props {
  weatherQuery: weatherQuery;
}

const CurrentWeatherCard = ({ weatherQuery }: Props) => {
  const { city, unitTemperature, unitDistance } = weatherQuery;
  const { currentWeather, locationData, forecast, error, isloading } =
    useWeather(city);

  const isCelcius = unitTemperature === "celcius";
  const isKilometers = unitDistance === "k";

  const temperature = Math.round(
    isCelcius ? currentWeather?.temp_c : currentWeather?.temp_f
  );
  const temperatureUnit = isCelcius ? "C" : "F";
  const condition = currentWeather?.condition?.text;
  const conditionIcon = currentWeather?.condition?.icon;

  const date = locationData?.localtime;
  const time = new Date(date?.replace(" ", "T")).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const otherData = [
    {
      label: "Feels Like",
      value:
        Math.round(
          isCelcius ? currentWeather?.feelslike_c : currentWeather?.feelslike_f
        ) +
        "°" +
        temperatureUnit,
    },
    {
      label: "Wind",
      value: isKilometers ? currentWeather?.wind_kph : currentWeather?.wind_mph,
    },
    {
      label: "Wind Gusts",
      value: isKilometers ? currentWeather?.gust_kph : currentWeather?.gust_mph,
    },
  ];

  if (error) return <Text color={"red"}>{error}</Text>;
  if (!city || !currentWeather) return null;
  if (isloading) return <CardSkeleton />;

  return (
    <>
      <Card>
        <CardHeader paddingY={4}>
          <HStack justify="space-between" align={"center"}>
            <Heading size="md">Current Weather</Heading>
            <Text fontWeight="bold">{time}</Text>
          </HStack>
        </CardHeader>
        <Divider color={"gray"} />
        <CardBody>
          <Grid templateColumns="1fr 1fr" gap={4}>
            <Box
              paddingRight={8}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              <HStack paddingTop={4}>
                <Image src={conditionIcon} alt="" />
                <Text
                  fontSize={60}
                  fontWeight="bold"
                  align="left"
                  lineHeight={1}
                  position={"relative"}
                >
                  {temperature}&deg;
                  <Box
                    as="span"
                    position="absolute"
                    right={"5px"}
                    bottom={"2px"}
                    fontSize="lg"
                  >
                    {temperatureUnit}
                  </Box>
                </Text>
              </HStack>
              <Text align={"left"} paddingLeft={1}>
                {condition}
              </Text>
            </Box>
            <VStack divider={<StackDivider />} spacing="4">
              {otherData.map(({ label, value }) => (
                <HStack key={label} justify={"space-between"} width="100%">
                  <Text fontWeight="bold">{label}:</Text>
                  <Text>{value}</Text>
                </HStack>
              ))}
            </VStack>
          </Grid>
        </CardBody>
      </Card>
    </>
  );
};

export default CurrentWeatherCard;
