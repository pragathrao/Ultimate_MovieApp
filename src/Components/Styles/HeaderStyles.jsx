import styled from "@emotion/styled";

export const Wrapper = styled.div`
z-index: 5 ;
box-shadow: 0px 10px 20px #00090f;
display: flex ;
justify-content: space-between;
align-items: center ;
height: 8rem;
position: sticky;
top: 0;
background-color: var(--background-color);

h4{
    margin-left: 4rem;
}

.avatar{
    display: flex;
     padding-right: 4rem;
}

.mantine-kxdkzk{
    background-color: var(--background-color);
    border-radius: 100%;

    &:hover {
                    background: var(--side-color) radial-gradient(circle, transparent 1%, #343431 1%) center/15000%;
                    }
        &:active {
                    background-color: var(--side-color);
                    background-size: 100%;
                    transition: background 0s;
                    }
}



.head{
    display: flex;
    align-items: center;
    gap: 1rem;
}

`