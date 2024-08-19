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

  const temperature = Math.round(isCelcius ? weather?.temp_c : weather?.temp_f);
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
      value:
        Math.round(isCelcius ? weather?.feelslike_c : weather?.feelslike_f) +
        "°" +
        temperatureUnit,
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

  if (error) return <Text color={"red"}>{error}</Text>;
  if (!city || !weather) return null;

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
