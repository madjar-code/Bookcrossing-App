import React, { useState } from "react";
import styled from "styled-components";

import WidgetsIcon from '@mui/icons-material/Widgets';
import CloseIcon from '@mui/icons-material/Close';


const Container = styled.div`
  `

const Wrapper = styled.div`
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
  background-color: #FFF;
  box-shadow: var(--big-shadow);
  transition: 500ms;
`

const Logo = styled.h1`
  text-align: center;
  padding-top: 10px;
  font-size: 25px;
  font-weight: var(--semi-bold);
`

const Blue = styled.span`
  color: blue;
`

const NavList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`

const NavItem = styled.li`
  background-color: red;
`

const IconStyle = {
  position: "absolute",
  left:'10px',
  top: '10px',
  fontSize: '30px'
}



const Header = () => {
  const [toggle, showMenu] = useState(true)

  return (
    <Container>
      {
        toggle
        ?
        <Wrapper height={'50px'} borderRadius={'0'}>
          <WidgetsIcon 
            onClick={() => showMenu(false)}
            style={IconStyle}/>
          <Logo><Blue>Ex</Blue>Change</Logo>
        </Wrapper>
        :
        <Wrapper height={'215px'} borderRadius={'0 0 20px 20px'}>
          <CloseIcon
            onClick={() => showMenu(true)}
            style={IconStyle}/>
          <NavList>
            <NavItem>

            </NavItem>
          </NavList>
        </Wrapper>
      }
    </Container>
  )
};

export default Header;
