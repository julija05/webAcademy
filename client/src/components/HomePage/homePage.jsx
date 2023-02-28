import React from 'react';
import styled from "styled-components";
import image from "../../images/homeImage/Img.png";
import { LoginForm } from './LoginForm/loginForm';

const Wrapper = styled.div`
 display:flex;
 flex-direction:row;
 justify-content:center;
 align-items:center;

`;



export function HomePage() {
    return (
        <Wrapper>
            <LoginForm/>
            <img src={image} alt={'learnnig people'} />
        </Wrapper>
    );
  }