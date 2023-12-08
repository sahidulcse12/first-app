import { QueryKeys } from "@/enums";
import { getCardData, getSetData } from "@/services/pokemon.service";
import { useQuery } from "@tanstack/react-query";

export const useSets = () => {
  return useQuery({
    queryKey: [QueryKeys.CardSets],
    queryFn: async () => {
      const sets = await getCardData();
      return sets;
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    enabled: true,
  });
};

export const useSet = (id: string) => {
  return useQuery({
    queryKey: [QueryKeys.CardSets],
    queryFn: async () => {
      const singleData = await getSetData(id);
      return singleData;
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    enabled: true,
  });
};
