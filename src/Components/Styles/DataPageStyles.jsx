import styled from "@emotion/styled";

export const DataPageStyles = styled.div`
 width: 100%;
display: flex;

 @media only screen and (max-width: 800px) {

    flex-direction: column;

}


  .left{
      background-color: var(--side-color);
      max-width: 30rem;
  }

  .right{
    display: grid;
    grid-template-columns: repeat(auto-fit, 20rem);
    gap: 2rem;
    justify-content: center;
    flex: 1;
    padding: 3rem;

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
    margin-top: 4rem ;
    margin-bottom: 2rem ;
    font-size: 3rem ;
}

    h5{
      color: white ;
      font-size: 1.8rem; ;
    }
  }

`