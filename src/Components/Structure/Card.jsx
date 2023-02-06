import React from 'react';

import styled from '@emotion/styled';
import { MdStar } from "react-icons/md";
import { CardWrapper } from '../Styles/CardStyles';


function Card({ url, title, rating }) {
    return (
        <CardWrapper>
            <div className="img">
                <img src={`https://image.tmdb.org/t/p/original${url}`} alt="" />
                <div className="rating">
                    <p>{Math.floor(Number(rating))}</p>
                    <MdStar className='icon' />
                </div>
                <div className="caption">
                    <h3>{title}</h3>
                </div>
            </div>
        </CardWrapper>
    );
}

export default Card