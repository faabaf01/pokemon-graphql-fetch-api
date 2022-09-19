import { Button, Stack, ButtonGroup, Box } from "@chakra-ui/react";

interface Props {
  setPage: any;
}

export default function Navigate({ setPage }: Props) {
  return (
    <Stack as={Box} textAlign={"center"} align={"center"}>
      <ButtonGroup size="sm">
        <Button colorScheme="cyan" onClick={() => setPage("pokemons")}>
          Pokemon Names
        </Button>
        <Button colorScheme="cyan" onClick={() => setPage("PokeInfo")}>
          Pokemon Info
        </Button>
      </ButtonGroup>
    </Stack>
  );
}
