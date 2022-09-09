import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [pokemon, setPokemon] = useState<any>({})
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
      .then(response => response.json())
      .then(data => setPokemon(data));
  },[])
  return (
    <div className="App">
      {JSON.stringify(pokemon.abilities)}
    </div>
  )
}

export default App
