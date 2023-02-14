import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from 'styled-components'
import APIService from "../API/APIService";
import UserItem from "../components/UserItem";
import ConfirmDeletion from "../components/ConfirmDeletion";
import WBHeader from "../components/WBHeader";
import AuthContext from "../context/AuthContext";


const Container = styled.div`
  min-height: 950px;
  background-color: var(--front-color);
  padding-bottom: 50px;
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

const OfferRequestContainer = styled.div`
  margin-top: 30px;
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
  border-radius: 15px;
`

const OfferButton = styled.button`
  font-size: 19px;
  border-radius: 15px;
`

const RequestText = styled.p`
  margin-top: 10px;
`

const OfferContainer = styled.div`
  margin-top: 20px;
`

const DataContainer = styled.div`
  display: grid;
  grid-template-columns: 55px 1fr;
  grid-template-rows: 20px 20px 20px;
  row-gap: 15px;
`

const OwnerContainer = styled.div`
  margin-top: 35px;
  padding-left: 10px;
  display: flex;
  align-items: center;
`

const Name = styled.p`
  opacity: 0.6;
`

const Data = styled.span`
`

const DescriptionContainer = styled.div`
  margin-top: 20px;
`

const Description = styled.div`
  font-size: 15px;
  margin-top: 5px;
`

const EditDeleteContainer = styled.div`
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const DeleteButton = styled.button`
  color: #FF5050;
  width: 130px;
  height: 25px;
  font-size: 15px;
  background-color: white;
  border-radius: 15px;
  border: 2px solid #FF5050;

  &:hover{
    color: white;
    background-color: red;
    border-color: red;
  }
`


const AdDetail = () => {
  const navigate = useNavigate()
  const params = useParams()
  const { user } = useContext(AuthContext)
  const [ad, setAd] = useState(null)

  const activeStyle = {opacity: '0.4', boxShadow: 'var(--big-shadow)'}
  const [currentUserIsOwner, setCurrentUserAsOwner] = useState(false)
  const [requestIsActive, setRequestActive] = useState(false)
  const [leftButtonStyle, setLeftButtonStyle] = useState(activeStyle)
  const [rightButtonStyle, setRightButtonStyle] = useState({})
  const [modalIsActive, setModalActive] = useState(false)

  const handleCloseModalWindow = () => {
    setModalActive(false)
  }

  const handleDeleteAd = () => {
    APIService.deleteAd(ad?.slug)
      .then(status => {
        if (status == 204){
          navigate('/my-ads')
        }
      })
  }

  useEffect(() => {
    APIService.getAdDetails(params.slug).then(
      data => setAd(data))
  }, [params.slug])

  useEffect(() => {
    if (ad?.owner == user?.user_id){
      setCurrentUserAsOwner(true)
    }
  }, [ad])
  
  return (
    <Container>
      <WBHeader title={'Про объявление'}/>
      <Titles>{ ad?.book_title }</Titles>
      <ImgContainer>
        <Image src={ ad?.book_image }/>
        {/* <SmallImgContainer>
          <SmallImage src='https://i.ibb.co/S6qMxwr/jean.jpg'/>
          <SmallImage src='https://i.ibb.co/S6qMxwr/jean.jpg'/>
          <SmallImage src='https://i.ibb.co/S6qMxwr/jean.jpg'/>
        </SmallImgContainer> */}
      </ImgContainer>

      <OfferRequestContainer>
        <ButtonContainer>
          <RequestButton
            onClick={() => {
              setRequestActive(true);
              setLeftButtonStyle({})
              setRightButtonStyle(activeStyle)}}
            style={leftButtonStyle}
          >
            Взамен
          </RequestButton>
          <OfferButton
            onClick={() => {
              setRequestActive(false);
              setLeftButtonStyle(activeStyle)
              setRightButtonStyle({})}}
            style={rightButtonStyle}
          >
            Предлагаю
          </OfferButton>
        </ButtonContainer>
        {
        requestIsActive
        ?
        <RequestText>
          { ad?.requirements_text }
        </RequestText>
        :
        <OfferContainer>
          <DataContainer>
            <Name>Автор</Name><Data>{ ad?.book_author }</Data>
            <Name>Жанр</Name><Data>{ ad?.genre_title }</Data>
            <Name>ISBN</Name><Data>-</Data>
          </DataContainer>
          <DescriptionContainer>
            <Name>Описание</Name>
            <Description>
              { ad?.description ? ad?.description : 'Не указано' }
            </Description>
          </DescriptionContainer>
        </OfferContainer>
        }
      </OfferRequestContainer>

      <OwnerContainer>
        <Name>Владелец</Name>
        <UserItem user={
          {username: ad?.owner_username,
           avatar:   ad?.owner_avatar,
           link: currentUserIsOwner ? 'my-profile': `users/${ad?.owner_slug}`}}/>
      </OwnerContainer>
      <EditDeleteContainer>
        {/* <EditButton>Редактировать</EditButton> */}
        <DeleteButton
          onClick={() => setModalActive(true)}
        >
          Удалить
        </DeleteButton>
      </EditDeleteContainer>
      {
        modalIsActive
        ? <ConfirmDeletion
            handleClose={handleCloseModalWindow}
            handleDelete={handleDeleteAd}/>
        : <></>
      }
    </Container>
  )
};

export default AdDetail;
