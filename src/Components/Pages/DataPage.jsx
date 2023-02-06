import styled from '@emotion/styled'
import { Input } from '@mantine/core'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Genres, { genres } from '../../API/Genres'
import { CreateContext } from '../../Context/Context'
import Card from '../Structure/Card'
import { LeftButton } from '../Styles/LeftbarStyles'
import { TbSearch } from 'react-icons/tb'
import SearchAPI from '../../API/SearchAPI'



const DataPageStyles = styled.div`
 width: 100%;
  display: grid;
  grid-template-columns: 20rem 1fr;
  .left{
      background-color: var(--side-color);
  }

  .right{
    display: grid;
    grid-template-columns: repeat(auto-fit, 30rem);
    gap: 2rem;
    justify-content: center;
  }

    
`

function DataPage() {

    const { state: { masterData }, AddtoGenre } = useContext(CreateContext)

    const [Form, setForm] = useState("")

    function HandleForm(e) {
        e.preventDefault()
        setForm(e.target.value)
    }
    function Logic() {
        const Data = SearchAPI(Form)

        return Data
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



    return (
        <DataPageStyles>
            <div className="left">
                <Link to="/">
                    <h2>Movies !!!!!</h2>
                    <Input
                        icon={<TbSearch />}
                        placeholder="Search"
                        size="xs"
                        value={Form}
                        onChange={HandleForm}
                        onClick = {(e) => e.preventDefault()}
                    />

                </Link>
                <div className="genres">
                    {genres.map((item) => <LeftButton className="GenreButton" onClick={() => Genres(item.id)}><h5 >{item.name}</h5></LeftButton>)}
                </div>
            </div>
            <div className="right">
                {masterData.map((item) => <Link to={`/movie/${item.id}`}><Card url={item.poster_path} title={item.title} rating={item.vote_average} /> </Link>)}
            </div>
        </DataPageStyles>
    )
}

export default DataPage