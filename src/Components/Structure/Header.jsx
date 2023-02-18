import { Avatar, Input, Text } from '@mantine/core'
import { openSpotlight } from '@mantine/spotlight'
import React from 'react'
import { TbSearch } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { Wrapper } from '../Styles/HeaderStyles'

function Header() {
    return (
        <Wrapper>
            <Link to="/">
                <h4 className='h1'>MOFW != BORING</h4>
            </Link>
            <div className="head">
                <Input
                    icon={<TbSearch />}
                    placeholder="Search"
                    radius="lg"
                    size="xs"
                    onClick={() => openSpotlight()}
                />
                <div className="avatar">
                    <Avatar radius="xl" size={35}>HE</Avatar>
                </div>
            </div>
        </Wrapper>
    )
}

export default Header