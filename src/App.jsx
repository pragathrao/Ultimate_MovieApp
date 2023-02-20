import { useContext, useEffect, useState } from 'react'
import Api from './API/masterAPI'
import { CreateContext } from './Context/Context'
import Spotlight from './Components/Structure/Spotlight'
import Home from './Components/Pages/Home'
import DataPage from './Components/Pages/DataPage'
import { Link, Route, Routes } from 'react-router-dom'
import MoviePage from './Components/Pages/MoviePage'
import { useDocumentTitle, useDocumentVisibility } from '@mantine/hooks'
import ListPage from './Components/Pages/ListPage'
import { FaBookmark } from 'react-icons/Fa'



function App() {



  const documentState = useDocumentVisibility();
  useDocumentTitle(`${documentState === 'visible' ? 'Movies are Lovin you ❤' : 'Movies Want you to come back 😢'} `)

  return (
    <Spotlight>
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route exact path="/Explore" element={<DataPage />} />
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route exact path="/List" element={<ListPage />} />
      </Routes>
      <Link to="/List">
        <div className='listicon'>
          <FaBookmark className='svg' />
        </div>
      </Link>
    </Spotlight>
  )
}

export default App

