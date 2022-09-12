import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "./Navbar";
import Pokemons from "./Pokemons";
import Bulbasaur from "./Bulbasaur";
import { ReactQueryDevtools } from "react-query/devtools";
import { Container, Flex, Stack, VStack } from "@chakra-ui/react";

function App() {
  const [page, setPage] = useState("pokemons");

  return (
    <>
      <Container maxW={"3xl"}>
        <Navbar setPage={setPage} />

        {page === "pokemons" ? <Pokemons /> : <Bulbasaur />}
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </Container>
    </>
  );
}

export default App;
