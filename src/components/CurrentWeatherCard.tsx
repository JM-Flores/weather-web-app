import { Card, CardHeader, Heading, Image, Text } from "@chakra-ui/react";
import useWeather from "../hooks/useWeather";

interface Props {
  city: string | null;
  unit: string;
}

const CurrentWeatherCard = ({ city, unit }: Props) => {
  const { weather, error, isloading } = useWeather(city);

  const temperature = unit === "celcius" ? weather?.temp_c : weather?.temp_f;
  const temperatureUnit = unit === "celcius" ? "C" : "F";
  const condition = weather?.condition?.text;
  const conditionIcon = weather?.condition?.icon;

  if (!city) return null;
  if (error) return <Text color={"red"}>{error}</Text>;

  return (
    <>
      <Card>
        <CardHeader>
          <Heading size="md">Current Weather</Heading>
          <Text>
            {temperature}&deg;{temperatureUnit}
          </Text>
          <Image src={conditionIcon} alt="" />
          <Text>{condition}</Text>
        </CardHeader>
      </Card>
    </>
  );
};

export default CurrentWeatherCard;
