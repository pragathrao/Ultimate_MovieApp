import styled from "@emotion/styled";

import React from 'react'

function MoviePageStyles({ children, Movieurl }) {

    const url = `https://image.tmdb.org/t/p/original${Movieurl}`


    const Styles = styled.div`
    background: linear-gradient(to top, #3204fdba, #9907facc), url(${url}) no-repeat center center/cover ;
    background-blend-mode: multiply;
    min-height: 100vh;
    color: white ;
    display: flex;
    overflow: hidden;
    @media only screen and (max-width: 800px) {
        flex-direction: column;
        text-align: center;
}
    
.right-bar{
    background: #010000!important ;
    max-width: 20rem;
}

@media only screen and (max-width: 500px) {
    .hero-data{
    flex-wrap: wrap;
  }
}



.hero{
    margin: 20rem 10rem 0 10rem;

}



.hero-data{
    margin-bottom: 3.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    .badge{
        margin: 0 0.3rem;
    }

    .hero-poster{
        flex: 0 0 50%;
        display: flex;
        justify-content: center;

        img{
            width: 50%;
            text-align: center;

            @media only screen and (max-width: 500px) {
                width: 100%;
                margin-bottom: 2rem;
            }

        }
    }

    
    .hero-info{

        margin-bottom: 4rem;
    p{
        font-size: 1.7rem;
        margin-top: 1.5rem;
    }
    

    h1{
        font-size:6rem;
        margin-bottom: 0.5rem ;
        line-height:1.2 ;
    }
    button{
        margin-top: 3rem ;
        div{
            span{
                padding: 2rem 8rem;

            }
        }

    }
}
} 
.also-Watch{
        h3{
            font-size: 2rem;
            margin-top: 0.5rem;
            margin-bottom: 1.8rem;
        }
    }
`

    return (
        <Styles>
            {children}
        </Styles>
    )
}

export default MoviePageStyles