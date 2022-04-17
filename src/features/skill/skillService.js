/* Making HTTP requests */

import axios from "axios";

const baseURL = "https://bootcamp-2022.devtest.ge/api";

const fetchSkills = async () => {
  const results = await axios(`${baseURL}/skills`);
  return results.data;
};

const skillService = {
  fetchSkills,
};

export default skillService;
