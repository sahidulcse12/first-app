import { SetImage } from "pokemon-tcg-sdk-typescript/dist/sdk";

const CardImage = ({ imageUrl }: { imageUrl: SetImage }) => {
    const { logo } = imageUrl;
    return (
        <div>
            {<img src={logo} alt="" />}
        </div>
    );
};

export default CardImage;