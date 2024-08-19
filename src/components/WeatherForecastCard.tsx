import { Card, CardHeader, Divider, Heading } from "@chakra-ui/react";

const WeatherForecastCard = () => {
  return (
    <Card>
      <CardHeader paddingY={4}>
        <Heading size="md">Weather Forecast</Heading>
      </CardHeader>
      <Divider color={"gray"} />
    </Card>
  );
};

export default WeatherForecastCard;
