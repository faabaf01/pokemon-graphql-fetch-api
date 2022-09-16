import { Button } from "@chakra-ui/react";
import React from "react";

const POKEMON_ABIL = `
query abilities {
  abilities {
    count
    results {
      name
      url
    }
  }
}
`;

export default function GetAllPokemons() {
  const poke = usePoke();

  return (
    <div>
      <h1>Pokemons ability: </h1>

      {poke.map((ability: { name: string }, i: number) => (
        <Button width={"100px"} colorScheme={"cyan"} key={i}>
          {ability.name}
        </Button>
      ))}
    </div>
  );
}

function usePoke() {
  const [poke, setPoke] = React.useState([]);
  React.useEffect(() => {
    fetch("https://graphql-pokeapi.graphcdn.app/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: POKEMON_ABIL }),
    })
      .then((res) => res.json())
      .then((data) => setPoke(data.data.abilities.results));
  }, []);
  return poke;
}
