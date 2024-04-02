import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import "./style.scss";
import PokeballLoader from "../PokeballLoader";
import { usePokemonDetails } from "@/app/utils/usePokemonDetails";
import Link from "next/link";
import PokemonType from "../PokemonType";

interface PokemonCardProps {
  name: string;
  id: number;
}

const PokemonCard = ({ name, id }: PokemonCardProps) => {
  const { pokemonDetails, isLoading } = usePokemonDetails(name);
  const [play] = useSound(
    `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${
      id + 1
    }.ogg`
  );

  const imageUrl =
    pokemonDetails?.sprites?.other?.["official-artwork"]?.front_default;

  const handleClick = (
    name: string,
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    play();
    setTimeout(() => {
      window.location.href = `/pokemon/${name}`;
    }, 1000);
  };

  return (
    <Link
      className="pokemon-card"
      href={`/pokemon/${name}`}
      onClick={(e) => handleClick(name, e)}
      style={{
        backgroundImage: `url(/backgrounds/${pokemonDetails?.types[0].type.name}.jpg)`,
      }}
    >
      {!isLoading ? (
        pokemonDetails && (
          <>
            {/* Pokemon Type */}
            {pokemonDetails.types.length > 0 && <PokemonType types={pokemonDetails.types} />}

            {/* Pokemon Name */}
            <h3 className="pokemon-card__name pokemon-card__large-text">
              {name}
            </h3>

            {/* Pokemon Number */}
            <h3 className="pokemon-card__number pokemon-card__large-text">
              #{pokemonDetails?.id.toString().padStart(3, "0")}
            </h3>

            {/* Pokemon Stats */}
            <div className="pokemon-card__stats">
              <span className="pokemon-card__stat-text">{`HP: ${pokemonDetails?.stats[0].base_stat}`}</span>
              <span className="pokemon-card__stat-text">{`Attack: ${pokemonDetails?.stats[1].base_stat}`}</span>
              <span className="pokemon-card__stat-text">{`Defense: ${pokemonDetails?.stats[2].base_stat}`}</span>
            </div>

            {/* Pokemon Image */}
            <img
              className="pokemon-card__image"
              src={imageUrl ? imageUrl : ""}
              alt={`Image of ${name}`}
              title={`Image of ${name}`}
            />
          </>
        )
      ) : (
        // Loading Animation
        <>
          <PokeballLoader />
        </>
      )}
    </Link>
  );
};

export default PokemonCard;
