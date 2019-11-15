import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";

export default function SearchForm() {
  
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/`)
    .then(response => {
      const results = response.data.results.filter(character =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    })
    .catch(error => {
      console.error("The data is not returned.", error)
    })
  }, [searchTerm]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <section className="search-form">
     
     <form>
       <label htmlFor="search">Search</label>
       <input id="search" type="text" name="searchfield" placeholder="Find a Character" onChange={handleChange} value={searchTerm}/>
     </form>

     <div className="character-list">
    
          {searchResults.map(character => {
           return ( <CharacterCard key={character.id} name={character.name} gender={character.gender} species ={character.species} status={character.status} location={character.location.name} image={character.image}/>)
          }
          )}

      </div>

    </section>
  );
}
