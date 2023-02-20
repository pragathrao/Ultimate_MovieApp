import { MediaQuery, } from '@mantine/core'
import { useSpotlight } from '@mantine/spotlight'
import React, { useContext, useEffect, useState } from 'react'
import Api from '../../API/masterAPI'
import SearchAPI from '../../API/SearchAPI'
import { CreateContext } from '../../Context/Context'
import Explore from '../Structure/Explore'
import Header from '../Structure/Header'
import Hero from '../Structure/Hero'
import LeftBar from '../Structure/LeftBar'

export const key = import.meta.env.VITE_REACT_APP_MOVIE_API


function Home() {

    const { query, opened } = useSpotlight();

    const [trending, AddToTrending] = useState([])
    const [mcu, AddToMCU] = useState([])
    const [popular, AddToPopular] = useState([])

    const { AddtoSearch } = useContext(CreateContext)


    useEffect(() => {
        const Timeout = setTimeout(() => {
            SearchAPI(query).then((data) => {
                if (data && opened == true) {
                    AddtoSearch(data)
                    AddToMaster(data)
                } else if (opened == false) {
                    AddtoSearch([])
                }
            })

        }, 500)

        return () => {
            clearTimeout(Timeout)
        }


    }, [query, opened])


    useEffect(() => {
        Api().then((data) => {
            AddToMCU(data[1]),
                AddToPopular(data[2]),
                AddToTrending(data[3])
        })
    }, [])





    return (
        <>
            <div className='App'>
                <LeftBar />
                <Header property="none!important" />
                <div className="Body">
                    <Hero data={trending} />
                    <p className='c-text'>Trending</p>
                    <Explore data={trending} classA="explore" />
                    <p className='c-text'>Marvel Cinematic Universe </p>
                    <Explore data={mcu} classA="explore" />
                    <p className='c-text'>Popular</p>
                    <Explore data={popular} classA="explore" />
                </div>
            </div>
        </>
    )
}

export default Home