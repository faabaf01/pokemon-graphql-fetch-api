import { Box, Flex, HStack } from "@chakra-ui/react";

interface Props {
  data: any;
}

const Card = ({ data }: Props) => {
  return (
    <>
      <Flex flex={1} align={"center"} justify={"center"}>
        <HStack w={"full"} textAlign={"center"}>
          {data.abilities.map((poke: { ability: { name: string } }) => {
            return (
              <Box bg={"purple.200"} padding={1} rounded={10}>
                <h2>{poke.ability.name}</h2>
              </Box>
            );
          })}
          {data.stats.map(
            (poke: { base_stat: number; stat: { name: string } }) => {
              return (
                <Box bg={"red.200"} padding={1} rounded={10}>
                  {poke.stat.name}:{poke.base_stat}
                </Box>
              );
            }
          )}
        </HStack>
      </Flex>
    </>
  );
};
export default Card;
