import { Button } from '@mantine/core'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Reccomendation from '../../API/Reccomendation'
import { CreateContext } from '../../Context/Context'
import Explore from '../Structure/Explore'
import LeftBar from '../Structure/LeftBar'
import MoviePageStyles from '../Styles/MoviePageStyles'

function MoviePage() {

    const { state: { masterData } } = useContext(CreateContext)

    const [Data, setData] = useState([])

    const { id } = useParams()
    const MovieData = masterData.find((data) => parseInt(id) === data.id)
    console.log(MovieData)
    console.log(Data)

    useEffect(() => {
        Reccomendation(id).then((res) => setData(res.data.results))
    }, [])

    return (
        <>
            <MoviePageStyles Movieurl={MovieData?.backdrop_path}>
                <div className="hero">
                    <div className="hero-data">
                        <h1>{MovieData.title}</h1>
                        <p>{MovieData.overview}</p>
                        <Button>Play</Button>
                    </div>
                    <div className="also-Watch">
                        <h3>People Also Watch</h3>
                        <Explore data={Data.length > 0 ? Data : []} slides={4} slideSize="20%" slideGap="lg" />
                    </div>
                </div>
                <div className="right-bar">
                    <LeftBar />
                </div>
            </MoviePageStyles >

        </>
    )
}

export default MoviePage