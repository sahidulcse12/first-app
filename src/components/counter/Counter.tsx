import { getCardData } from "@/services/pokemon.service";
import { Set } from "pokemon-tcg-sdk-typescript/dist/sdk";
import { useEffect, useState } from "react";


const Counter = () => {
    const [width, setWidth] = useState<number>(0);
    const [pokeMonCard, setPokeMonCard] = useState<Set[]>([])
    useEffect(() => {
        const checkWindow = () => {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", checkWindow);
        return () => {
            window.removeEventListener("resize", checkWindow);
        }
    });

    useEffect(() => {
        getCardData().then((data) => {
            setPokeMonCard(data);
            console.log(data);
        })
    }, [])

    return (
        <div className="text-xl">
            <h2>Hello Window : {width}</h2>
        </div>
    );
};

export default Counter;