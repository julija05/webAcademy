import React from 'react';
import { NavLink  } from "react-router-dom";
import { ABOUT, HOME } from '../../../routing/routes';
import styled from "styled-components";
import logo from "../../../assets/images/logosSvg/logo-no-background.svg"
import { useLocation } from "react-router-dom";

const Styled = styled.div`
  display:flex;
  flex-direction:row;
  color: black;
  justify-content:space-around;
  align-items:center;
  font-size:25px;
  font-family: 'Montserrat', sans-serif;
  font-weight:700;
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

  a{
    text-decoration:none;
    color:black;
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
      <NavItem><NavLink  activeStyle={{textDecoration: "none",color: "black"}} className={
                    splitLocation[1] === "" ? "active nav-link" : "nav-link"
                  } to={ABOUT} exact>About</NavLink></NavItem>
      <NavItem>Popular</NavItem>
      <NavItem>News</NavItem>
      </NavWrapper>
    </Styled>
  );
}