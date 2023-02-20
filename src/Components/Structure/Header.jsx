import { Avatar, Input, MediaQuery, Text } from '@mantine/core'
import { openSpotlight } from '@mantine/spotlight'
import React, { useContext, useState } from 'react'
import { BsFillBookmarkPlusFill } from 'react-icons/bs'
import { MdHome, MdMovie, MdSearch } from 'react-icons/md'
import { TbSearch } from 'react-icons/tb'
import { Link, useNavigate } from 'react-router-dom'
import { CreateContext } from '../../Context/Context'
import { Wrapper } from '../Styles/HeaderStyles'
import ListDrawer from './ListDrawer'




function Header({ property }) {

    const navigate = useNavigate()

    const { SetDrawer } = useContext(CreateContext)

    const [open, setOpened] = useState(false)


    function Initialit() {
        setOpened(true)
        SetDrawer(true)
    }


    function Changeit(data) {
        setOpened(data)
        SetDrawer(data)
    }

    const MenuData = [
        { logo: <MdHome className='svg' />, title: "Home", link: "/", onClick: () => navigate("/") },
        { logo: <MdSearch className='svg' />, title: "Search", link: "/", onClick: () => openSpotlight() },
        { logo: <BsFillBookmarkPlusFill className='svg' />, title: "Bookmark", link: "", onClick: () => Initialit() },
        { logo: <MdMovie className='svg' />, title: "Explore", link: "/Explore", onClick: "" },
    ];
    return (
        <MediaQuery
            query="(min-width: 800px)"
            styles={{ display: `${property}` }}
        >
            <Wrapper>
                <Link to="/">
                    <h4 className='h1'>MovieTopia</h4>
                </Link>
                <div className="head">
                    <div className="avatar">
                        {MenuData.map((data) =>
                            <div className='Menubar'>
                                <Link to={data.link}>
                                    <Avatar radius="xl" size={35} className='avatar-styles' onClick={data.onClick}>
                                        {data.logo}
                                    </Avatar>
                                </Link>
                            </div>
                        )}
                    </div>
                    <ListDrawer data={open} changeit={Changeit} />
                </div>
            </Wrapper>
        </MediaQuery>
    )
}

export default Header