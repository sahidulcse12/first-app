import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import CardImage from "./CardImage";
import CardInfo from "./CardInfo";

const Card = (props: { item: PokemonTCG.Set }) => {
    const { images, ...info } = props.item;
    return (
        <div className="max-w-sm bg-white p-5 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <CardImage imageUrl={images} />
            <CardInfo info={info} />
        </div>
    );
};

export default Card;