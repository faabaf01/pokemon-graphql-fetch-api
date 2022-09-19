const POKEMON_PHOTO = `
query pokemon( $name: String!) {
    pokemon(name: $name) {
      id
      name
      sprites {
        front_default
      }
    }
  }
`;

export default POKEMON_PHOTO;
