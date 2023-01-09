import React from "react";
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
  return (
    <Container>
      <WBHeader title='Редактировать профиль'/>
      <Form>
        <Input placeholder="Новый никнейм..."/>
        <Input placeholder="Новый адрес..."/>
        <Label>Новое описание</Label>
        <Textarea placeholder="Напишите коротко о себе..."/>
        <Button>Сохранить!</Button>
      </Form>
    </Container>
  )
};

export default EditProfile;
