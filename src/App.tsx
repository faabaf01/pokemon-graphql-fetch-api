import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./components/Home";
import { ChakraProvider } from "@chakra-ui/react";

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
