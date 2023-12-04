import Link from "next/link";
import Image from "next/image";
import { SetImage } from "pokemon-tcg-sdk-typescript/dist/sdk";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getSetData } from "@/services/pokemon.service";
import { PokemonTCG } from "pokemon-tcg-sdk-typescript";

const CardImage = ({ imageUrl }: { imageUrl: SetImage }) => {
  const { logo } = imageUrl;
  return (
    <div>
      <div className="relative w-[300px] h-[250px]">
        <Image
          src={logo}
          alt={"images"}
          width={500}
          height={500}
          priority={true}
        />
      </div>
    </div>
  );
};

export default CardImage;
