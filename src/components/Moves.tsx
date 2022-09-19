// import { Button } from "@chakra-ui/react"
import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import POKEMON_MOVES from "../graphql/GetMoves";

interface Props {}

export default function PokeMoves(props: Props) {
  const {} = props;
  const queryParams = new URLSearchParams(window.location.search);

  const name = queryParams.get("name");
  console.log(queryParams.get("id"));
  const [poke, setPoke] = useState([]);

  useEffect(() => {
    fetch("https://graphql-pokeapi.graphcdn.app/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: POKEMON_MOVES,
        variables: { name: name },
      }),
    })
      .then((res) => res.json())
      .then((data) => setPoke(data.data.pokemon.moves));
  }, []);

  return (
    <>
      <Flex flex={1} justify={"center"}>
        <Heading> Moves </Heading>
      </Flex>
      <SimpleGrid
        minChildWidth="120px"
        spacing="4px"
        paddingBlock={10}
        paddingInline={20}
      >
        {poke.map((p: { move: { name: string } }, i: number) => (
          <Box
            key={i}
            bg="yellow.200"
            width="120px"
            rounded="10"
            textAlign={"center"}
            p="5px"
          >
            {p.move.name}
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
}
