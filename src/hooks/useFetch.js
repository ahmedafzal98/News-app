import { useEffect, useState } from 'react';
import FetchData from '../services/api'

export const useFetch = (initialEndpoint, autoFetch = true) => {
    const [endpoint, setEndpoint] = useState(initialEndpoint);
    const [articles, setArticles] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const getData = async () => {
        setLoading(true)
        try {
            const result = await FetchData(endpoint)
            if (result && Array.isArray(result.articles)) {
                console.log(result.articles);
                setArticles(result.articles);
                setError(null)
            } else {
                setArticles([]);
            }
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        getData()

    }, [endpoint])

    return { articles, error, loading, endpoint, setEndpoint, FetchData }

}