import React from "react";
import styled from 'styled-components'
import AdItem from "../components/AdItem";

import HomeHeader from "../components/HomeHeader";


const Container = styled.div`
  min-height: 100vh;
  padding-bottom: 50px;
`

const FilterContainer = styled.div`
  margin-top: 20px;
`

const Filter = styled.div`
  display: flex;
  justify-content: center;
`

const Select = styled.select`
  text-align: center;
  outline: none;
  font-size: 16px;
  border: 2px solid rgba(0, 0, 0, 0.4);
  border-radius: 5px;
`

const Option = styled.option``

const AdsContainer = styled.div`
  margin-top: 35px;
  display: grid;
  padding: 0 10px;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`


const Home = () => {
  return (
    <Container>
      <HomeHeader/>
      <FilterContainer>
        <Filter>
          <Select>
            <Option selected disabled>
              Интересующие жанры
            </Option>
            <Option>Все жанры</Option>
            <Option>Фантастика</Option>
            <Option>Роман</Option>
            <Option>Публицистика</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <AdsContainer>
        <AdItem/>
        <AdItem/>
        <AdItem/>
        <AdItem/>
      </AdsContainer>
    </Container>
    
  )
};

export default Home;
