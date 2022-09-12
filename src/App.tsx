import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "./components/Navbar";
import Pokemons from "./components/Pokemons";
import Bulbasaur from "./components/Bulbasaur";
import Home from "./components/Home";
import { ReactQueryDevtools } from "react-query/devtools";
import { ChakraProvider, Container, Stack, VStack } from "@chakra-ui/react";

import theme from "../styles/theme";

const client = new QueryClient();

function App() {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={client}>
        <Home />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
