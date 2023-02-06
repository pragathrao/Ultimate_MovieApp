import { Carousel } from '@mantine/carousel';
import { useContext } from 'react';
import { CreateContext } from '../../Context/Context';
import styled from '@emotion/styled'

function Hero() {

  const { state: { trending } } = useContext(CreateContext)

  return (

    <div style={{ height: 500 }}>

    </div>


    // <Carousel mx="auto" className='Carousal' withIndicators height={480} >
    //   {trending?.slice(0, 4).map((data) => {
    //     return (
    //       <Carousel.Slide>
    //         <img src={`https://image.tmdb.org/t/p/w1280${data.backdrop_path}`} alt="" />
    //       </Carousel.Slide>
    //     )
    //   })}
    // </Carousel>
  );
}

export default Hero