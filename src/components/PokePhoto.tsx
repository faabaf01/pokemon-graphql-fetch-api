import { Circle, Flex, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import POKEMON_PHOTO from "../graphql/GetPokePhoto";

interface Props {}

export default function PokePhoto(props: Props) {
  const {} = props;
  const poke = usePokePhoto();

  return (
    <>
      <Flex flex={1} justify={"center"}>
        <Circle bg={"honeydew"}>
          <Image
            w={{ base: "100px", sm: "150px", lg: "200px" }}
            h={{ base: "100px", sm: "150px", lg: "200px" }}
            objectFit={"fill"}
            src={poke.toLocaleString()}
            alt="pokemon-image"
          />
        </Circle>
      </Flex>
    </>
  );
}

function usePokePhoto() {
  const [poke, setPoke] = useState([]);
  const queryParams = new URLSearchParams(window.location.search);
  const name = queryParams.get("name");

  useEffect(() => {
    fetch("https://graphql-pokeapi.graphcdn.app/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: POKEMON_PHOTO,
        variables: { name: name },
      }),
    })
      .then((res) => res.json())
      .then((data) => setPoke(data.data.pokemon.sprites.front_default));
  }, []);

  return poke;
}
