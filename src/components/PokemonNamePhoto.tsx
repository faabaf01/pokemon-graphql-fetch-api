import { Circle, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

interface Props {
  name: string;
  id: number;
}

function PokemonNamePhoto(props: Props) {
  const { name, id } = props;

  return (
    <>
      <Flex flex={1} justify={"center"}>
        <Stack align={"center"}>
          <Heading color={"GrayText"}>{id}</Heading>
          <Text fontSize={"2xl"} fontWeight="bold" textTransform={"uppercase"}>
            {name}
          </Text>
          <Circle bg={"honeydew"} border="4px">
            <Image
              w={{ base: "100px", sm: "150px", lg: "200px" }}
              h={{ base: "100px", sm: "150px", lg: "200px" }}
              objectFit={"fill"}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
              alt="pokemon-image"
            />
          </Circle>
        </Stack>
      </Flex>
    </>
  );
}

export default PokemonNamePhoto;
