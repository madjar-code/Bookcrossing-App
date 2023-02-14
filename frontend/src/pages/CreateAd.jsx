import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'

import WBHeader from "../components/WBHeader";
import AddPhoto from "../assets/images/AddPhoto";
import APIService from "../API/APIService";
import AuthContext from "../context/AuthContext";


const Container = styled.div`
  min-height: 100vh;
  background-color: var(--front-color);
`

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 20px;
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

const Uploader = styled.div`
  margin-top: 25px;
  margin-bottom: 5px;
  border-radius: 20px;
  width: 80px;
  height: 80px;
  background-color: #E5E5E5;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Label = styled.p`
  margin-top: 25px;
  text-align: center;
  opacity: 0.6;
  font-size: 17px;
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
  margin-top: 25px;
  width: 150px;
  height: 25px;
  border-radius: 12.5px;
  box-shadow: var(--shadow);
`

const Select = styled.select`
  align-self: flex-start;
  margin-top: 20px;
  text-align: left;
  outline: none;
  width: 215px;
  height: 30px;
  padding-left: 2px;
  font-size: 17px;
  opacity: 0.6;
  border: 2px solid rgba(0, 0, 0, 0.4);
  border-radius: 5px;
`

const Option = styled.option``


const CreateAd = () => {
  const { user, authTokens } = useContext(AuthContext)
  const [genres, setGenres] = useState([])
  const [adCredentials, setAdCredentials] = useState({
    book_title: '',
    // book_image: '',
    // ISBN: '',
    book_author: '',
    book_genre: '',
    description: '',
    requirements_text: '',
    owner: user.user_id,
  })

  const navigate = useNavigate()

  const handleCreation = () => {
    APIService.createAd(adCredentials, authTokens)
      
    navigate('/my-ads')
  }

  useEffect(() => {
    APIService.getGenres()
      .then(data => setGenres(data))
  }, [])

  return (
    <Container>
      <WBHeader title='Создать объявление'/>
      <Form>
        <Input
          placeholder="Название книги..."
          value={adCredentials.book_title}
          onChange={e => setAdCredentials({...adCredentials, book_title: e.target.value})}/>
        <Uploader type='file'>
          <AddPhoto/>
        </Uploader>
        <Input
          placeholder="Автор книги..."
          value={adCredentials.book_author}
          onChange={e => setAdCredentials({...adCredentials, book_author: e.target.value})}/>
        <Input
          placeholder="ISBN..."
          value={adCredentials.ISBN}
          onChange={e => setAdCredentials({...adCredentials, ISBN: e.target.value})}/>
        <Select onChange={e => setAdCredentials({...adCredentials, book_genre: e.target.value})}>
          <Option selected disabled>
            Интересующие жанры
          </Option>
            {genres?.map((item, index) => (
              <Option key={index}
                value={item?.id}
                >
                {item?.name}
              </Option>
            ))}
        </Select>
        <Label>Что вы хотите взамен?</Label>
        <Textarea
          placeholder="Напишите о книгах или жанрах книг, которые вы хотите..."
          value={adCredentials.description}
          onChange={e => setAdCredentials({...adCredentials, description: e.target.value})}
        />
        <Label>Описание книги</Label>
        <Textarea
          placeholder="Опишите книгу или какие-то ньюансы обмена..."
          value={adCredentials.requirements_text}
          onChange={e => setAdCredentials({...adCredentials, requirements_text: e.target.value})}
        />
        <Button onClick={handleCreation}>Создать!</Button>
      </Form>
    </Container>
  )
};

export default CreateAd;
