"use client";
import PokeballLoader from "@/app/Components/PokeballLoader";
import PokemonProfile from "@/app/Components/PokemonProfile";
import { usePokemonDetails } from "@/app/utils/usePokemonDetails";

interface Props {
  params: {
    name: string;
  };
}
const ProfilePage = ({ params: { name } }: Props) => {
  const { pokemonDetails, isLoading } = usePokemonDetails(name);
  if (isLoading) {
    return <PokeballLoader />;
  } else if (pokemonDetails === undefined) {
    <PokeballLoader />;
  } else {
    return <PokemonProfile pokemonData={pokemonDetails} />;
  }
};

export default ProfilePage;
