import axios from 'axios';

const popular = "https://api.themoviedb.org/3/movie/popular?api_key=8eefc62922325b5c7206cf4e152825af&language=en-US&page=1"
const Trending = "https://api.themoviedb.org/3/trending/movie/day?api_key=8eefc62922325b5c7206cf4e152825af"
const mcu = "https://api.themoviedb.org/3/discover/movie?api_key=8eefc62922325b5c7206cf4e152825af&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&with_companies=420&with_watch_monetization_types=flatrate"


function Api() {

    const Data = axios.all([axios.get(Trending), axios.get(mcu), axios.get(popular)]).then((data) => {
        const Master = data.flatMap((data) => data.data.results)
        const Trending = data[0].data.results
        const mcu = data[1].data.results
        const popular = data[2].data.results
        return (
            [Master, mcu, popular, Trending]
        )
    })

    return Data

}


export default Api
