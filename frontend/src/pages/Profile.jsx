import React from "react";

import styled from 'styled-components'
import Header from "../components/Header";

import FeedIcon from '@mui/icons-material/Feed';

const Container = styled.div`
  padding-bottom: 100px;
`

const AvatarContainer = styled.div`
  margin: 25px auto;
  display: flex;
  flex-direction: column;
  width: 125px;
`

const Avatar = styled.img`
  width: 125px;
  height: 125px;
  border-radius: 50%;
  object-fit: cover;
`

const Label = styled.p`
  margin-top: 15px;
  text-align: center;
  font-size: 19px;
  font-weight: var(--semi-bold);
`

const AmountContainer = styled.div`
  margin-top: 12.5px;
  display: flex;
  justify-content: center;
`

const Ads = styled.div`
  font-size: 25px;
`

const InfoContainer = styled.div`
  background-color: var(--front-color);
  margin: 0 10px;
  padding: 1px 15px;
  border-radius: 15px;
  box-shadow: var(--shadow);
`

const InfoItem = styled.p`
  margin-top: 14px;
  font-size: 17px;
  opacity: 0.6;
`

const Text = styled.div`
  margin-top: 5px;
  font-size: 15px;
`

const ContactContainer = styled.div`
  padding-bottom: 15px;
`

const ContactItem = styled.div`
  margin-top: 6px;
  font-size: 15px;
  font-weight: var(--semi-bold);
`

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const SmallLabel = styled.p`
  opacity: 0.5;
  margin: 5px 15px;
`

const ChangeButton = styled.button`
  width: 128px;
  height: 26px;
  border-radius: 10px;
  background-color: var(--front-color);
  box-shadow: var(--shadow);
  margin-top: 10px;
  margin-right: 10px;
`


const Profile = () => {
  return (
    <Container>
      <Header/>
      <AvatarContainer>
        <Avatar src='https://i.ibb.co/S6qMxwr/jean.jpg'/>
        <Label>Evan_3000</Label>
        <AmountContainer>
          <Ads>3<FeedIcon/></Ads>
        </AmountContainer>
      </AvatarContainer>
      <InfoContainer>
        <InfoItem>Адрес, город</InfoItem>
        <Text>Кишинев, Молдова</Text>
        <InfoItem>Описание</InfoItem>
        <Text>
          Lorem Ipsum is simply dummy text
          of the printing and typesetting industry.
          Lorem Ipsum has been the industry's
          standard dummy text ever since the
          1500s, when an unknown printer took
          a galley of type and scrambled it
          to make a type specimen book. It
          has survived not only five centuries,
        </Text>
        <InfoItem>Контакты</InfoItem>
        <ContactContainer>
          <ContactItem>
            madjar07
          </ContactItem>
          <ContactItem>
            admin@admin.com
          </ContactItem>
        </ContactContainer>
      </InfoContainer>
      <BottomContainer>
        <SmallLabel>**На сайте с 31.12.2022</SmallLabel>
        <ChangeButton>Изменить</ChangeButton>
      </BottomContainer>
    </Container>
  )
};

export default Profile;
