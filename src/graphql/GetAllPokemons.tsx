const GET_ALL_POKEMONS = `
query pokemons {
  pokemons {
    results {
      name
      image
    }
  }
}
`;

export default GET_ALL_POKEMONS;
