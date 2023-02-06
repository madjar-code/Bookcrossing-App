import { useState, useEffect } from "react";
import styled from 'styled-components'
import AdItem from "../components/AdItem";
import HomeHeader from "../components/HomeHeader";
import APIService from "../API/APIService";
import { useAds } from "../hooks/useAds";


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
  const [ads, setAds] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const sortedAndSearchedAds = useAds(ads, filter.sort, filter.query)

  useEffect(() => {
    APIService.getAds()
    .then(data => setAds(data))
  }, [])

  return (
    <Container>
      <HomeHeader filter={filter} setFilter={setFilter}/>
      <FilterContainer>
        <Filter>
          <Select>
            <Option selected disabled>
              Интересующие жанры
            </Option>
            <Option >Все жанры</Option>
            <Option value="Фантастика">Фантастика</Option>
            <Option value="Роман">Роман</Option>
            <Option value="Публицистика">Публицистика</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <AdsContainer>
        {sortedAndSearchedAds.map((item, index) =>
         <AdItem item={item} key={index}/>)}
      </AdsContainer>
    </Container>
    
  )
};

export default Home;
