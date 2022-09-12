import { Box, VStack } from "@chakra-ui/react";
import { useQuery } from "react-query";
import Pokemon from "./Pokemon";

const fetchPokemons = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
  return res.json();
};

const Pokemons = () => {
  const { data, status } = useQuery("pokemons", fetchPokemons);
  console.log(data);

  return (
    <>
      {/* <p>{status}</p> */}
      {status === "loading" && <div>Loading data ... </div>}
      {status === "error" && <div>Error fetching data </div>}
      {status === "success" && (
        <VStack align={"inherit"}>
          {data.results.map((pokemon: { name: string }) => (
            <Box bg={"blue.100"} alignSelf={"center"} width={"80%"}>
              <Pokemon key={pokemon.name} pokemon={pokemon} />
            </Box>
          ))}
        </VStack>
      )}
    </>
  );
};

export default Pokemons;
