import axios from "axios"
import { key } from "../Components/Pages/Home"

function SearchAPI(query) {

    const search = `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`

    const result = axios.get(search).then((res) => res.data.results).catch((err) => console.log(err))

    return result
}

export default SearchAPI