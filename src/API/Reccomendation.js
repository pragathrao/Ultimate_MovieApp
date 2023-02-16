import axios from "axios"
import { useCallback, useEffect, useState } from "react"

const key = import.meta.env.VITE_REACT_APP_MOVIE_API
function Reccomendation(movie_id) {

    const url = `https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=${key}&language=en-US&page=1`

    const Data = axios.get(url).then((res) => res).catch((err) => console.log(err))

    return Data
}

export default Reccomendation


