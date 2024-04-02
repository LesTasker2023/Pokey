import React, { useEffect } from "react";
import "./style.scss";
import { PokeAPI } from "pokeapi-types";
import PokemonType from "@/app/Components/PokemonType";
import { getColor } from "@/app/utils/functions";

interface Props {
  imageUrl: string;
  name: string;
  number: string;
  types: PokeAPI.PokemonType[];
}

const ProfileHeader = ({ types, number, name, imageUrl }: Props) => {
  const themeColour = getColor(types[0].type.name);
  return (
    <div
      className="profile-header"
      style={{
        background: `linear-gradient(to top left, #fff,${themeColour})`,
      }}
    >
      <div className="profile-header__wrapper">
        <div className="profile-header__type">
          <PokemonType types={types} />
        </div>
        <img
          className="profile-header__image"
          src={imageUrl ? imageUrl : ""}
          alt={`Image of ${name}`}
          title={`Image of ${name}`}
        />
        <h3 className="profile-header__number">{number}</h3>
        <h3 className="profile-header__name">{name}</h3>
      </div>
    </div>
  );
};

export default ProfileHeader;
