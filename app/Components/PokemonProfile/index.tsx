import React from "react";
import "./style.scss";
import { PokeAPI } from "pokeapi-types";
import ProfileHeader from "@/app/Components/ProfileHeader";
import ProfileStat from "../ProfileStat";
import { getColor } from "@/app/utils/functions";

interface Props {
  pokemonData: PokeAPI.Pokemon;
}

const PokemonProfile = ({ pokemonData }: Props) => {
  const themeColour = getColor(pokemonData.types[0].type.name);

  const imageUrl =
    pokemonData?.sprites?.other?.["official-artwork"]?.front_default;

  return (
    <main className="pokemon-profile">
      <>
        <ProfileHeader
          imageUrl={imageUrl ? imageUrl : ""}
          name={pokemonData.name}
          number={`#${pokemonData?.id.toString().padStart(3, "0")}`}
          types={pokemonData.types}
        />

        <div className="pokemon-profile__stats">
          <h1>Stats:</h1>
          <ProfileStat
            data-label={themeColour}
            label={"BASE XP"}
            value={pokemonData.base_experience}
            max={608}
          />
          <ProfileStat
            data-label={themeColour}
            label={"HEIGHT (m)"}
            value={pokemonData.height / 10}
            max={100}
          />
          <ProfileStat
            data-label={themeColour}
            label={"WEIGHT (kg)"}
            value={pokemonData.weight / 10}
            max={100}
          />

          {pokemonData.stats.map((stat) => {
            return (
              <ProfileStat
                data-label={themeColour}
                label={stat.stat.name}
                value={stat.base_stat}
                max={255}
              />
            );
          })}
        </div>
      </>
    </main>
  );
};

export default PokemonProfile;
{
  /* <ImageGallery sprites={pokemonData.sprites} name={pokemonData.name} /> */
}
