import styled from '@emotion/styled'
import { Carousel } from '@mantine/carousel'
import { Text } from '@mantine/core'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Box } from '../Styles/ExploreStyles'

function Explore({ classA, data }) {

    return (
        <div>
            <Carousel
                height={198}
                slideSize="25%"
                slideGap="xs"
                align="start"
                slidesToScroll={4}
                className={classA}
                includeGapInSize
                loop
                breakpoints={[
                    { maxWidth: '1500', slideSize: '33.333%' },
                    { maxWidth: '1200', slideSize: '50%' },
                    { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
                ]} styles={{
                    control: {
                        '&[data-inactive]': {
                            opacity: 0,
                            cursor: 'default',
                        },
                    },
                }}

            >
                {data?.map((data) => {
                    return (
                        <Carousel.Slide className='slide'>
                            <Link to={`/movie/${data.id}`}>
                                <Box>
                                    <img src={`https://image.tmdb.org/t/p/w500${data.backdrop_path ? data.backdrop_path : data.poster_path}`} alt="" />
                                    <div>
                                        <Text component='h4' size={16}>{data.title}</Text>
                                        <Text component='h5'>{data.release_date.slice(0, 4)}</Text>
                                    </div>
                                </Box>
                            </Link>
                        </Carousel.Slide>
                    )
                })}
            </Carousel>
        </div>

    )
}

export default Explore