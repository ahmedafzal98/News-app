const API_KEY = process.env.REACT_APP_NEWS_API_KEY
const BASE_URL = "https://gnews.io/api/v4/search"

const FetchData = async (query) => {

    try {
        const url = `${BASE_URL}?q=${query}&apikey=${API_KEY}`
        console.log(url);
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error("Failed to fetch news")
        }
        return response.json()

    } catch (error) {
        console.error(error);
    }
}

export default FetchData