import { PokeAPI } from "pokeapi-types";
import { useEffect, useState } from "react";

export const useGetAllPokemonNames = () => {
  const [pokemonList, setPokemonList] =
    useState<PokeAPI.NamedAPIResourceList>();

  const fetchPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=9999`)
      .then((response) => response.json())
      .then((allPokemon: PokeAPI.NamedAPIResourceList) => {
        setPokemonList(allPokemon);
      });
  };
  useEffect(() => {
    fetchPokemon();
  }, []);

  return { pokemonList, fetchPokemon };
};
