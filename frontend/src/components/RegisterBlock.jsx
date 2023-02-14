import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import styled from 'styled-components'
import AuthContext from "../context/AuthContext";


const Wrapper = styled.div`
  width: 355px;
  height: 350px;
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

const Form = styled.div`
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
  top: 10px;
  margin-left: -75px;
  color: var(--button-color);
  border: 2px solid var(--button-color);
  width: 150px;
  height: 25px;
  border-radius: 12.5px;
  font-size: 17px;
  &:hover {
    background-color: var(--button-color);
    color: #FFF;
  }
`

const ErrorMessage = styled.p`
  margin-top: -13.5px;
  margin-left: 21px;
  font-size: 12px;
  font-weight: 600;
  color: red;
`


const RegisterBlock = (props) => {
  const navigate = useNavigate()
  const { signupUser, loginUser } = useContext(AuthContext)
  const [credentials, setCredentials] = useState(
    {email: '', username: '', password: '', confirm_password: ''} 
  )
  const [errorCredentials, setErrorCredentials] = useState({})

  const handleClick = () => {
    setErrorCredentials({})
    signupUser(credentials).then(
      object => {
        if (object.status != 201){
          setErrorCredentials(object.data)
        }
        else {
          loginUser(credentials)
            .then(status =>
              {if (status == 200)
                {navigate('/my-profile')}
              }
    )}})}

  return (
    <Wrapper>
      <Title>Регистрация</Title>
      <Form>
        <Input
          placeholder="Никнейм..."
          onChange={(e) => setCredentials(
            {...credentials, username: e.target.value}
          )}/>
          {
            errorCredentials.username
            ? <ErrorMessage>{errorCredentials.username}</ErrorMessage>
            : <></>
          }
        <Input
          placeholder="Почта..."
          onChange={(e) => setCredentials(
            {...credentials, email: e.target.value}
          )}/>
          {
            errorCredentials.email
            ? <ErrorMessage>{errorCredentials.email}</ErrorMessage>
            : <></>
          }
        <Input
          placeholder="Пароль..." type="password"
          onChange={(e) => setCredentials(
            {...credentials, password: e.target.value}
          )}/>
          {
            errorCredentials.password
            ? <ErrorMessage>{errorCredentials.password}</ErrorMessage>
            : <></>
          }
        <Input
          placeholder="Подтверждение пароля..." type="password"
          onChange={(e) => setCredentials(
            {...credentials, confirm_password: e.target.value}
          )}/>
          {
            errorCredentials.confirm_password
            ? <ErrorMessage>{errorCredentials.confirm_password}</ErrorMessage>
            : <></>
          }
        <Button onClick={handleClick}>Регистрация</Button>
      </Form>
      {props.children}
    </Wrapper>
  )
};

export default RegisterBlock;
