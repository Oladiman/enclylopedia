import axios from "axios";

export const fetchSearch = async (text) => {
  let response;
  try {
    const res = await axios.get(
      `https://johndictionaryapi.herokuapp.com/api/Dictionary/getdictionarydata?text=${text}`
    );
    // console.log(res);
    response = res;
  } catch (err) {
    console.log(err);
  }
  return response;
};
