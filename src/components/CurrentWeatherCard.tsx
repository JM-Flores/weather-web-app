import { Card, CardHeader, Heading, Text } from "@chakra-ui/react";
import useWeather from "../hooks/useWeather";

interface Props {
  city: string | null;
}

const CurrentWeatherCard = ({ city }: Props) => {
  const { weather, error, isloading } = useWeather(city);

  if (!city) return null;
  if (error) return <Text color={"red"}>{error}</Text>;

  return (
    <>
      <Card>
        <CardHeader>
          <Heading size="md">Current Weather</Heading>
          <Text>{weather.temp_c}&deg;c</Text>
        </CardHeader>
      </Card>
    </>
  );
};

export default CurrentWeatherCard;
