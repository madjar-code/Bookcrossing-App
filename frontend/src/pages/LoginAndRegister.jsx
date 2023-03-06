import { useNavigate } from 'react-router-dom'

import styled from 'styled-components'
import LoginBlock from "../components/LoginBlock";
import RegisterBlock from '../components/RegisterBlock';


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Label = styled.h2`
  position: absolute;
  top: 50px;
  font-weight: 400;
  font-size: 35px;
  opacity: 0.7;
`

const Wrapper = styled.div`
  padding: 50px;
  opacity: 0.5;
  transition: 500ms;
  &:hover {
    opacity: 1;
  }
`


const LoginAndRegister = () => {

  return (
    <Container>
      <Label>
        Войдите или зарегистрируйтесь
      </Label>
      <Wrapper>
        <LoginBlock/>
      </Wrapper>      
      <Wrapper>
        <RegisterBlock/>
      </Wrapper>
    </Container>
  )
};

export default LoginAndRegister;
