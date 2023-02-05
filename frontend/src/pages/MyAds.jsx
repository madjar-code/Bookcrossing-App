import { useState, useEffect, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'

import Header from "../components/Header";
import AdItem from "../components/AdItem";
import APIService from '../API/APIService';
import AuthContext from '../context/AuthContext';


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

const PlusAd = styled.div`
  padding-top: 60px;
  text-align: center;
  height: 252px;
  border-radius: 10px;
  background-color: #F5F5F5;
  font-size: 100px;
  box-shadow: var(--shadow);
  font-weight: 200;
  opacity: 0.6;
`


const MyAds = () => {
  const navigate = useNavigate()
  const { authTokens } = useContext(AuthContext)
  const [ads, setAds] = useState([])

  useEffect(() => {
    APIService.getMyAds(authTokens)
    .then(data => setAds(data))
  }, [])

  return (
    <Container>
      <Header/>
      <Label>Ваши объявления</Label>
      <AdsContainer>
        {ads.map((item, index) =>
         <AdItem item={item} key={index}/>)}
        <PlusAd onClick={() => navigate('/create-ad')}>
          +
        </PlusAd>
      </AdsContainer>
    </Container>
  )
};

export default MyAds;
