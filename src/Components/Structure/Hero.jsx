import { Carousel } from '@mantine/carousel';
import { useContext } from 'react';
import { CreateContext } from '../../Context/Context';
import styled from '@emotion/styled'
import { Image } from '@mantine/core';

function Hero() {

  const { state: { trending } } = useContext(CreateContext)

  return (
    <Carousel mx="auto" className='Carousal' withIndicators height={480} >
      {trending?.slice(0, 4).map((data) => {
        return (
          <Carousel.Slide>
            <img className='img' src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} alt="" />
          </Carousel.Slide>
        )
      })}
    </Carousel>
  );
}

export default Hero