import { Button, Loader, Tooltip } from '@mantine/core'
import { useSpotlight } from '@mantine/spotlight'
import React, { useContext, useEffect } from 'react'
import SearchAPI from '../../API/SearchAPI'
import { CreateContext } from '../../Context/Context'
import Explore from '../Structure/Explore'
import Header from '../Structure/Header'
import Hero from '../Structure/Hero'
import LeftBar from '../Structure/LeftBar'

export const key = import.meta.env.VITE_REACT_APP_MOVIE_API


function Home() {

    const { query, opened } = useSpotlight();

    const { state: { trending, mcu, popular }, AddtoSearch, AddtoMaster } = useContext(CreateContext)


    useEffect(() => {
        const Timeout = setTimeout(() => {
            SearchAPI(query).then((data) => {
                if (data && opened == true) {
                    AddtoSearch(data)
                    AddtoMaster(data)
                } else if (opened == false) {
                    AddtoSearch([])
                }
            })

        }, 500)

        return () => {
            clearTimeout(Timeout)
        }


    }, [query, opened])




    return (
        <>
            <div className='App'>
                <LeftBar />
                <div className="Body">
                    <Hero />
                    <Explore data={trending} classA="explore" />
                    <Explore data={mcu} classA="explore" />
                    <Explore data={popular} classA="explore" />
                </div>
            </div>
        </>
    )
}

export default Home