import React from 'react';
import styled from "styled-components";
import image from "../../images/homeImage/Img.png";

const Wrapper = styled.div`
 display:flex;
 flex-direction:row;
 justify-content:center;
 align-items:center;
`;
const HomeText = styled.div`
font-size:30px;
color: white;
margin:25px;
max-width:500px;
font-weight:700;
`;

export function HomePage() {
    return (
        <Wrapper>
            <HomeText>"Code Your Future: Learn Web Development with Ease"</HomeText>
            <img src={image} alt={'learnnig people'} />
        </Wrapper>
       
    );
  }