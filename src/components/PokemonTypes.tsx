import { Box, Flex, Heading, HStack } from "@chakra-ui/react";

interface Props {
  types: any[];
}

export default function PokemonTypes(props: Props) {
  const { types } = props;

  return (
    <div>
      <Flex flex={1} justify={"center"}>
        <Box>
          <HStack paddingBlock={10} minWidth={7} spacing={"4px"}>
            <Heading paddingRight={4}> Types: </Heading>
            {types.map((p: { type: { name: string } }, i: number) => (
              <Box
                key={i}
                bg="red.200"
                width="120px"
                rounded="10"
                textAlign={"center"}
                p="5px"
              >
                {p.type.name}
              </Box>
            ))}
          </HStack>
        </Box>
      </Flex>
    </div>
  );
}
