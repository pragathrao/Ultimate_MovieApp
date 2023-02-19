import { Carousel } from '@mantine/carousel';
import { useContext } from 'react';
import { CreateContext } from '../../Context/Context';
import { Text } from '@mantine/core';

function Hero() {

  const { state: { trending } } = useContext(CreateContext)

  return (
    <Carousel mx="auto" className='Carousal' withIndicators height={480} sx={{ marginBlock: "2rem" }} >
      {trending?.slice(0, 4).map((data) => {
        return (
          <Carousel.Slide>
            <img className='img' src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} alt="" />
            <div className='hero-details'>
              <Text component='h4' size={16}>{data.title}</Text>
              <Text component='h5'>{data.release_date.slice(0, 4)}</Text>
            </div>
          </Carousel.Slide>
        )
      })}
    </Carousel>
  );
}

export default Hero