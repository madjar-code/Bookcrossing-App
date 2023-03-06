import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import LogoutIcon from '@mui/icons-material/Logout';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';


const Container = styled.div`
  height: 60px;
  width: 100%;
  background-color: #FFF;
  box-shadow: var(--big-shadow);
  display: flex;
  justify-content: space-between;
`

const Logo = styled.h1`
  padding-top: 13.5px;
  padding-left: 40px;
  font-size: 27px;
  font-weight: var(--semi-bold);
`

const Blue = styled.span`
  color: blue;
`

const Menu = styled.div`
  height: 60px;
  padding-right: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const MenuItem = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
  font-size: 18px;
`


const BigHeader = () => {
  const navigate = useNavigate()

  return (
    <Container>
      <Logo><Blue>Ex</Blue>Change</Logo>
      <Menu>
        <MenuItem onClick={() => navigate('/')}>
          <ManageSearchIcon fontSize="medium"/>
          Главная
        </MenuItem>
        <MenuItem onClick={() => navigate('/my-profile')}>
          <PermIdentityOutlinedIcon fontSize="medium"/>
          Профиль
        </MenuItem>
        <MenuItem>
          <LogoutIcon fontSize="medium"/>
          Выйти
        </MenuItem>
      </Menu>
    </Container>
  )
};

export default BigHeader;
