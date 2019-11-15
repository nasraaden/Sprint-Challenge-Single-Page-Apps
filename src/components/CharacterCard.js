import React from "react";
import styled from "styled-components";



const CharacterCard = props => {
  const CharacterContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 2%;
  `
  const Character = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 2%;
  `
    
    return (  
      <CharacterContainer>
      
        <img src ={props.image}/>
        <Character>
          <h2>{props.name}</h2>
          <p>{`Gender: ${props.gender}`}</p>
          <p>{`Species: ${props.species}`}</p>
          <p>{`Status: ${props.status}`}</p>
          <p>{`Location: ${props.location}`}</p>
          </Character>
      </CharacterContainer>
    ) 
   
  
}

export default CharacterCard;