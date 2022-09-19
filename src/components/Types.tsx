import { Box, Flex, Heading, HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import POKEMON_TYPES from "../graphql/GetTypes";

export default function PokeTypes() {
  const poke = usePoke();

  return (
    <div>
      <Flex flex={1} justify={"center"}>
        <Heading> Types </Heading>
      </Flex>
      <HStack paddingBlock={10} minWidth={7} spacing={"4px"} justify={"center"}>
        {poke.map((p: { type: { name: string } }, i: number) => (
          <Box
            key={i}
            bg="red.200"
            width="120px"
            rounded="10"
            textAlign={"center"}
            p="5px"
          >
            {p.type.name}
          </Box>
        ))}
      </HStack>
    </div>
  );
}

function usePoke() {
  const [poke, setPoke] = useState([]);
  const queryParams = new URLSearchParams(window.location.search);

  const name = queryParams.get("name");

  useEffect(() => {
    fetch("https://graphql-pokeapi.graphcdn.app/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: POKEMON_TYPES,
        variables: { name: name },
      }),
    })
      .then((res) => res.json())
      .then((data) => setPoke(data.data.pokemon.types));
  }, []);
  return poke;
}
