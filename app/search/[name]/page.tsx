"use client";
import PokemonCard from "@/app/Components/PokemonCard";
import { useGetAllPokemonNames } from "@/app/utils/useGetAllPokemonNames";
import { useEffect } from "react";
import { Fade } from "react-awesome-reveal";

interface SearchResultsProps {
  params: {
    name: string;
  };
}
const SearchResults = ({ params: { name } }: SearchResultsProps) => {
  const { pokemonList } = useGetAllPokemonNames();

  if (pokemonList !== undefined) {
    return (
      <>
        <main className="search-results">
          <div className="pokemon-list__wrapper">
            {pokemonList?.results
              .filter((pokemon) => pokemon.name.includes(name.toLowerCase()))
              .map((pokemon, i) => (
                <Fade key={pokemon.name} triggerOnce>
                  <PokemonCard name={pokemon.name} id={i} />
                </Fade>
              ))}
          </div>
        </main>
      </>
    );
  }
};

export default SearchResults;
