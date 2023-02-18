import styled from "@emotion/styled";
import { UnstyledButton } from "@mantine/core";

export const LeftbarStyles = styled.div`
background-color: var(--side-color);
height: 100%;



    .Button-Text{
        display: flex;
        padding: 1rem;
        align-items: center;
        gap: 1rem;
    }

    .sticky{
        position: sticky;
        top: 8rem;
    }

    .settings{
        margin-top: 20rem;
    }

`

export const LeftButton = styled(UnstyledButton)`
    background-position: center;
    transition: background 0.8s;
    border: none;
    border-radius: 2px;
    padding: 12px 18px;
    font-size: 1.6rem;
    text-transform: uppercase;
    cursor: pointer;
    color: #ffffffb0;
    outline: none;
    width: 100% ;
    display: flex;

        &:hover {
                    background: var(--background-color) radial-gradient(circle, transparent 1%, #343431 1%) center/15000%;
                    }
        &:active {
                    background-color: var(--background-color);
                    background-size: 100%;
                    transition: background 0s;
                    }

`