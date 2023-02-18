import { Input, Loader } from '@mantine/core'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Genres from '../../API/Genres'
import { CreateContext } from '../../Context/Context'
import Card from '../Structure/Card'
import { LeftButton } from '../Styles/LeftbarStyles'
import { TbSearch } from 'react-icons/tb'
import SearchAPI from '../../API/SearchAPI'
import axios from 'axios'
import { DataPageStyles } from '../Styles/DataPageStyles'
import { key } from './Home'



function DataPage() {

    const { state: { masterData } } = useContext(CreateContext)

    const [Form, setForm] = useState("")
    const [data, setData] = useState(masterData)
    const [genres, setGenres] = useState([])
    const [Loading, setLoading] = useState(true)


    function HandleForm(e) {
        e.preventDefault()
        setForm(e.target.value)
    }
    function Logic() {
        SearchAPI(Form).then((item) => setData(item))
    }

    function GenreLogic(id) {
        Genres(id).then((item) => {
            setData(item)
            setLoading(false)

        })
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (Form.length > 1) {
                Logic()
            }
        }, 1000);

        return () => {
            clearTimeout(timeout)
        }
    }, [Logic, Form])

    useEffect(() => {
        const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`
        axios.get(url).then((res) => setGenres(res.data.genres))
    }, [])

    console.log(genres)

    return (
        <>
            <DataPageStyles>
                <div className="left">
                    <div className="innerleft">
                        <Link to="/">
                            <h2>Movies !!!!!</h2>
                            <Input
                                icon={<TbSearch />}
                                placeholder="Search"
                                size="xs"
                                value={Form}
                                onChange={HandleForm}
                                onClick={(e) => e.preventDefault()}
                            />

                        </Link>
                        <h3 className='h1'>Filter By Genre</h3>
                        <div className="genres">
                            {genres?.map((item) => <LeftButton className="GenreButton" onClick={() => {
                                GenreLogic(item.id)
                                setLoading(true)

                            }
                            }><h5 >{item.name}</h5></LeftButton>)}
                        </div>
                    </div>
                </div>
                {/* {Loading === false || data === masterData ? */}
                <div className="right">
                    {data.map((item) => <Link to={`/movie/${item.id}`}><Card url={item.poster_path} title={item.title} rating={item.vote_average} /> </Link>)}
                </div>
                {/* : <Loader size="xl" />} */}
            </DataPageStyles>
        </>
    )
}

export default DataPage