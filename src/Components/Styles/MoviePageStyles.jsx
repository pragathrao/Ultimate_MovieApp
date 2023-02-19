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
    grid-template-columns: minmax(10rem, 20rem) 1fr ;
    overflow: hidden;
    
.right-bar{
    background: #010000!important ;
    grid-row: 1/-1 ;
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