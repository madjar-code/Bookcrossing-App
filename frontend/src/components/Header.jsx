import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import WidgetsIcon from '@mui/icons-material/Widgets';
import CloseIcon from '@mui/icons-material/Close';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import LogoutIcon from '@mui/icons-material/Logout';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';

import AuthContext from '../context/AuthContext';


const Container = styled.div`
`

const Wrapper = styled.div`
  height: 50px;
  height: ${props => props.height};
  background-color: #FFF;
  box-shadow: var(--big-shadow);
  transition: 500ms;
`

const Logo = styled.h1`
  text-align: center;
  padding-top: 12px;
  font-size: 22.5px;
  font-weight: var(--semi-bold);
`

const Blue = styled.span`
  color: blue;
`

const Menu = styled.div`
  position: absolute;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 215px;
  border-radius: 0 0 15px 15px;
  background-color: var(--front-color);
  box-shadow: var(--big-shadow);
  transition: 500ms;
`

const MenuWrapper = styled.div`
  width: 230px;
  margin: 50px auto;
  display: grid;
  grid-template-columns: 50px 50px 50px;
  grid-template-rows: 50px 50px;
  column-gap: 40px;
  row-gap: 20px;
`

const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  text-align: center;
`

const IconStyle = {
  position: "absolute",
  left:'10px',
  top: '10px',
  fontSize: '30px'
}


const Header = (props) => {
  let { logoutUser } = useContext(AuthContext)
  const [toggle, showMenu] = useState(true)
  const navigate = useNavigate()

  const handleClick = () => {
    logoutUser()
    navigate('/login')
  }

  return (
    <Container>
      <Wrapper height={props.height}>
        <WidgetsIcon 
          onClick={() => showMenu(false)}
          style={IconStyle}/>
        <Logo><Blue>Ex</Blue>Change</Logo>
        <Menu style={{top: toggle ? '-225px' : '0'}}>
          <CloseIcon
            onClick={() => showMenu(true)}
            style={IconStyle}/>
          <MenuWrapper>
            <MenuItem onClick={() => navigate('/')}>
              <ManageSearchIcon fontSize="large"/>
              Главная
            </MenuItem>
            <MenuItem onClick={() => navigate('/my-profile')}>
              <PermIdentityOutlinedIcon fontSize="large"/>
              Профиль
            </MenuItem>
            <MenuItem onClick={() => navigate('/my-ads')}>
              <ViewListOutlinedIcon fontSize="large"/>
              Мои объявления
            </MenuItem>
            <MenuItem onClick={handleClick}>
              <LogoutIcon fontSize="large"/>
              Выйти
            </MenuItem>
          </MenuWrapper>
        </Menu>
        {props.children}
      </Wrapper>
    </Container>
  )
};

export default Header;
