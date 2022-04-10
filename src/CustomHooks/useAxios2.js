import Axios from "axios";

export const useAxios2 = (endpoint = "") => {
  return Axios.create({
    baseURL: `${endpoint}`,
    headers: {
      JSON: "application/json",
    },
  });
};
