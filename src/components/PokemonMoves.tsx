import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";

interface Props {
  moves: any[];
}

export default function PokemonMoves(props: Props) {
  const { moves } = props;

  return (
    <>
      <Flex flex={1} justify={"center"}>
        <Heading> Moves: </Heading>
      </Flex>
      <SimpleGrid
        minChildWidth="120px"
        spacing="4px"
        paddingBlock={10}
        paddingInline={20}
      >
        {moves.map((p: { move: { name: string } }, i: number) => (
          <Box
            key={i}
            bg="yellow.200"
            width="120px"
            rounded="10"
            textAlign={"center"}
            p="5px"
          >
            {p.move.name}
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
}
