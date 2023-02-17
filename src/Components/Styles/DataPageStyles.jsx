import styled from "@emotion/styled";

export const DataPageStyles = styled.div`
 width: 100%;
  display: grid;
  grid-template-columns: 20rem 1fr;
  .left{
      background-color: var(--side-color);
  }

  .right{
    display: grid;
    grid-template-columns: repeat(auto-fit, 30rem);
    gap: 2rem;
    justify-content: center;
  }

  .innerleft{
    position: sticky;
    top: 0;
  }

`