import styled from '@emotion/styled';
import { Text } from '@mantine/core'
import React, { useContext, useState } from 'react'
import { CreateContext } from '../../Context/Context';
import Explore from '../Structure/Explore';
import Header from '../Structure/Header';

function ListPage() {
    const { state: { listData } } = useContext(CreateContext)
    console.log(listData)

    const Box = styled.div`
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
            <Box>
                <Text component='h3' >Make Lists of your Favorite Movies</Text>
            </Box>

            {
                listData.map((item) => {
                    console.log(item.list)
                    return (
                        <>
                            <Text>{item.name}</Text>
                            <Explore data={item.list} />
                        </>

                    )
                })
            }
        </>
    )
}

export default ListPage