import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard"



export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // const id = props.match.params.id;
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(`https://rickandmortyapi.com/api/character/`)
    .then(response => {
      console.log(response)
      setCharacters(response.data.results)
    })
    .catch(error => {
      console.error("The data is not returned.", error)
    })
  }, []);

  return (
    <div className="character-list">
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      {characters.map(character => (
         
        <CharacterCard key={character.id} name={character.name} gender={character.gender} species ={character.species} status={character.status} location={character.location.name} image={character.image}/>
        
      ))}
    </div>
  );
  
}
