import { Card, CardHeader, Heading, Image, Text } from "@chakra-ui/react";
import useWeather from "../hooks/useWeather";

interface Props {
  city: string | null;
}

const CurrentWeatherCard = ({ city }: Props) => {
  const { weather, error, isloading } = useWeather(city);

  const temperatureC = weather?.temp_c;
  const temperatureF = weather?.temp_f;
  const condition = weather?.condition?.text;
  const conditionIcon = weather?.condition?.icon;

  if (!city) return null;
  if (error) return <Text color={"red"}>{error}</Text>;

  return (
    <>
      <Card>
        <CardHeader>
          <Heading size="md">Current Weather</Heading>
          <Text>{temperatureC}&deg;c</Text>
          <Image src={conditionIcon} alt="" />
          <Text>{condition}</Text>
        </CardHeader>
      </Card>
    </>
  );
};

export default CurrentWeatherCard;
