import React from 'react';
import { NavLink } from "react-router-dom";
import { ABOUT, HOME } from '../../../routing/routes';
import styled from "styled-components";
import logo from "../../../assets/images/logosSvg/logo-no-background.svg"
import { useLocation } from "react-router-dom";

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
const NavWrapper = styled.ul`
  display:flex;
  justify-content:center;
  list-style:none;
`;
const NavItem = styled.li`
  margin:48px;
  cursor:pointer;
  font-weight:800;
  text-shadow: 0px 2px 2px rgba(255, 255, 255, 0.4); 
  &:hover {
    text-decoration: underline;
}
  &::after {
    text-decoration: underline;
    color:white
  }
`;

const Logo = styled.img`
  width:200px;
`;

export function NavigationBar() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <Styled>
     <NavLink to={HOME}><Logo src={logo} alt={'knownet logo'} /></NavLink> 
      <NavWrapper>
      <NavItem>Login</NavItem>
      <NavItem><NavLink  className={
                    splitLocation[1] === "" ? "active nav-link" : "nav-link"
                  } to={ABOUT}>About</NavLink></NavItem>
      <NavItem>Popular</NavItem>
      <NavItem>News</NavItem>
      </NavWrapper>
    </Styled>
  );
}