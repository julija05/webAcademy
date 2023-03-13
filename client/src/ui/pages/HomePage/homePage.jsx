import React from 'react';
import sample from '../../../assets/images/homeImage/homeImage.svg';
import { LoginForm } from '../../components/LoginForm/loginForm';
import {Wrapper} from "./style"


export function HomePage() {
    return (
        <Wrapper>
            <LoginForm/>
            <img src={sample} alt="" />
        </Wrapper>
    );
  }