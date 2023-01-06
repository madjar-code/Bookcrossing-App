import React from "react";

import styled from 'styled-components'


const Wrapper = styled.div`
  width: 355px;
  height: 235px;
  padding-top: 18px;
  background-color: var(--front-color);
  border-radius: 20px;
  box-shadow: var(--shadow);
`

const Title = styled.h1`
  text-align: center;
  padding-bottom: 10px;
  font-weight: var(--semi-bold);
  font-size: 22px;
  color: var(--faded-text);
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  border: none;
  outline: none;
  font-size: 17px;
  padding: 9px;
  background-color: var(--input-color);
  border-radius: 5px;
  flex: 1;
  margin: 12px 18px;
  &:focus {
    box-shadow: var(--big-shadow);
  }
`

const Button = styled.button`
  position: relative;
  left: 50%;
  top: 15px;
  margin-left: -60px;
  color: var(--button-color);
  border: 2px solid var(--button-color);
  width: 120px;
  height: 25px;
  border-radius: 12.5px;
  font-size: 17px;
  &:hover {
    background-color: var(--button-color);
    color: #FFF;
  }
`


const LoginBlock = (props) => {  
  return (
    <Wrapper>
      <Title>Вход</Title>
      <Form>
        <Input placeholder="Почта..."/>
        <Input  placeholder="Пароль..."/>
        <Button>Войти!</Button>
      </Form>
      {props.children}
    </Wrapper>
  )
};

export default LoginBlock;
