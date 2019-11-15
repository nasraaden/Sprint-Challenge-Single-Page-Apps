import React from "react";
import styled from "styled-components";

const Character = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const CharacterCard = props => {
  
  
    return (  
      
      <div className="character-card">
        <img src ={props.image}/>
        <h2>{props.name}</h2>
        <p>{`Gender: ${props.gender}`}</p>
        <p>{`Species: ${props.species}`}</p>
        <p>{`Status: ${props.status}`}</p>
        <p>{`Location: ${props.location}`}</p>
      </div>
      
    ) 
  
}

export default CharacterCard;