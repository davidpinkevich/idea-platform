import { BASE_URL, API_KEY } from "../utils/constants";

const fetchRate = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}?from=RUB&to=USD,EUR&api_key=${API_KEY}`
    );
    const data = await response.json();
    if (data.error) {
      return { USD: 0.01, EUR: 0.106 };
    }
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

export { fetchRate };
