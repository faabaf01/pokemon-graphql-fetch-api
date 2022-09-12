import { Box, Button, Flex, Heading, Spacer, VStack } from "@chakra-ui/react";
import React from "react";

interface Props {
  setPage: any;
}

export default function Navbar({ setPage }: Props) {
  return (
    <>
      <Heading textAlign={"center"} textColor={"green.800"} padding="30px">
        Pokemon App
      </Heading>
      <Flex justify="center" gap="2">
        <Button colorScheme="teal" onClick={() => setPage("pokemons")}>
          Pokemon Names
        </Button>
        <Button colorScheme="teal" onClick={() => setPage("PokeInfo")}>
          Pokemon Info
        </Button>
      </Flex>
    </>
  );
}
