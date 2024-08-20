import { Heading, HStack } from "@chakra-ui/react";
import { weatherQuery } from "../App";
import QueryContainer from "./QueryContainer";

interface Props {
  weatherQuery: weatherQuery;
  setWeatherQuery: (weatherQuery: weatherQuery) => void;
}

const NavBar = ({ weatherQuery, setWeatherQuery }: Props) => {
  return (
    <>
      <HStack backgroundColor={"gray.900"} paddingX={5}>
        <Heading
          whiteSpace={"nowrap"}
          size={"md"}
          marginLeft={0}
          paddingRight={10}
        >
          Weather Forecast
        </Heading>
        <QueryContainer
          weatherQuery={weatherQuery}
          setWeatherQuery={setWeatherQuery}
        />
      </HStack>
    </>
  );
};

export default NavBar;
