import { Box, Button, Heading, Image, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import PokemonDetail from "./PokemonDetail";

const POKEMON_NAMES = `
query pokemons($limit: Int, $offset: Int) {
  pokemons(limit: $limit, offset: $offset) {
    results {
      name
      image
    }
  }
}
`;

export default function GetAllPokemons() {
  const pokemons = usePokemonList();
  const [show, setShow] = useState(true);
  return (
    <div>
      <ul>
        {pokemons.map((pokemon: { name: string }, i: number) => (
          <Stack align={"center"}>
            <Box
              width={{ base: 320, sm: 550, md: 650, lg: 750 }}
              key={pokemon.name}
              bg={"yellow.200"}
              rounded={10}
            >
              <Heading
                textTransform={"capitalize"}
                as="h1"
                fontSize={{ base: "1xl", sm: "3xl", lg: "4xl" }}
                key={i}
              >
                {pokemon.name}
              </Heading>

              <Box padding={4}>
                <Image
                  w={{ base: "80px", sm: "90px", lg: "150px" }}
                  h={{ base: "80px", sm: "90px", lg: "150px" }}
                  objectFit={"contain"}
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    i + 2
                  }.png`}
                  alt="pokemon_image"
                />
              </Box>
            </Box>
            {show ? "error" : <PokemonDetail />}
            <Button colorScheme={"yellow"} onClick={() => setShow(!show)}>
              Moves
            </Button>
          </Stack>
        ))}
      </ul>
      {/* <Box>
        {pokemons.map((item: { image: string }, i: number) => (
          <li key={i}>{item.image}</li>
        ))}
      </Box> */}
    </div>
  );
}

function usePokemonList() {
  const [poke, setPoke] = React.useState([]);
  React.useEffect(() => {
    fetch("https://graphql-pokeapi.graphcdn.app/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: POKEMON_NAMES }),
    })
      .then((res) => res.json())
      .then((data) => setPoke(data.data.pokemons.results));
  }, []);
  return poke;
}
