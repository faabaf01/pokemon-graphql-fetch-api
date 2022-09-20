import { Box, Heading, HStack, Spacer } from "@chakra-ui/react";
import { useState } from "react";
import PokemonLogo from "./PokemonLogo";
import Navigate from "./Navigate";

function Header() {
  const [page, setPage] = useState("pokemons");
  return (
    <Box bg={"teal.400"}>
      <HStack textAlign={"center"} p={8}>
        <PokemonLogo />
        <Spacer />
        <Heading
          fontSize={{ base: "10px", sm: "20px", md: "30px", lg: "50px" }}
          margin={2}
        >
          Wild Pokemons
        </Heading>
        <Spacer />
        <Navigate setPage={setPage} />
      </HStack>
    </Box>
  );
}

export default Header;
