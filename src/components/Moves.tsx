// import { Button } from "@chakra-ui/react"
import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import POKEMON_DETAIL from "../graphql/GetPokemonDetail";
// import POKEMON_MOVES from "../graphql/GetMoves";

interface Props {}

export default function PokeMoves(props: Props) {
  const {} = props;
  const queryParams = new URLSearchParams(window.location.search);

  const name = queryParams.get("name");
  console.log(queryParams.get("id"));
  const [moves, setMoves] = useState([]);

  useEffect(() => {
    fetch("https://graphql-pokeapi.graphcdn.app/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: POKEMON_DETAIL,
        variables: { name: name },
      }),
    })
      .then((res) => res.json())
      // .then((data) => setPoke(data.data.pokemon.moves));
      .then((data) => {
        console.log(data);
        console.log(data.data.pokemon);
        return setMoves(data.data.pokemon.moves);
      });
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
        {moves.map((p: { move: { name: string } }, i: number) => (
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
