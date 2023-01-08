import React from "react";
import styled from 'styled-components'


const Container = styled.div`
  height: 252px;
  border-radius: 10px;
  background-color: var(--front-color);
  box-shadow: var(--shadow);
  // &:hover {
  //   cursor: pointer;
  //   scale: 1.04;
  //   transition: 500ms;
  // }
`

const ImgContainer = styled.div`
  position: relative;
`

const UserAvatar = styled.img`
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
  return (
    <Container>
      <ImgContainer>
        <UserAvatar src='https://i.ibb.co/S6qMxwr/jean.jpg'/>
        <Date>31.12.2022</Date>
        <Image src='https://i.ibb.co/S6qMxwr/jean.jpg'/>
      </ImgContainer>
      <BottomContainer>
        <Titles>Второй меч, Бойцовский клуб</Titles>
      </BottomContainer>
    </Container>
  )
};

export default AdItem;
