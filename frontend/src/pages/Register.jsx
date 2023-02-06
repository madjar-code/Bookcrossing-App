import React from "react";

import {
  useNavigate
} from 'react-router-dom'

import styled from 'styled-components'

import RegisterBlock from "../components/RegisterBlock";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Label = styled.div`
  text-align: center;
  margin-top: 35px;
  font-weight: var(--semi-bold);
`

const Link = styled.a`
  color: blue;
`


const Register = () => {

  let navigate = useNavigate()

  return (
    <Container>
      <RegisterBlock>
      <Label>
        Есть аккаунт?{' '}
        <Link onClick={() => navigate('/login')}>
          Вход
        </Link>
      </Label>
      </RegisterBlock>
    </Container>
  )
};

export default Register;
