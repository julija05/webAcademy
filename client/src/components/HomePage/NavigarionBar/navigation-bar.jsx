import React from 'react';
import styled from "styled-components";
import logo from "../../../images/logosSvg/logo-no-background.svg"

const Styled = styled.div`
  display:flex;
  flex-direction:row;
  color: white;
  justify-content:space-around;
  font-size:25px;
  font-family: 'Life Savers', cursive;
  font-weight:700;
  background:rgba(0,0,0,0.3);
`;
const NavWrapper = styled.div`
  display:flex;
  justify-content:center;
`;
const NavItem = styled.a`
  margin:48px;
  cursor:pointer;
  font-weight:800;
  text-shadow: 0px 2px 2px rgba(255, 255, 255, 0.4); 
  &:hover {
    text-decoration: underline;
}
`;

const Logo = styled.img`
  width:200px;

`;

export function NavigationBar() {
  return (
    <Styled>
      <Logo src={logo} alt={'knownet logo'} />
      <NavWrapper>
      <NavItem>Login</NavItem>
      <NavItem>About</NavItem>
      <NavItem>Popular</NavItem>
      <NavItem>News</NavItem>
      </NavWrapper>
    </Styled>
  );
}