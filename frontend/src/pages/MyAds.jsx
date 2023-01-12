import React from "react";
import styled from 'styled-components'

import Header from "../components/Header";
import AdItem from "../components/AdItem";


const Container = styled.div`
  min-height: 100vh;
  padding-bottom: 50px;
`

const Label = styled.p`
  margin-top: 35px;
  font-size: 21px;
  text-align: center;
  opacity: 0.6;
  font-weight: var(--semi-bold);
`

const AdsContainer = styled.div`
  margin-top: 20px;
  display: grid;
  padding: 0 10px;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`


const MyAds = () => {
  return (
    <Container>
      <Header/>
      <Label>Ваши объявления</Label>
      <AdsContainer>
        <AdItem/>
        <AdItem/>
        <AdItem/>
        <AdItem/>
      </AdsContainer>
    </Container>
  )
};

export default MyAds;
