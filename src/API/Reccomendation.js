import axios from "axios"
import { useCallback, useEffect, useState } from "react"

function Reccomendation(movie_id) {
    const key = import.meta.VITE_REACT_APP_MOVIE_API

    const [Data, setData] = useState(" ")

    const url = `https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=${key}&language=en-US&page=1`

    const getReccomendations = useCallback(() => {
        axios.get(url).then((res) => setData(res.data.results)).catch((err) => console.log(err))
    }, [url])


    useEffect(() => {

        getReccomendations()

    }, [getReccomendations])

    return Data
}

export default Reccomendation


