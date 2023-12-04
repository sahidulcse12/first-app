import Card from "@/components/card/Card";
import { GetServerSidePropsContext } from "next";
import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import { getAllSets } from "pokemon-tcg-sdk-typescript/dist/sdk";
import { useEffect, useState } from "react";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<{ props: { sets?: PokemonTCG.Set[] } }> => {
  const sets = await getAllSets();
  return { props: { sets: sets } };
};

const TaskOne = (props: { sets: PokemonTCG.Set[] }) => {
  const [pokeMonCard, setPokeMonCard] = useState<PokemonTCG.Set[]>(props.sets);
  useEffect(() => {
    if (!props.sets) {
      getAllSets().then((data) => {
        setPokeMonCard(data);
      });
    }
  }, [props.sets]);

  return (
    <div className="py-20 gap-y-10 place-items-center grid grid-cols-3">
      {pokeMonCard.map((item, index) => (
        <Card item={item} key={index} />
      ))}
    </div>
  );
};

export default TaskOne;
