import React from 'react';
import styled from "styled-components";

const Styled = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:flex-end;
  align-content:flex-end;
  color: white;
  font-size:24px;
  font-family: 'Life Savers', cursive;
  font-weight:700;
`;
const NavItem = styled.a`
  margin:48px;
  cursor:pointer;
  &:hover {
    text-decoration: underline;
}
`;

export function NavigationBar() {
  return (
    <Styled>
      <NavItem>Login</NavItem>
      <NavItem>About</NavItem>
      <NavItem>Contact</NavItem>
    </Styled>
  );
}