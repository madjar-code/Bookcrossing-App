import { useNavigate } from 'react-router-dom'

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


const UserItem = ({ user }) => {
  const navigate = useNavigate()

  return (
    <Container onClick={() => navigate(`/${user?.link}`)}>
      <Avatar src={user?.avatar}/>
      <Username>{ user?.username }</Username>
    </Container>
  )
};

export default UserItem;
