import React from 'react';
import sample from '../../../assets/images/homeImage/background-video-4.mp4';
import {Wrapper,Video,HomeText,HomeButton,TextWrapper} from "./style"


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