import { getSetData } from "@/services/pokemon.service";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import React, { useEffect, useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { getAllSets } from "pokemon-tcg-sdk-typescript/dist/sdk";
import { useSet, useSets } from "@/hooksQuery/useSets";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { QueryKeys } from "@/enums";

export const getStaticPaths: GetStaticPaths = async (qry) => {
  const data = await getAllSets();
  const tempPaths: { params: { setid: string } }[] = data.map((x) => {
    return { params: { setid: x.id } };
  });
  return {
    paths: tempPaths.splice(0, 10),
    fallback: true,
  };
};

// export const getStaticProps: GetStaticProps = async (context: any) => {
//   //const resultData = await getSetData(context.params?.setid);
//   let card = {};
//   try {
//     card = await getSetData(context.params?.setid);
//   } catch (e) {
//     return {
//       props: {},
//       revalidate: 10,
//     };
//   }
//   return {
//     props: { card },
//     revalidate: 10,
//   };
// };

export const getStaticProps: GetStaticProps = async (context: any) => {
  //const resultData = await getSetData(context.params?.setid);
  const queryClient = new QueryClient();
  const id = context.params?.setid as string;
  await queryClient.prefetchQuery({
    queryKey: [QueryKeys.CardSets],
    queryFn: async () => {
      const singleData = await getSetData(id);
      return singleData;
    },
  });
  return { props: { dehydratedState: dehydrate(queryClient) }, revalidate: 10 };
};

const CardSet = () => {
  const router = useRouter();
  const id = router.query.setid as string;
  const setObjects = useSet(id);
  const set = setObjects.data;
  // console.log("sets ", sets.id);

  //const setId = router.query.setid as string | undefined;
  // const [set, setSet] = useState<PokemonTCG.Set>(card);
  // useEffect(() => {
  //   if (setId) {
  //     getSetData(setId as string).then((tempState) => {
  //       setSet(tempState);
  //     });
  //   }
  // }, [setId]);

  if (!set)
    return (
      <div className="h-[690px] flex justify-center items-center overflow-y-hidden bg-gray-300">
        <h3 className="text-center text-[60px]">No items found </h3>
      </div>
    );

  return (
    <div className="h-[690px] flex justify-center items-center overflow-hidden bg-gray-300">
      {set ? (
        <>
          <div className="flex bg-white rounded-xl shadow-xl shadow-black/50 p-20">
            <div className="mr-10">
              <Link href={`/sets/${set?.id}`}>
                <div className="relative w-[300px] h-[250px] border-r-2 border-black">
                  <Image
                    width={500}
                    height={500}
                    className="pr-10"
                    src={set.images.logo}
                    alt={set.name + "images"}
                    priority={true}
                  />
                </div>
              </Link>
            </div>
            <div className="ml-10 mt-10">
              <p>Name : {set.name}</p>
              <p>Release Date : {set.releaseDate}</p>
              <p>Series : {set.series}</p>
            </div>
          </div>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default CardSet;
