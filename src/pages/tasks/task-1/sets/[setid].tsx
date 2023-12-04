import { getSetData } from "@/services/pokemon.service";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import React, { useEffect, useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { getAllSets } from "pokemon-tcg-sdk-typescript/dist/sdk";

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

export const getStaticProps: GetStaticProps = async (context: any) => {
  const resultData = await getSetData(context.params?.setid);
  return {
    props: { resultData },
    revalidate: 120,
  };
};

const CardSet = ({ resultData }: { resultData: PokemonTCG.Set }) => {
  const router = useRouter();
  const setId = router.query.setid as string | undefined;
  const [set, setSet] = useState<PokemonTCG.Set>(resultData);

  // useEffect(() => {
  //   if (setId) {
  //     getSetData(setId as string).then((tempState) => {
  //       setSet(tempState);
  //     });
  //   }
  // }, [setId]);

  return (
    <div className="h-[690px] flex justify-center items-center overflow-hidden bg-gray-300">
      {resultData !== undefined ? (
        <>
          <div className="flex bg-white rounded-xl shadow-xl shadow-black/50 p-20">
            <div className="mr-10">
              <Link href={`/sets/${resultData.id}`}>
                <div className="relative w-[300px] h-[250px] border-r-2 border-black">
                  <Image
                    width={500}
                    height={500}
                    className="pr-10"
                    src={resultData.images.logo}
                    alt={resultData.name + "images"}
                    priority={true}
                  />
                </div>
              </Link>
            </div>
            <div className="ml-10 mt-10">
              <p>Name : {resultData.name}</p>
              <p>Release Date : {resultData.releaseDate}</p>
              <p>Series : {resultData.series}</p>
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
