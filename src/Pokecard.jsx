import React from "react";

const Pokecard = (props) => {
    const pokeAPI = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
    const imgSrc = `${pokeAPI}${props.id}.png`;

    return (
        <div>
            <div>{props.name}</div>
            <img src={imgSrc} alt={props.name} />
            <div>Type: {props.type}</div>
            <div>EXP: {props.exp}</div>
        </div>
        
    )
}

export default Pokecard; 