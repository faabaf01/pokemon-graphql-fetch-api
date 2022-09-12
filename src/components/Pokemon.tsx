import { Button, Heading, HStack, Image, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useQuery } from "react-query";
import Card from "./Card";

interface Props {
  pokemon: any;
}

const fetchPokemon = async (queryKey: any, namePoke: any) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${namePoke}`);
  return await res.json();
};

const Pokemon = ({ pokemon }: Props) => {
  const [namePoke, setNamePoke] = useState();
  const { data } = useQuery(["pokemons", namePoke], ({ queryKey }) =>
    fetchPokemon(queryKey, namePoke)
  );

  return (
    <HStack>
      <Button
        width={"150px"}
        textTransform={"capitalize"}
        colorScheme={"blue"}
        onClick={() => setNamePoke(pokemon.name)}
      >
        {pokemon.name}
      </Button>
      {/* {status === "loading" && <div>Loading data ... </div>}
        {status === "error" && <div>Error fetching data </div>} */}
      {!data ? (
        "error"
      ) : (
        <Stack align={"center"}>
          <Heading textTransform={"uppercase"} as={"h2"}>
            {pokemon.name}
          </Heading>
          <Image
            boxSize="200px"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
            alt="pokemon_image"
          />
          <Card data={data} />
        </Stack>
      )}
    </HStack>
  );
};

export default Pokemon;
