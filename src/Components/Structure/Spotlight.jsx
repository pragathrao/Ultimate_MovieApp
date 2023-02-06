import styled from '@emotion/styled';
import { Badge, Center, Group, Image, Text, UnstyledButton } from '@mantine/core';
import { SpotlightProvider, useSpotlight } from '@mantine/spotlight'
import React, { useContext, useState } from 'react'
import { TbSearch } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom';
import { CreateContext } from '../../Context/Context';

function Spotlight({ children }) {

    const { state: { search, list }, AddtoList } = useContext(CreateContext)
    const [text, setText] = useState(false)
    const navigate = useNavigate()

    function Set() {
        setText(true)
    }


    const SpotlightAction = [
        {
            title: 'Home',
            description: 'Get to home page',
            onTrigger: () => console.log('Home'),
            icon: <TbSearch size={18} />,
        },
        {
            title: 'Dashboard',
            description: 'Get full information about current system status',
            onTrigger: () => console.log('Dashboard'),
            icon: <TbSearch size={18} />,
        },
        {
            title: 'Documentation',
            description: 'Visit documentation to lean more about all features',
            onTrigger: () => console.log('Documentation'),
            icon: <TbSearch size={18} />,
        },
    ];


    const Wrapper = styled.div`
    flex : 1;
`

    const Button = styled(UnstyledButton)`
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

    const AddButton = styled.button`
    position: absolute;
    bottom: 0px;
    left: 5px;
    
`

    const Grouped = styled(Group)`
    position: relative;
    
`
    console.log(list)

    const actions = search.map((action) => {
        return (
            {
                title: action.title,
                description: action.overview,
                onTrigger: () => navigate(`/movie/${action.id}`),
                image: `https://image.tmdb.org/t/p/original${action.poster_path}`,
                list: list.find((item) => item.title === action.title) ? "your' Set" : "Add Your List",
                AddToList: () => AddtoList([...list, action])


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
                <Button
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
                </Button>
                {actions.length > 0 ? <AddButton>
                    <Badge variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} onClick={action.AddToList}>{action.list}</Badge> :
                </AddButton> : ""}

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