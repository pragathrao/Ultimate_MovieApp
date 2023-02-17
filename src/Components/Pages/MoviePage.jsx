import { Badge } from '@mantine/core'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MoviePageAPI from '../../API/MoviePageAPI'
import Reccomendation from '../../API/Reccomendation'
import { CreateContext } from '../../Context/Context'
import Explore from '../Structure/Explore'
import LeftBar from '../Structure/LeftBar'
import ModalComp from '../Structure/Modal'
import Modal from '../Structure/Modal'
import MoviePageStyles from '../Styles/MoviePageStyles'

function MoviePage() {

    const { state: { masterData } } = useContext(CreateContext)

    const [Data, setData] = useState([])
    const [MovieData, setMovieData] = useState([])

    const { id } = useParams()
    console.log(MovieData)
    console.log(id)

    useEffect(() => {
        MoviePageAPI(id).then(res => setMovieData(res))
        Reccomendation(id).then((res) => setData(res))
    }, [])

    return (
        <>
            <MoviePageStyles Movieurl={MovieData?.backdrop_path}>
                <div className="hero">
                    <div className="hero-data">
                        <div className="hero-poster">
                            <img src={`https://image.tmdb.org/t/p/w500${MovieData.poster_path}`} alt="" />
                        </div>
                        <div className="hero-info">
                            <h1>{MovieData.title}</h1>
                            {MovieData.genres?.map((item) => <Badge  variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>{item.name}</Badge>)}
                            <p>{MovieData.overview}</p>
                            <ModalComp id={MovieData?.videos?.results} />
                        </div>
                    </div>
                    <div className="also-Watch">
                        <h3>People Also Watch</h3>
                        <Explore data={Data[0]?.length > 0 ? Data[0] : []} slides={4} slideSize="20%" slideGap="lg" />
                    </div>
                </div>
                <div className="right-bar">
                    <LeftBar />s
                </div>
            </MoviePageStyles >

        </>
    )
}

export default MoviePage