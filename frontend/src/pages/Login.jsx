import React from "react";

import {
  useNavigate
} from 'react-router-dom'

import styled from 'styled-components'

import LoginBlock from "../components/LoginBlock";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Label = styled.div`
  text-align: center;
  margin-top: 40px;
  font-weight: var(--semi-bold);
`

const Link = styled.a`
  color: blue;
`


const Login = () => {

  let navigate = useNavigate()

  return (
    <Container>
      <LoginBlock>
      <Label>
        Нет аккаунта?{' '}
        <Link onClick={() => navigate('/register')}>
          Регистрация
        </Link>
      </Label>
      </LoginBlock>
    </Container>
  )
};

export default Login;
