import { Button, Divider, Spinner, Stack } from "@chakra-ui/react";
import { Link } from "@tanstack/react-location";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import PokemonMoves from "../components/PokemonMoves";
import POKEMON_DETAIL from "../graphql/GetPokemonDetail";
import PokemonNamePhoto from "../components/PokemonNamePhoto";
import PokemonTypes from "../components/PokemonTypes";

interface Props {}

function Details(props: Props) {
  const {} = props;

  interface IPokemon {
    name: string;
    id: number;
    types: any[];
    moves: any[];
  }

  //should not
  const [pokemonData, setPokemonData] = useState<IPokemon>();

  const queryParams = new URLSearchParams(window.location.search);
  const name = queryParams.get("name");

  console.log(pokemonData);
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
      .then((data) => {
        // console.log(data);
        // console.log(data.data.pokemon);

        return setPokemonData(data.data.pokemon);
      });
  }, []);

  return (
    <Stack bg={"teal.100"}>
      <Header />
      <Link to="/">
        <Button colorScheme={"cyan"}>Go back to Home</Button>
      </Link>

      {pokemonData ? (
        <>
          <PokemonNamePhoto name={pokemonData.name} id={pokemonData.id} />
          <PokemonTypes types={pokemonData.types} />
          <PokemonMoves moves={pokemonData.moves} />
        </>
      ) : (
        <Spinner>Loading data...</Spinner>
      )}
    </Stack>
  );
}

export default Details;
