import { useState, useEffect, useContext } from "react";
import APIService from "../API/APIService";
import AuthContext from "../context/AuthContext";
import styled from 'styled-components'
import WBHeader from "../components/WBHeader";


const Container = styled.div`
  min-height: 100vh;
  background-color: var(--front-color);
  padding-bottom: 75px;
`

const Form = styled.form`
  margin-top: 5px;
  padding: 0 20px;
`

const Input = styled.input`
  margin-top: 19px;
  width: 100%;
  border: none;
  outline: none;
  font-size: 17px;
  padding: 5px 9px;
  background-color: var(--input-color);
  border-radius: 5px;
  &:focus {
    transition: 200ms;
    box-shadow: var(--big-shadow);
  }
`

const Label = styled.p`
  margin-top: 24px;
  text-align: center;
  opacity: 0.6;
  font-size: 16px;
`

const Textarea = styled.textarea`
  margin-top: 5px;
  width: 100%;
  height: 100px;
  resize: none;
  border: none;
  outline: none;
  font-size: 15px;
  padding: 5px 9px;
  background-color: var(--input-color);
  border-radius: 5px;
  &:focus {
    transition: 200ms;
    box-shadow: var(--big-shadow);
  }
`

const Button = styled.button`
  position: relative;
  left: 50%;
  margin-left: -75px;
  margin-top: 25px;
  width: 150px;
  height: 25px;
  border-radius: 12.5px;
  box-shadow: var(--shadow);
`


const EditProfile = () => {
  let { authTokens } = useContext(AuthContext)

  let [currentUser, setCurrentUser] = useState(null)
  let [newData, setNewData] = useState({
    username: '',
    address: '',
  })

  useEffect(() => {
    APIService.getCurrentUser(authTokens)
      .then((data) => {
        setCurrentUser(data)
      })
  }, [authTokens])

  return (
    <Container>
      <WBHeader title='Редактировать профиль'/>
      <Form>
        <Input
          placeholder="Новый никнейм..."
          value={newData.username}
          onChange={e => setNewData({...newData, username: e.target.value})}
        />
        <Input
          placeholder="Новый адрес..."
          value={newData.address}
          onChange={e => setNewData({...newData, address: e.target.value})}/>
        <Label>Новое описание</Label>
        <Textarea placeholder="Напишите коротко о себе..."/>
        <Button>Сохранить!</Button>
      </Form>
    </Container>
  )
};

export default EditProfile;
