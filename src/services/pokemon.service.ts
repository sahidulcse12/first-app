import { PokemonTCG } from 'pokemon-tcg-sdk-typescript'

export const getCardData = async () => {
    const data = await PokemonTCG.getAllSets()
    return data;
}