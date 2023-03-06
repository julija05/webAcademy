import styled from "styled-components";

export const Wrapper = styled.div`
display:flex;
flex-direction:row;
justify-content:space;
align-items:center;
`;

export const Video = styled.video`
position:fixed;
z-index:-1;
width:100%;
object-fit: cover; 
height: 100%;
`;

export const HomeText = styled.div`
font-size:30px;
color: white;
max-width:850px;
font-weight:800;
text-shadow: 0px 2px 2px rgba(255, 255, 255, 0.4); 
`;

export const HomeButton = styled.button`
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
cursor:pointer;
`;
export const TextWrapper = styled.div`
display:flex;
flex-direction:column;
width:100%;
height:100%;
margin:240px;
background:rgba(0,0,0,0.3);
border-radius:20px;
`;