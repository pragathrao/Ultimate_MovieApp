import { Button } from '@mantine/core'
import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CreateContext } from '../../Context/Context'
import LeftBar from '../Structure/LeftBar'
import MoviePageStyles from '../Styles/MoviePageStyles'

function MoviePage() {

    const { state: { masterData } } = useContext(CreateContext)

    const { id } = useParams()
    const MovieData = masterData.find((data) => parseInt(id) === data.id)


    return (
        <>
            {/* {Data.length > 1 ? */}
            <MoviePageStyles Movieurl={MovieData?.backdrop_path}>
                <div className="hero">
                    <div className="hero-data">
                        <h1>{MovieData.title}</h1>
                        <p>{MovieData.overview}</p>
                        <Button>Play</Button>
                    </div>
                </div>
                {/* <div className="also-Watch">
                        <h3>People Also Watch</h3>
                        <CarComponent data={Data.length > 0 ? Data : []} slides={4} slideSize="20%" slideGap="lg" />
                    </div> */}
                <div className="right-bar">
                    <LeftBar />
                </div>
            </MoviePageStyles >
            {/* : <h1>Loading</h1>} */}

        </>
    )
}

export default MoviePage