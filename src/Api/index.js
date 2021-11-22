import axios from "axios";
const baseUrl = "https://johndictionaryapi.herokuapp.com/api";

export const getDictionaryMeaning = async (text) => {
  if (!text) return;
  const { data } = await axios.get(
    `${baseUrl}/Dictionary/getdictionarydata?text=${text}`
  );
  return data;
};

export const TranslateText = async (text, targetLang) => {
  if (!text && !targetLang) return;
  const { data } = await axios.post(`${baseUrl}/Translator/Translate`, {
    text,
    targetLangCode: targetLang,
  });
  return data;
};
