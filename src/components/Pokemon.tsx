import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useQuery } from "react-query";
import Card from "./Card";

interface Props {
  pokemon: any;
}

const fetchPokemon = async (
  queryKey: (string | undefined)[],
  namePoke: any
) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${namePoke}`);
  return await res.json();
};

const Pokemon = ({ pokemon }: Props) => {
  const [namePoke, setNamePoke] = useState();
  const { data, status } = useQuery(["pokemons", namePoke], ({ queryKey }) =>
    fetchPokemon(queryKey, namePoke)
  );

  return (
    <HStack>
      <Button
        width={"100px"}
        textTransform={"capitalize"}
        colorScheme={"cyan"}
        onClick={() => setNamePoke(pokemon.name)}
      >
        {pokemon.name}
      </Button>
      {/* {status === "loading" && <div>Loading data ... </div>}
      {status === "error" && <div>Error fetching data </div>} */}

      {!data ? (
        "error"
      ) : (
        <>
          <Stack align={"center"}>
            <Heading
              textTransform={"uppercase"}
              as="h4"
              fontSize={{ base: "1xl", sm: "3xl", lg: "4xl" }}
            >
              {pokemon.name}
            </Heading>
            <Box padding={4}>
              <Image
                w={{ base: "80px", sm: "90px", lg: "150px" }}
                h={{ base: "80px", sm: "90px", lg: "150px" }}
                objectFit={"contain"}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
                alt="pokemon_image"
              />
            </Box>
          </Stack>
          <Spacer />
          <Card data={data} key={data.id} />
        </>
      )}
    </HStack>
  );
};

export default Pokemon;
