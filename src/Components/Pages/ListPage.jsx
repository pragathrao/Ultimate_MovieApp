import styled from '@emotion/styled';
import { Box, Container, Text } from '@mantine/core'
import React, { useContext, useState } from 'react'
import { CreateContext } from '../../Context/Context';
import Explore from '../Structure/Explore';
import Header from '../Structure/Header';

function ListPage() {
    const { state: { listData } } = useContext(CreateContext)
    console.log(listData)

    const BoxT = styled.div`
        min-height: 45vh;
        background-color: var(--side-color);
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 1rem;

        h3{
            font-size: 3rem;

        }
        
    `

    return (
        <>
            <Header />
            <BoxT>
                <Text component='h3' >Make Lists of your Favorite Movies</Text>
            </BoxT>
            <Box className='box'>
                {
                    listData.map((item) => {
                        console.log(item.list)
                        return (
                            <Box>
                                <Text component='p' className='list_p'>{item.name}</Text>
                                <Explore data={item.list} />
                            </Box>

                        )
                    })
                }
            </Box>
        </>
    )
}

export default ListPage