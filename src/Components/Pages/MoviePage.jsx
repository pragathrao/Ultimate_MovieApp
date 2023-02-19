import { Badge, Loader } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MoviePageAPI from '../../API/MoviePageAPI'
import Reccomendation from '../../API/Reccomendation'
import Explore from '../Structure/Explore'
import LeftBar from '../Structure/LeftBar'
import ModalComp from '../Structure/Modal'
import MoviePageStyles from '../Styles/MoviePageStyles'

function MoviePage() {


    const [Data, setData] = useState([])
    const [MovieData, setMovieData] = useState([])
    const [Loading, setLoading] = useState(true)

    const { id } = useParams()
    useEffect(() => {
        MoviePageAPI(id).then(res => {
            setMovieData(res)
            setLoading(false)
        })
        Reccomendation(id).then((res) => setData(res))
    }, [id])

    return (
        <>
            {Loading === false ?
                <MoviePageStyles Movieurl={MovieData?.backdrop_path}>
                    <div className="right-bar">
                        <LeftBar />
                    </div>
                    <div className="hero">
                        <div className="hero-data">
                            <div className="hero-poster">
                                <img src={`https://image.tmdb.org/t/p/w500${MovieData.poster_path}`} alt="" />
                            </div>
                            <div className="hero-info">
                                <h1>{MovieData.title}</h1>
                                {MovieData.genres?.map((item) => <Badge className='badge' variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>{item.name}</Badge>)}
                                <p>{MovieData.overview}</p>
                                <ModalComp id={MovieData?.videos?.results} />
                            </div>
                        </div>
                        <div className="also-Watch">
                            <h3>People Also Watch</h3>
                            <Explore data={Data[0]?.length > 0 ? Data[0] : []} slides={4} slideSize="20%" slideGap="lg" />
                        </div>
                    </div>
                </MoviePageStyles > :
                <div className="loader">
                    <Loader size={'xl'} />
                </div>
            }

        </>
    )
}

export default MoviePage