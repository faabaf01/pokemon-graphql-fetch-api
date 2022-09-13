import { Box, VStack } from "@chakra-ui/react";

interface Props {
  data: any;
}

const Card = ({ data }: Props) => {
  return (
    <>
      {/* <Flex flex={1} align={"center"} justify={"center"}> */}
      <VStack w={"160px"} bg={"blue.100"} textAlign={"center"}>
        {data.abilities.map((poke: { ability: { name: string } }) => {
          return (
            <Box bg={"purple.200"} padding={1} rounded={10} w={"100px"}>
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
      </VStack>
      {/* </Flex> */}
    </>
  );
};
export default Card;
