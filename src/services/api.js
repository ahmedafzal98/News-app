const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
const BASE_URL = "https://gnews.io/api/v4/";

// https://gnews.io/api/v4/top-headlines?category=general&apikey=3d0a436cab484c836426d541128c1854

const FetchData = async (endpoint, countryCode) => {
  try {
    console.log("Country Code", countryCode);

    const url = !countryCode
      ? `${BASE_URL}${endpoint}&apikey=${API_KEY}`
      : `${BASE_URL}${endpoint}&country=${countryCode}&apikey=${API_KEY}`;

    // const url = `${BASE_URL}${endpoint}&apikey=${API_KEY}`;
    console.log("URL", url);

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch news");
    }
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

export default FetchData;
