//add next / previous page
//get data from parent
import { Box, Stack, Text } from "@chakra-ui/react";
import Header from "../components/Header";
import PokemonCards from "../components/PokemonCards";

interface Props {}

function Home(props: Props) {
  const {} = props;
  // const testData = [
  //   { name: "bulbasaur" },
  //   { name: "pikachu" },
  //   { name: "charmander" },
  // ];

  return (
    <Box maxW={"full"} alignContent={"center"} bg="teal.100">
      <Header />

      <Stack align={"center"}>
        <Text
          fontSize={{ base: "13px", sm: "14px", md: "15px", lg: "16px" }}
          p={4}
        >
          Welcome to the Home Page! Choose one of the Pokemons:
        </Text>
      </Stack>

      <PokemonCards />
    </Box>
  );
}

export default Home;
