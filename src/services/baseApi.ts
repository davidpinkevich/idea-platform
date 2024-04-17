import { BASE_URL, API_KEY } from "../utils/constants";

const fetchRate = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}?from=RUB&to=USD,EUR&api_key=${API_KEY}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { fetchRate };
