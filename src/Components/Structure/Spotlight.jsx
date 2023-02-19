import styled from '@emotion/styled';
import { Badge, Button, Center, Group, Image, Text, Tooltip, UnstyledButton } from '@mantine/core';
import { SpotlightProvider, useSpotlight } from '@mantine/spotlight'
import React, { useContext, useState } from 'react'
import { TbSearch } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom';
import { CreateContext } from '../../Context/Context';

function Spotlight({ children }) {

    const { state: { search, list, drawer }, AddtoList } = useContext(CreateContext)
    const navigate = useNavigate()

    const SpotlightAction = [
        {
            title: 'Home',
            description: 'Get to home page',
            onTrigger: () => console.log('Home'),
            icon: <TbSearch size={18} />,
        },
        {
            title: 'Bookmarks',
            description: 'Get All Your BookMarks',
            onTrigger: () => console.log('Dashboard'),
            icon: <TbSearch size={18} />,
        },
        {
            title: 'About Me',
            description: 'know about me',
            onTrigger: () => console.log('Documentation'),
            icon: <TbSearch size={18} />,
        },
    ];


    const Wrapper = styled.div`
    flex : 1;
`

    const AButton = styled(UnstyledButton)`
    position: relative;
    width: 100%;
    padding: 1rem 1.2rem;
    background: var(--background-color);
    color: white ;


    &:hover{
        background-color:red;
    } 

`

    const Div = styled.div`
    background-color: var(--background-color) ;
    
`

    const AddButton = styled(Button)`
    position: absolute;
    bottom: 0px;
    background-color: transparent;
    padding: 0;
    margin-left: 1.3rem ;
    width: fit-content;
    border-radius: 100%;
    border: none;

    &:hover{
        background-color: transparent;

    }
    
`

    const Grouped = styled(Group)`
    position: relative;
    
`

        const actions = search.map((action) => {
        return (
            {
                title: action.title,
                description: action.overview,
                onTrigger: () => navigate(`/movie/${action.id}`),
                image: `https://image.tmdb.org/t/p/original${action.poster_path}`,
                list: list.find((item) => item.title === action.title) ? "your' Set" : "Add Your List",
                AddToList: () => AddtoList(action)
            }
        )

    })


    function Styles({
        action,
        styles,
        classNames,
        hovered,
        onTrigger,
        ...others
    }) {
        return (
            <Grouped spacing="lg">
                <AButton
                    tabIndex={-1}
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={onTrigger}
                    {...others}
                >
                    <Group noWrap>
                        {action.image && (
                            <Center>
                                <Image src={action.image} alt={action.title} width={100} height={90} sx={{ objectFit: "contain" }} />
                            </Center>
                        )}

                        <Wrapper >
                            <Text size="lg" weight="bold">{action.title}</Text>
                            {action.description && (
                                <Text size="xs">
                                    {action.description}
                                </Text>
                            )}
                        </Wrapper>
                    </Group>
                </AButton>
                {
                    drawer === true ?
                        actions.length > 0 ?
                            action.list === "your' Set" ?
                                <Tooltip label="Added Already Mate">
                                    <AddButton
                                        data-disabled
                                        sx={{ '&[data-disabled]': { pointerEvents: 'all', padding: "0px", background: "none" } }}
                                        onClick={(event) => event.preventDefault()}
                                    >
                                        <Badge variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>You'r Set</Badge>

                                    </AddButton>
                                </Tooltip>
                                :
                                <AddButton onClick={action.AddToList}>
                                    <Badge variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>Add to List</Badge>
                                </AddButton>
                            : ""
                        : ""
                }

            </Grouped>
        );
    }

    function ActionsWrapper({ children }) {
        return (
            <Div>
                {children}
            </Div>
        );
    }


    return (
        <SpotlightProvider
            actions={actions.length > 0 ? actions : SpotlightAction}
            actionComponent={Styles}
            searchIcon={<TbSearch size={18} />}
            searchPlaceholder="Search for Options Or Movies"
            shortcut="mod + shift + 1"
            nothingFoundMessage="Nothing found..."
            maxWidth={800}
            actionsWrapperComponent={ActionsWrapper}

        >
            {children}
        </SpotlightProvider>
    )
}



export default Spotlight