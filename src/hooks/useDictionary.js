import { useQuery } from "react-query";
import { getDictionaryMeaning } from "../Api";


export default function useDictionary(searchTerm) {
  return useQuery("dictionaryMeaning", async () => {
    const { data, error, status } = await getDictionaryMeaning(searchTerm);
    return {data, error, status};
  });
}
