import { Text } from '@mantine/core'
import React, { useState } from 'react'
import { LeftbarStyles, LeftButton } from '../Styles/LeftbarStyles'
import { MdSearch, MdSettings, MdLogout, MdMovie, MdHome } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import ListDrawer from './ListDrawer';


const Settings = [
    { logo: <MdSettings />, title: "Settings" },
    { logo: <MdLogout />, title: "Logout" },
]

function LeftBar() {

    const [open, setOpened] = useState(false)

    const navigate = useNavigate()


    function Changeit(data) {
        setOpened(data)
    }


 
    const MenuData = [
        { logo: <MdHome />, title: "Home", link: "/", onClick: () => navigate("/") },
        { logo: <MdSearch />, title: "Lists", link: "", onClick: () => setOpened(true) },
        { logo: <MdMovie />, title: "Explore", link: "/Explore", onClick: "" },
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