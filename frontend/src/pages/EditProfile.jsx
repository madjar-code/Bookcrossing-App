import { useState, useEffect, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'
import APIService from "../API/APIService";
import AuthContext from "../context/AuthContext";
import WBHeader from "../components/WBHeader";


const Container = styled.div`
  min-height: 100vh;
  background-color: var(--front-color);
  padding-bottom: 75px;
`

const Form = styled.div`
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

const Uploader = styled.input`
  margin-top: 5px;
  position: relative;
  left: 50%;
  margin-left: -40px;
  border-radius: 20px;
  width: 80px;
  height: 80px;
  background-color: #E5E5E5;
  display: flex;
  align-items: center;
  justify-content: center;
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
  const { authTokens } = useContext(AuthContext)
  const [currentUser, setCurrentUser] = useState(null)
  const [avatar, setAvatar] = useState({})
  const fileInput = useRef();
  const navigate = useNavigate()

  const handleClick = () => {
    const file = fileInput.current.files[0]

    const newData = {
      username: currentUser.username,
      address: currentUser.address,
      description: currentUser.description
    }

    let formData = new FormData()
    formData.append('avatar', file)

    // APIService.postUserAvatar(formData, authTokens)
    APIService.putCurrentUser(newData, authTokens)
      .then(status => {if (status==200){
        navigate('/my-profile')
      }}
    )
  }

  useEffect(() => {
    APIService.getCurrentUser(authTokens)
      .then((data) => {
        setCurrentUser(data)
      })
  }, [authTokens])

  const handleChangeAvatar = () => {
    const file = fileInput.current.files[0]
    setAvatar({ name: file.name, url: URL.createObjectURL(file)})
  }

  return (
    <Container>
      <WBHeader title='Редактировать профиль'/>
      <Form>
        <Label>Аватарка</Label>
        <Uploader
          type='file'
          accept="image/png, image/jpeg"
          ref={fileInput}
          onChange={handleChangeAvatar}
        />
        <Input
          placeholder="Новый никнейм..."
          value={currentUser?.username}
          onChange={e => setCurrentUser({...currentUser, username: e.target.value})}
        />
        <Input
          placeholder="Новый адрес..."
          value={currentUser?.address}
          onChange={e => setCurrentUser({...currentUser, address: e.target.value})}/>
        <Label>Новое описание</Label>
        <Textarea
          placeholder="Напишите коротко о себе..."
          value={currentUser?.description}
          onChange={e => setCurrentUser({...currentUser, description: e.target.value})}/>
        <Button onClick={handleClick}>Сохранить!</Button>
      </Form>
    </Container>
  )
};

export default EditProfile;
