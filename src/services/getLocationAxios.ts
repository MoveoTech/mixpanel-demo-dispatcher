import axios from "axios";

export const getlocationFromApi = async () => {
  return await axios.get(`https://ipapi.co/json/`);
};
