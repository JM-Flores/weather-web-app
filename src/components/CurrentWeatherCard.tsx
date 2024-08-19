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
  Stack,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import useWeather from "../hooks/useWeather";

interface Props {
  city: string | null;
  unitTemperature: string;
  unitDistance: string;
}

const CurrentWeatherCard = ({ city, unitTemperature, unitDistance }: Props) => {
  const { weather, locationData, error, isloading } = useWeather(city);

  const isCelcius = unitTemperature === "celcius";
  const isKilometers = unitDistance === "k";

  const temperature = isCelcius ? weather?.temp_c : weather?.temp_f;
  const temperatureUnit = isCelcius ? "C" : "F";
  const condition = weather?.condition?.text;
  const conditionIcon = weather?.condition?.icon;

  const date = locationData?.localtime;
  const time = new Date(date?.replace(" ", "T")).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const otherData = [
    {
      label: "Feels Like",
      value: isCelcius ? weather?.feelslike_c : weather?.feelslike_f,
    },
    {
      label: "Wind",
      value: isKilometers ? weather?.wind_kph : weather?.wind_mph,
    },
    {
      label: "Wind Gusts",
      value: isKilometers ? weather?.gust_kph : weather?.gust_mph,
    },
  ];

  if (!city || !weather) return null;
  if (error) return <Text color={"red"}>{error}</Text>;

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
            <Box alignContent={"center"}>
              <HStack>
                <Image src={conditionIcon} alt="" />
                <Text fontSize={40} fontWeight="bold">
                  {temperature}&deg;{temperatureUnit}
                </Text>
              </HStack>
              <Text>{condition}</Text>
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
