import { Text } from '@mantine/core'
import React, { useContext, useState } from 'react'
import { LeftbarStyles, LeftButton } from '../Styles/LeftbarStyles'
import { MdSettings, MdLogout, MdMovie, MdHome } from "react-icons/md";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import ListDrawer from './ListDrawer';
import { CreateContext } from '../../Context/Context';


const Settings = [
    { logo: <MdSettings className='svg' />, title: "Settings" },
    { logo: <MdLogout className='svg' />, title: "Logout" },
]

function LeftBar() {

    const [open, setOpened] = useState(false)

    const navigate = useNavigate()
    const { SetDrawer } = useContext(CreateContext)

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
        { logo: <BsFillBookmarkPlusFill className='svg' />, title: "Bookmark", link: "", onClick: () => Initialit() },
        { logo: <MdMovie className='svg' />, title: "Explore", link: "/Explore", onClick: "" },
    ];
    return (
        <LeftbarStyles>
            <div className='sticky'>
                {MenuData.map((data) =>
                    <div className='Menubar'>
                        <Link to={data.link}>
                            <LeftButton onClick={data.onClick}>
                                <div className='Button-Text'>
                                    {data.logo}
                                    <Text size="md" component='h6'>{data.title}</Text>
                                </div>
                            </LeftButton>
                        </Link>
                    </div>
                )}
                <div className='settings'>
                    {Settings.map((data) =>
                        <div className='Menubar'>
                            <LeftButton>
                                <div className='Button-Text'>
                                    {data.logo}
                                    <Text size="md" component='h6'>{data.title}</Text>
                                </div>
                            </LeftButton>
                        </div>
                    )}
                </div>
            </div>
            <ListDrawer data={open} changeit={Changeit} />
        </LeftbarStyles>
    )
}

export default LeftBar