import { useSpotlight } from '@mantine/spotlight'
import React, { useContext, useEffect } from 'react'
import SearchAPI from '../../API/SearchAPI'
import { CreateContext } from '../../Context/Context'
import Explore from '../Structure/Explore'
import Header from '../Structure/Header'
import Hero from '../Structure/Hero'
import LeftBar from '../Structure/LeftBar'

function Home() {

    const { query, opened } = useSpotlight();



    const { state: { trending, mcu, popular }, AddtoSearch, AddtoMaster } = useContext(CreateContext)

    useEffect(() => {
        const Timeout = setTimeout(() => {
            const results = SearchAPI(query).then((data) => {
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
            <Header />
            <div className='App'>
                <LeftBar />
                <div className="Body">
                    <Hero />
                    <Explore data={trending} />
                    <Explore data={mcu} />
                    <Explore data={popular} />
                </div>
            </div>
        </>
    )
}

export default Home