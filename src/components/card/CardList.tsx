import { getCardData } from "@/services/pokemon.service";
import { useEffect, useState } from "react";
import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import Card from "./Card";

const CardList = () => {
  const [pokeMonCard, setPokeMonCard] = useState<PokemonTCG.Set[]>([]);
  useEffect(() => {
    getCardData().then((data) => {
      setPokeMonCard(data);
    });
  }, []);

  return (
    <div className="py-20 gap-y-10 place-items-center grid grid-cols-3">
      {pokeMonCard.map((item, index) => (
        <Card item={item} key={index} />
      ))}
    </div>
  );
};

export default CardList;
