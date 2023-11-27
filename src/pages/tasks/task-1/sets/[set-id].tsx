import { getCardData } from '@/services/pokemon.service';
import { useRouter } from 'next/router';
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';
import React, { useEffect, useState } from 'react';

const CardSet = () => {
    const route = useRouter();
    const x = route.query[`set-id`];
    const [singleCard, setSingleCard] = useState<PokemonTCG.Set>();
    useEffect(() => {
        getCardData().then(async (data) => {
            if (typeof x === 'string') {
                const res = await PokemonTCG.findSetByID(x);
                setSingleCard(res);
            }
        })
    }, [])

    return (
        <div>
            <img src={singleCard?.images.logo} alt="" />
        </div>
    );
};

export default CardSet;