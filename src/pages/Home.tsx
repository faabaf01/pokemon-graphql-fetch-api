import { Container, Flex, Stack } from "@chakra-ui/react";
import { useState } from "react";
import Header from "../components/Header";
import Navigate from "../components/Navigate";
import PokeCard from "../components/PokeCard";

interface Props {}

function Home(props: Props) {
  const [page, setPage] = useState("pokemons");
  const {} = props;
  // const testData = [
  //   { name: "bulbasaur" },
  //   { name: "pikachu" },
  //   { name: "charmander" },
  // ];
  return (
    <Flex bg="teal.100">
      <Container maxW={"3xl"} padding={4}>
        <Header />
        <Navigate setPage={setPage} />

        <Stack align={"center"} p={15}>
          <p>Welcome to Home Page! Choose one of the pokemons: </p>
        </Stack>

        <PokeCard />
      </Container>
    </Flex>
  );
}

export default Home;
