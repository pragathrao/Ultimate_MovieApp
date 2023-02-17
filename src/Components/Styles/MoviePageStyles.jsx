import styled from "@emotion/styled";

import React from 'react'

function MoviePageStyles({ children, Movieurl }) {

    const url = `https://image.tmdb.org/t/p/original${Movieurl}`


    const Styles = styled.div`
    background: linear-gradient(to top, #3204fdba, #9907facc), url(${url}) no-repeat center center/cover ;
    background-blend-mode: multiply;
    min-height: 100vh;
    color: white ;
    display: grid;
    grid-template-columns: 1fr minmax(10rem, 20rem);
    overflow: hidden;

.right-bar{
    background: #010000!important ;
    grid-row: 1/-1 ;
    grid-column: 2/3 ;
}


.hero{
    margin: 20rem 10rem 0 10rem;

    &-image{
        margin-left: 10rem ;

        img{
            height: 40rem!important; ;
        }
    }
}

.hero-data{
    margin-bottom: 3.5rem;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;

    .hero-poster{
        flex: 0 0 50%;
        display: flex;
        justify-content: center;

        img{
            width: 50%;
            text-align: center;

        }
    }
    
    .hero-info{
    p{
        font-size: 1.7rem;
        /* width: 70%; */
    }
    

    h1{
        font-size:6rem;
        margin-bottom: 1rem ;
        line-height:1.3!important ;
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
`

    return (
        <Styles>
            {children}
        </Styles>
    )
}

export default MoviePageStyles