import { useEffect, useState } from 'react';
import FetchData from '../services/api'

export const useFetch = (endpoint) => {

    const [articles, setArticles] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getData = async () => {
            setLoading(true)
            try {
                const result = await FetchData(endpoint)
                if (result && Array.isArray(result.articles)) {

                    console.log(result.articles)
                    setArticles(result.articles);
                } else {
                    setArticles([]);
                }
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }

        getData()

    }, [endpoint])

    return { articles, error, loading }

}