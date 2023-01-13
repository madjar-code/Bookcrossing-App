import React from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const Container = styled.div`
  height: 50px;
  box-shadow: var(--big-shadow);
`

const Wrapper = styled.div`
  padding: 0 10px;
  height: 50px;
  display: flex;
  align-items: center;
`

const Icon = styled.div`
  width: 15px;
`

const Label = styled.div`
  width: 100%;
  text-align: center;
  font-weight: var(--medium);
  font-size: 21px;
  opacity: 0.7;
`


const WBHeader = ({ title }) => {
  const navigate = useNavigate()

  const goBack = () => navigate(-1)

  return (
    <Container>
      <Wrapper>
        <Icon onClick={goBack}><ArrowBackIosIcon/></Icon>
        <Label>{ title }</Label>
      </Wrapper>
    </Container>
  )
};

export default WBHeader;
