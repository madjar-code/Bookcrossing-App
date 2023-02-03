import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import AuthContext from '../context/AuthContext';


const Wrapper = styled.div`
  width: 355px;
  height: ${props => props.height};
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

const ErrorMessage = styled.p`
  margin-top: -3px;
  margin-left: 21px;
  font-size: 12px;
  font-weight: 600;
  color: red;
`


const LoginBlock = (props) => {
  let { loginUser } = useContext(AuthContext)
  let [credentials, setCredentials] = useState(
    {email: '', password: ''}
  )

  let [valid, setValid] = useState(true)

  const navigate = useNavigate()

  const handleEmailChange = (e) => {
    setCredentials({...credentials, email: e.target.value })
  }

  const handlePasswordChange = (e) => {
    setCredentials({ ...credentials, password: e.target.value })
  }

  const handleClick = () => {
    setValid(true)
    loginUser(credentials).then(
      code => {
        if (code === 200) {
          setTimeout(() => navigate('/my-profile'), 1000)
        }
        else {
          setValid(false)
        }
      }
    )
  }

  return (
    <Wrapper height={valid ? '235px': '245px'}>
      <Title>Вход</Title>
      <Form>
        <Input
          placeholder="Почта..."
          onChange={(e) => handleEmailChange(e)}/>
        <Input
          placeholder="Пароль..." type="password"
          onChange={(e) => handlePasswordChange(e)}/>
        {
          valid ? <></> : <ErrorMessage>Неверный логин или пароль</ErrorMessage>
        }
        <Button onClick={handleClick}>Войти!</Button>
      </Form>
      {props.children}
    </Wrapper>
  )
};

export default LoginBlock;
