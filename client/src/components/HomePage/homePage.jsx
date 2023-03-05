import React from 'react';
import styled from "styled-components";
import image from "../../images/homeImage/Img.png";
import { LoginForm } from './LoginForm/loginForm';
import sample from '../../images/homeImage/background-video-4.mp4';

const Wrapper = styled.div`
display:flex;
flex-direction:row;
justify-content:space;
align-items:center;
`;

const Video = styled.video`
position:fixed;
z-index:-1;
width:99%;
`;

const HomeText = styled.div`
font-size:30px;
color: white;
max-width:850px;
font-weight:800;
text-shadow: 0px 2px 2px rgba(255, 255, 255, 0.4); 
`;

const HomeButton = styled.button`
padding:12px;
border:none;
background-color:#335652;
color:white;
font-family: 'Life Savers', cursive;
font-weight:800;
margin-top:50px;
font-size:15px;
width:180px;
text-align:left;
`;
const TextWrapper = styled.div`
display:flex;
flex-direction:column;
margin:240px;
background:rgba(0,0,0,0.3);
border-radius:20px;
`;
export function HomePage() {
    return (
        <Wrapper>
            <Video className='videoTag' autoPlay loop muted>
             <source src={sample} type='video/mp4' />
            </Video>
            <TextWrapper>
            <HomeText>Connect, Collaborate, and Learn with Knownet.
            </HomeText>
            <HomeButton>Start Learning Now &#8595;</HomeButton>    
            </TextWrapper>
           
            <TextWrapper/>
        </Wrapper>
    );
  }