import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import CardImage from "./CardImage";
import CardInfo from "./CardInfo";
import { useRouter } from "next/router";
import Link from "next/link";

// interface cardProps {
//     item : PokemonTCG.Set,
//     muhit: string
// }

const Card = (props: { item: PokemonTCG.Set }) => {
  const { images, ...info } = props.item;
  const router = useRouter();
  return (
    <>
      <Link href={`/tasks/task-1/sets/${info.id}`}>
        <div className=" bg-white p-5 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <CardImage imageUrl={images} />
          <CardInfo info={info} />
        </div>
      </Link>
    </>
  );
};

export default Card;
