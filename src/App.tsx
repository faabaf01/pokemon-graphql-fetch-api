import { QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "../styles/theme";
import { Outlet, ReactLocation, Router } from "@tanstack/react-location";
import routes from "./app.routing";

const client = new QueryClient();
const location = new ReactLocation();

function App() {
  return (
    <ChakraProvider theme={theme} cssVarsRoot={undefined}>
      <QueryClientProvider client={client}>
        <Router location={location} routes={routes}>
          <Outlet />
        </Router>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
