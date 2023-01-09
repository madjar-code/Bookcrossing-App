import React from "react";
import styled from 'styled-components'

import WBHeader from "../components/WBHeader";
import UserItem from "../components/UserItem";


const Container = styled.div`
  min-height: 100vh;
  background-color: var(--front-color);
  padding-bottom: 75px;
`

const DataContainer = styled.div`
  padding: 25px 10px;
`

const Title = styled.p`
  text-align: center;
  font-size: 21px;
`

const Image = styled.img`
  position: relative;
  left: 50%;
  margin-left: -135px;
  margin-top: 15px;
  object-fit: cover;
  width: 270px;
  height: 320px;
`

const TextContainer = styled.div`
  margin-top: 35px;
  display: grid;
  grid-template-columns: 55px 1fr;
  row-gap: 12.5px;
`

const Name = styled.p`
  opacity: 0.6;
`

const Data = styled.p`
`

const DescriptionContainer = styled.div`
  margin-top: 22px;
`

const Description = styled.div`
  margin-top: 5px;
`

const OwnerContainer = styled.div`
  padding-left: 10px;
  display: flex;
  align-items: center;
`


const BookDetail = () => {
  return (
    <Container>
      <WBHeader title='О книге'/>

      <DataContainer>
        <Title>Остров</Title>
        <Image style={{marginBottom: '5px'}} src='https://i.ibb.co/S6qMxwr/jean.jpg'/>

        <TextContainer>
          <Name>Автор</Name><Data>Олдос Хаксли</Data>
          <Name>Жанр</Name><Data>Утопия</Data>
          <Name style={{paddingTop: '2px'}}>ISBN</Name><Data>435793</Data>
        </TextContainer>
        <DescriptionContainer>
          <Name>Описание</Name>
          <Description>
            Lorem Ipsum is simply dummy text
            of the printing and typesetting
            industry. Lorem Ipsum has been the
            industry's standard dummy text ever
            since the 1500s, when an unknown
            printer took a galley of type and
            scrambled it to make a type
            specimen book. It has survived not
            only five centuries, 
          </Description>
        </DescriptionContainer>
      </DataContainer>
      <OwnerContainer>
        <Name>Владелец</Name>
        <UserItem username='Evan_3000'/>
      </OwnerContainer>
    </Container>
  )
};

export default BookDetail;
