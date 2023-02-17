import axios from "axios"
import { key } from "../Components/Pages/Home"

function Reccomendation(movie_id) {

    const url = `https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=${key}&language=en-US&page=1`
    const video = `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${key}&language=en-US`

    const Data = axios.all([axios.get(url), axios.get(video)]).then((res) => {
        const Video = res[1].data.results
        const Reco = res[0].data.results

        return (
            [Reco, Video]
        )
    }).catch((err) => console.log(err))

    return Data
}

export default Reccomendation


