import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from 'styled-components'

import FeedIcon from '@mui/icons-material/Feed';
import DefaultImage from '../assets/images/default-image.jpg'
import Header from "../components/Header";
import APIService from "../API/APIService";
import AuthContext from "../context/AuthContext";


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

  &:hover {
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
  }
`


const Profile = () => {
  const params = useParams()

  const { authTokens } = useContext(AuthContext)
  const [user, setUser] = useState(null)
  const [isCurrentUser, setCurrentUser] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    // console.log(params.slug == undefined)
    if (params.slug != undefined) {
      APIService.getOneUser(params.slug)
      .then((data) => {
        setUser(data)
        setCurrentUser(false)
      })
    } else {
      APIService.getCurrentUser(authTokens)
      .then((data) => {
        setUser(data)
        setCurrentUser(true)
      })
    }
  }, [authTokens])

  return (
    <Container>
      <Header/>
      <AvatarContainer>
        <Avatar src={
          user?.avatar
          ? user?.avatar
          : DefaultImage}/>
        <Label>{ user?.username }</Label>
        <AmountContainer>
          <Ads>{ user?.number_of_ads }<FeedIcon/></Ads>
        </AmountContainer>
      </AvatarContainer>
      <InfoContainer>
        <InfoItem>Адрес, город</InfoItem>
        <Text>
          {
            user?.address
            ? user?.address
            : 'Не указано. Укажите информацию, нажав на кнопку "изменить"'
          }
        </Text>
        <InfoItem>Описание</InfoItem>
        <Text>
          {
            user?.description
            ? user?.description
            : 'Не указано.'
          }
        </Text>
        <InfoItem>Контакты</InfoItem>
        <ContactContainer>
          <ContactItem>
            { user?.email }
          </ContactItem>
        </ContactContainer>
      </InfoContainer>
      <BottomContainer>
        <SmallLabel>**На сайте с { user?.creation_date }</SmallLabel>
        {
          isCurrentUser
          ? <ChangeButton onClick={() => navigate('/edit-profile')}>Изменить</ChangeButton>
          : <></>
        }
      </BottomContainer>  
    </Container>
  )
};

export default Profile;
