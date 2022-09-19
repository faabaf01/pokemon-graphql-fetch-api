const POKEMON_DETAIL = `
  query pokemon( $name: String!) {
      pokemon(name: $name) {
        id
        name
        sprites {
          front_default
        }
        moves {
          move {
            name
          }
        }
        types {
          type {
            name
          }
        }
      }
    }
  `;

export default POKEMON_DETAIL;
