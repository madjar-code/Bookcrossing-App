import React from "react";
import styled from 'styled-components'
import UserItem from "../components/UserItem";
import WBHeader from "../components/WBHeader";


const Container = styled.div`
  min-height: 100vh;
  background-color: var(--front-color);
  padding-bottom: 75px;
`

const Titles = styled.p`
  margin-top: 20px;
  font-size: 19px;
  text-align: center;
`

const ImgContainer = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Image = styled.img`
  width: 275px;
  height: 320px;
  object-fit: cover;
`

const SmallImgContainer = styled.div`
  width: 275px;
  height: 50px;
  margin-top: 15px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 6.25px;
`

const SmallImage = styled.img`
  height: 50px;
  width: 100%;
  margin-right: 6px;
  object-fit: cover;
`

const OfferRequestContainer = styled.div`
  margin-top: 40px;
  padding: 0 10px;
`

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  height: 30px;
`

const RequestButton = styled.button`
  font-size: 19px;
  font-weight: var(--semi-bold);
`

const OfferButton = styled.button`
  opacity: 0.4;
  font-size: 19px;
  box-shadow: var(--shadow);
  border-radius: 15px;
`

const RequestText = styled.p`
  margin-top: 10px;
`

const OwnerContainer = styled.div`
  margin-top: 40px;
  padding-left: 10px;
  display: flex;
  align-items: center;
`

const Name = styled.p`
  opacity: 0.6;
`


const AdDetail = () => {
  return (
    <Container>
      <WBHeader title={'Про объявление'}/>
      <Titles>Остров, Long Shadow, Сдвиг</Titles>
      <ImgContainer>
        <Image src='https://i.ibb.co/S6qMxwr/jean.jpg'/>
        <SmallImgContainer>
          <SmallImage src='https://i.ibb.co/S6qMxwr/jean.jpg'/>
          <SmallImage src='https://i.ibb.co/S6qMxwr/jean.jpg'/>
          <SmallImage src='https://i.ibb.co/S6qMxwr/jean.jpg'/>
          <SmallImage src='https://i.ibb.co/S6qMxwr/jean.jpg'/>
          <SmallImage src='https://i.ibb.co/S6qMxwr/jean.jpg'/>
        </SmallImgContainer>
      </ImgContainer>

      <OfferRequestContainer>
        <ButtonContainer>
          <RequestButton>Взамен</RequestButton>
          <OfferButton>Предлагаю</OfferButton>
        </ButtonContainer>
        <RequestText>
          Lorem Ipsum is simply dummy
          text of the printing and typesetting
          industry. Lorem Ipsum has been
          the industry's standard dummy text
          ever since the 1500s, when an unknown
          printer took a galley of type and
          scrambled it to make a type specimen
        </RequestText>
      </OfferRequestContainer>
      <OwnerContainer>
        <Name>Владелец</Name>
        <UserItem username='Evan_3000'/>
      </OwnerContainer>
    </Container>
  )
};

export default AdDetail;
