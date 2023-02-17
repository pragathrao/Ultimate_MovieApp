import axios from "axios"
import { key } from "../Components/Pages/Home"



function MoviePageAPI(id) {

    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&append_to_response=videos`
    const result = axios.get(url).then((res) => res.data).catch((err) => console.log(err))
    return result

}

export default MoviePageAPI





