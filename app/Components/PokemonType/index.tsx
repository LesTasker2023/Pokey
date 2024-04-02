import React, { useEffect } from "react";
import "./style.scss";
import { PokeAPI } from "pokeapi-types";

interface Props {
  types: PokeAPI.PokemonType[];
}

const PokemonType = ({ types }: Props) => {
  return (
    <div className="pokemon-type">
      <img
        className="pokemon-type--primary"
        src={`/icons/Icon_${types[0].type.name}.webp`}
        alt={types[0].type.name}
        title={types[0].type.name}
      />
      {types.length > 1 && (
        <img
          className="pokemon-type--secondary"
          src={`/icons/Icon_${types[1].type.name}.webp`}
          alt={types[1].type.name}
          title={types[1].type.name}
        />
      )}
    </div>
  );
};

export default PokemonType;
