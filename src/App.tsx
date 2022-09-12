import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "./components/Navbar";
import Pokemons from "./components/Pokemons";
import Bulbasaur from "./components/Bulbasaur";
import { ReactQueryDevtools } from "react-query/devtools";
import { ChakraProvider, Stack } from "@chakra-ui/react";
import theme from "../styles/theme";

const client = new QueryClient();

function App() {
  const [page, setPage] = useState("pokemons");

  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={client}>
        <Stack
          minW={"100vh"}
          direction={{ base: "row", md: "column" }}
          bg="#D1FEFF"
          align={"left"}
        >
          <Navbar setPage={setPage} />

          {page === "pokemons" ? <Pokemons /> : <Bulbasaur />}
        </Stack>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
