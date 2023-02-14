import { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import scissors from '../assets/images/ConfirmDeletion.svg'
import cross from '../assets/images/Cross.svg'


const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Container = styled.div`
  position: relative;
  width: 303px;
  height: 250px;
  border-radius: 20px;
  background-color: white;
`

const CloseIcon = styled.img`
  position: absolute;
  right: 7.5px;
  top: 7.5px;
`

const Label = styled.p`
  margin-top: 18px;
  margin-left: 16.5px;
  width: 270px;
  font-size: 17px;
  text-align: center;
`

const Image = styled.img`
  margin-top: 18px;
  margin-left: 89px;
`

const Button = styled.button`
  margin-top: 18px;
  margin-left: 72px;
  color: #FF5050;
  width: 150px;
  height: 30px;
  font-size: 17px;
  background-color: white;
  border-radius: 15px;
  border: 2px solid #FF5050;

  &:hover{
    color: white;
    background-color: red;
    border-color: red;
  }
`


const ConfirmDeletion = ({ handleClose, handleDelete }) => {

  return (
    <Background onClick={handleClose}>
      <Container onClick={e => e.stopPropagation()}>
        <CloseIcon
          src={cross}
          onClick={handleClose}
          />
        <Label>
          Вы действительно хотите
          удалить объявление?
        </Label>
        <Image src={scissors}/>
        <Button onClick={handleDelete}>
          Подтвердить
        </Button>
      </Container>
    </Background>
  )
};

export default ConfirmDeletion;
