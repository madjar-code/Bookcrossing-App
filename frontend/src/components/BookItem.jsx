import React from "react";
import BookIcon from '@mui/icons-material/Book';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';

import styled from 'styled-components'


const Container = styled.div`
  margin-top: 10px;
  height: 56px;
  background-color: #FFF;
  box-shadow: var(--shadow);
`

const Wrapper = styled.div`
  padding-left: 10px;
  display: grid;
  grid-template-columns: 30px 1fr 35px 40px;
  align-items: center;
  height: 56px;
`

const Title = styled.p`
  font-size: 18px;

  &:hover {
    cursor: pointer;
  }
`

const Icon = styled.div`
  opacity: 0.6;
  height: 23px;

  &:hover {
    opacity: 1;
    cursor: pointer;
    transition: 500ms;
  }
`


const BookItem = ({ title }) => {
  return (
    <Container>
      <Wrapper>
        <Icon><BookIcon/></Icon>
        <Title>{title}</Title>
        <Icon><EditIcon/></Icon>
        <Icon><ClearIcon/></Icon>
      </Wrapper>
    </Container>
  )
};

export default BookItem;
