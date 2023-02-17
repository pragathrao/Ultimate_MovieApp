import axios from "axios"
import { key } from "../Components/Pages/Home"



function Genres(genre) {

    const url = `https://api.themoviedb.org/3/discover/movie?with_genres=${genre}&sort_by=revenue.desc&api_key=${key}`
    const result = axios.get(url).then((res) => res.data.results).catch((err) => console.log(err))

    return result

}

export default Genres





