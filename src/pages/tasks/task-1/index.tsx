import Card from "@/components/card/Card";
import { QueryKeys } from "@/enums";
import { useSets } from "@/hooksQuery/useSets";
import { getCardData } from "@/services/pokemon.service";
import { DehydratedState, QueryClient, dehydrate } from "@tanstack/react-query";
import { GetServerSidePropsContext } from "next";
import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import { getAllSets } from "pokemon-tcg-sdk-typescript/dist/sdk";
import { useEffect, useState } from "react";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<{ props: { dehydratedState: DehydratedState } }> => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: [QueryKeys.CardSets],
    queryFn: async () => {
      const sets = await getCardData();
      return sets;
    },
  });
  return { props: { dehydratedState: dehydrate(queryClient) } };
};

const TaskOne = (props: { sets: PokemonTCG.Set[] }) => {
  // const [pokeMonCard, setPokeMonCard] = useState<PokemonTCG.Set[]>(props.sets);
  const setsObject = useSets();
  const sets = setsObject.data;

  // useEffect(() => {
  //   if (!props.sets) {
  //     getAllSets().then((data) => {
  //       setPokeMonCard(data);
  //     });
  //   }
  // }, [props.sets]);

  return (
    <>
      <div className="py-20 gap-y-10 place-items-center grid grid-cols-3">
        {sets
          ? sets.map((item, index) => <Card item={item} key={index} />)
          : "Loading..."}
      </div>
    </>
  );
};

export default TaskOne;
