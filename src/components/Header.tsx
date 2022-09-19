import { Box, Heading, Stack } from "@chakra-ui/react";

function Header() {
  return (
    <Stack as={Box} textAlign={"center"} align={"center"}>
      <Heading
        fontWeight={600}
        fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
        marginTop={2}
      >
        Wild Pokemons
      </Heading>
    </Stack>
  );
}

export default Header;
