import { PokeAPI } from "pokeapi-types";
import { useState, useEffect } from "react";

export const usePokemonDetails = (initialName: string) => {
  const [pokemonDetails, setPokemonDetails] = useState<PokeAPI.Pokemon>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchSinglePokemon = (name: string) => {
    setIsLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((pokemon) => {
        setPokemonDetails(pokemon);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchSinglePokemon(initialName);
  }, [initialName]);

  return { pokemonDetails, isLoading, fetchSinglePokemon };
};
