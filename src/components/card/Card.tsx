import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import CardImage from "./CardImage";
import CardInfo from "./CardInfo";
import { useRouter } from "next/router";

const Card = (props: { item: PokemonTCG.Set }) => {
    const { images, ...info } = props.item;
    const route = useRouter();
    return (
        <div className="max-w-sm bg-white p-5 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" onClick={() => route.push(`/tasks/task-1/sets/${info.id}`)}>
            <CardImage imageUrl={images} />
            <CardInfo info={info} />
        </div>
    );
};

export default Card;


