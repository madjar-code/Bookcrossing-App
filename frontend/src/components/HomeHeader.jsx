import React from "react";
import styled from 'styled-components'

import Header from "./Header";


const SearchInput = styled.input`
  margin-top: 18px;
  margin-left: 5%;
  width: 90%;
  padding: 5px 9px;
  border-radius: 10px;
  border: none;
  outline: none;
  font-size: 17px;
  background-color: var(--input-color);
`

const HomeHeader = () => {
  return (
    <Header height='100px'>
      <SearchInput placeholder="Поиск..."></SearchInput>
    </Header>
  )
};

export default HomeHeader;
