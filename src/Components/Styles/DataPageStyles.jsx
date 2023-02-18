import styled from "@emotion/styled";

export const DataPageStyles = styled.div`
 width: 100%;
  display: grid;
  grid-template-columns: 30rem 1fr;
  .left{
      background-color: var(--side-color);
  }

  .right{
    display: grid;
    grid-template-columns: repeat(auto-fit, 30rem);
    gap: 2rem;
    justify-content: center;
  }

  h2{
    margin-bottom: 3rem;
  }


  .innerleft{
    position: sticky;
    top: 0;
    text-align: center;
    padding: 4rem 2rem 0 2rem ;

    h3{
    margin-top: 2rem ;
    margin-bottom: 1.2rem ;
    font-size: 3rem ;
}

    h5{
      color: white ;
      font-size: 1.8rem; ;
    }
  }

`