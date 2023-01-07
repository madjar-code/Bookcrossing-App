import React from "react";
import styled from 'styled-components'
import AddIcon from '@mui/icons-material/Add';

import Header from "../components/Header";
import BookItem from "../components/BookItem";


const Container = styled.div`
`

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--front-color);
  margin-top: 30px;
  height: 45px;
  box-shadow: var(--shadow);
`

const Avatar = styled.img`
  margin-left: 13px;
  float: left;
  width: 39px;
  height: 39px;
  object-fit: cover;
  border-radius: 50%;

  &:hover {
    cursor: pointer;
    scale: 1.15;
    transition: 500ms;
  }
`

const Username = styled.p`
  margin-left: 13px;
  font-size: 17px;
  font-weight: var(--semi-bold);

  &:hover {
    cursor: pointer;
    scale: 1.1;
    transition: 500ms;
  }
`

const Label = styled.p`
  margin-top: 40px;
  opacity: 0.7;
  font-size: 21px;
  text-align: center;
  font-weight: var(--semi-bold);
`

const BookContaner = styled.div`
  padding: 0 5px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Button = styled.button`
  margin: 10px auto;
  height: 22.5px;
  width: 60px;
  background-color: var(--front-color);
  box-shadow: var(--shadow);
  border-radius: 13.75px;

  &:hover {
    cursor: pointer;
    transition: 500ms;
    scale: 1.15;
  }
`


const BookStorage = () => {
  return (
    <Container>
      <Header/>
      <UserContainer>
        <Avatar src='https://i.ibb.co/S6qMxwr/jean.jpg'/>
        <Username>Evan_3000</Username>
      </UserContainer>

      <Label>Книги пользователя</Label>
      <BookContaner>
        <BookItem title='Бойцовский клуб'/>
        <BookItem title='История полковника Джека'/>
        <Button><AddIcon/></Button>
      </BookContaner>
    </Container>
  )
};

export default BookStorage;
