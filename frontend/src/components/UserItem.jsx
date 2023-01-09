import React from "react";

import styled from 'styled-components'


const Container = styled.div`
  margin-left: 15px;
  background-color: #FFF;
  padding: 5px 10px;
  border-radius: 10px;
  box-shadow: var(--shadow);
  display: flex;
  align-items: center;
`

const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
`

const Username = styled.p`
  margin-left: 10px;
  font-weight: var(--semi-bold);
`


const UserItem = ({ username }) => {
  return (
    <Container>
      <Avatar src='https://i.ibb.co/S6qMxwr/jean.jpg'/>
      <Username>{ username }</Username>
    </Container>
  )
};

export default UserItem;
