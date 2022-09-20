import { Image } from "@chakra-ui/react";

interface Props {}

function PokemonLogo(props: Props) {
  const {} = props;

  return (
    <Image
      src="https://i.imgur.com/iPvcyJv.png"
      alt="logo"
      h={{ base: "30px", sm: "30px", md: "40px", lg: "50px" }}
      w={{ base: "80px", sm: "80px", md: "90px", lg: "130px" }}
    />
  );
}

export default PokemonLogo;
