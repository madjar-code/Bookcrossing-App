import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'


const Container = styled.div`
  height: 252px;
  border-radius: 10px;
  background-color: var(--front-color);
  box-shadow: var(--shadow);
`

const ImgContainer = styled.div`
  position: relative;
`

const UserAvatar = styled.img`
  pointer-events: none;
  position: absolute;
  top: 5px;
  left: 5px;
  box-shadow: var(--shadow);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
`

const Date = styled.span`
  position: absolute;
  top: 5px;
  right: 7px;
  font-size: 13px;
`

const Image = styled.img`
  width: 100%;
  height: 203px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`

const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  height: 41px;
`

const Titles = styled.div`
  text-align: center;
  font-size: 15px;
  width: 100%;
`


const AdItem = ({ item }) => {
  const navigate = useNavigate()

  return (
    <Container onClick={() => navigate(`/ads/${item?.slug}`)}>
      <ImgContainer>
        <UserAvatar
          src={item?.owner_avatar}/>
        <Date>{item?.creation_date}</Date>
        <Image src={item?.book_image}/>
      </ImgContainer>
      <BottomContainer>
        <Titles>{item?.book_title}</Titles>
      </BottomContainer>
    </Container>
  )
};

export default AdItem;
