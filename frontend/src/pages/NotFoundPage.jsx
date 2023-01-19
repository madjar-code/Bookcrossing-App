import React from "react";
import styled from 'styled-components'
import PageNotFound from '../assets/images/PageNotFound.png';


const Container = styled.div`
  min-height: 100vh;
  background-color: white;
`

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Image = styled.img`
  margin-top: -50px;
  width: 100%;
`

const Link = styled.a`
  text-decoration: underline;
  margin-top: 20px;
  color: blue;
`


const NotFoundPage = () => {
  return (
    <Container>
      <Wrapper>
        <Image src={PageNotFound}/>
        <Link href="/">На главную</Link>
      </Wrapper>
    </Container>
  )
};

export default NotFoundPage;
