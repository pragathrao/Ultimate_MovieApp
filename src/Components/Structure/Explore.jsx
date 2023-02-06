import { Carousel } from '@mantine/carousel'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CreateContext } from '../../Context/Context'

function Explore({data}) {
    return (
        <div>
            <Carousel
                withIndicators
                height={169}
                slideSize="20%"
                slideGap="xs"
                align="start"
                slidesToScroll={4}
                className="explore"
                includeGapInSize

            >
                {data?.map((data) => {
                    return (
                        <Carousel.Slide>
                            <Link to={`movie/${data.id}`}>
                                <img src={`https://image.tmdb.org/t/p/w300${data.backdrop_path}`} alt="" />
                            </Link>
                        </Carousel.Slide>
                    )
                })}
            </Carousel>
        </div>

    )
}

export default Explore