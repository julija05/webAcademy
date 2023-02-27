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
margin:30px;
max-width:850px;
font-weight:700;
`;
const HomeParagraph = styled.div`
font-size:20px;
margin-top:20px
`;

const HomeButton = styled.button`
padding:15px;
border-radius:20px;
border:none;
background-color:#335652;
color:white;
font-family: 'Life Savers', cursive;
font-weight:800;
margin-top:20px;
font-size:20px;
`;

export function HomePage() {
    return (
        <Wrapper>
            <HomeText>Connect, Collaborate, and Learn with Brainwave
            <HomeParagraph>Empowering you with cutting-edge knowledge and skills.</HomeParagraph>
            <HomeButton>Start Learning Now</HomeButton>
            </HomeText>
            <img src={image} alt={'learnnig people'} />
        </Wrapper>
    );
  }