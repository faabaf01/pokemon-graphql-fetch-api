// import { Button } from "@chakra-ui/react"
import { Box, Button, Divider, Stack } from "@chakra-ui/react";
import { Link } from "@tanstack/react-location";
import PokeMoves from "../components/Moves";
import PokePhoto from "../components/PokePhoto";
import PokeTypes from "../components/Types";

interface Props {}

function Details(props: Props) {
  const {} = props;

  return (
    <Stack bg={"teal.100"}>
      <Box m={4} alignSelf={"center"}>
        <Link to="/">
          <Button colorScheme={"cyan"}>Back to Home</Button>
        </Link>
      </Box>
      <PokePhoto />
      <Divider orientation="horizontal" />
      <PokeTypes />
      <PokeMoves />
    </Stack>
  );
}

export default Details;
