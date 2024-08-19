import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import useWeather from "../hooks/useWeather";

interface Props {
  city: string | null;
  unit: string;
}

const CurrentWeatherCard = ({ city, unit }: Props) => {
  const { weather, locationData, error, isloading } = useWeather(city);
  console.log(weather);

  const temperature = unit === "celcius" ? weather?.temp_c : weather?.temp_f;
  const temperatureUnit = unit === "celcius" ? "C" : "F";
  const condition = weather?.condition?.text;
  const conditionIcon = weather?.condition?.icon;
  const date = locationData?.localtime;
  const time = new Date(date.replace(" ", "T")).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  if (!city || !weather) return null;
  if (error) return <Text color={"red"}>{error}</Text>;

  return (
    <>
      <Card>
        <CardHeader>
          <Heading size="md">Current Weather</Heading>
          <Text>{time}</Text>
        </CardHeader>
        <CardBody>
          <Text>
            {temperature}&deg;{temperatureUnit}
          </Text>
          <Image src={conditionIcon} alt="" />
          <Text>{condition}</Text>
        </CardBody>
      </Card>
    </>
  );
};

export default CurrentWeatherCard;
