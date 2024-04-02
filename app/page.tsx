"use client";
import { PokeAPI } from "pokeapi-types";
import { useEffect, useState } from "react";
import PokemonCard from "./Components/PokemonCard";

import { Fade } from "react-awesome-reveal";

export default function Home() {
  const [pokemonList, setPokemonList] = useState<PokeAPI.NamedAPIResource[]>(
    []
  );
  const [paging, setPaging] = useState<number>(0);

  const handleScroll = () => {
    const distanceFromBottom =
      document.documentElement.scrollHeight -
      (window.innerHeight + window.scrollY);
    const shouldTrigger = distanceFromBottom <= 1000;

    if (shouldTrigger) {
      setPaging((prevPaging) => prevPaging + 20);
    }
  };

  useEffect(() => {
    fetchPokemon();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log("🚀 ~ Home ~ pokemonList:", pokemonList);

    if (paging > 0) {
      fetchPokemon();
    }
  }, [paging]);

  const fetchPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${paging}`)
      .then((response) => response.json())
      .then((paginatedPokemon: PokeAPI.NamedAPIResourceList) => {
        setPokemonList((prevPokemonList) => [
          ...prevPokemonList,
          ...paginatedPokemon.results,
        ]);
      });
  };

  return (
    <main className="pokemon-list">
      <div className="pokemon-list__wrapper">
        {pokemonList.length > 0 &&
          pokemonList.map((pokemon, i) => (
            <Fade key={pokemon.name} triggerOnce>
              <PokemonCard name={pokemon.name} id={i} />
            </Fade>
          ))}
      </div>
    </main>
  );
}
