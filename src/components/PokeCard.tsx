import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import { Link } from "@tanstack/react-location";
import { useEffect, useState } from "react";
import GET_ALL_POKEMONS from "../graphql/GetAllPokemons";

function PokeCard() {
  const pokemons = usePokemonList();
  return (
    <SimpleGrid minChildWidth="120px" spacing="40px" justifyItems={"center"}>
      {pokemons.map((p: { name: string }, i: number) => (
        <Link key={i} to={`/details?name=${p.name}`}>
          <Box bg={"honeydew"} rounded={10}>
            <Box
              maxW={"300px"}
              height="180px"
              p={4}
              textTransform="capitalize"
              fontWeight={"bold"}
            >
              {p.name}

              <Image
                w={{ base: "80px", sm: "90px", lg: "150px" }}
                h={{ base: "80px", sm: "90px", lg: "150px" }}
                objectFit={"fill"}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  i + 2
                }.png`}
                alt="pokemon_image"
              />
            </Box>
          </Box>
        </Link>
      ))}
    </SimpleGrid>
  );
}

function usePokemonList() {
  const [poke, setPoke] = useState([]);
  useEffect(() => {
    fetch("https://graphql-pokeapi.graphcdn.app/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: GET_ALL_POKEMONS }),
    })
      .then((res) => res.json())
      .then((data) => setPoke(data.data.pokemons.results));
  }, []);
  return poke;
}
export default PokeCard;
