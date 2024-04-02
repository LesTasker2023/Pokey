"use client";
import React, { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useGetAllPokemonNames } from "@/app/utils/useGetAllPokemonNames";

import "./style.scss";

const Header = () => {
  const { pokemonList } = useGetAllPokemonNames();
  const [search, setSearch] = useState("");
  const [openSearch, setOpenSearch] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOpenSearch(false);
    window.location.href = `/search/${search}`;
  };

  return (
    <header className="header">
      <a href="/">
        <img
          className="header__image"
          src={"/icons/Icon_Logo.png"}
          alt={"pokemon logo"}
        />
      </a>

      <form onSubmit={(e) => handleSubmit(e)} className={`header__search`}>
        <input
          className={`header__search__input ${openSearch ? "open" : "closed"}`}
          type="search"
          placeholder={openSearch ? "Search the Dex" : ""}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onSubmit={(e) => handleSubmit(e)}
          list="list"
        />
        <datalist id="list">
          <>
            {pokemonList?.results.map((pokemon) => {
             return <option key={pokemon.name} value={pokemon.name}>{pokemon.name}</option>;            })}
          </>
        </datalist>

        <button className="header__search-button" type="submit">
          <MagnifyingGlassIcon height="16" width="16" />
        </button>
      </form>
    </header>
  );
};

export default Header;
