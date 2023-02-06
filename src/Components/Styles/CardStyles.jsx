import styled from "@emotion/styled";

export const CardWrapper = styled.div`
    box-shadow: 0 1px 3px rgb(0 0 0 / 5%), rgb(0 0 0 / 5%) 0px 10px 15px -5px, rgb(0 0 0 / 4%) 0px 7px 7px; 
    border: 0.1rem solid rgb(55, 58, 64);
    width: 26.67rem ;
    position: relative;
    color: white ;

    .rating{
        position: absolute ;
        top: 1rem ;
        display: flex ;
        align-items: center ;
        background-color: #29252598;
        width: 100%;
        justify-content: flex-end ;


        .icon{
            height: 3rem ;
            width: 3rem ;
            fill: #ffe247;
            margin-right: 1rem;
        }
    }
    
    .img{
        display: flex ;
        img{
            height:40rem !important;
            max-width: 100%;
            object-fit: contain;
        }
    }

    .caption{
        position: absolute;
  text-align: center;
  bottom: 1rem;
  background-color: #29252598;
  width: 100%;
  padding: 0.5rem 0.3rem;
}
    
    `