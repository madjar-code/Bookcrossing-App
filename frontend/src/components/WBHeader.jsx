import React from "react";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import styled from 'styled-components'


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
  position: absolute;
`

const Label = styled.div`
  width: 100%;
  text-align: center;
  font-weight: var(--medium);
  font-size: 22.5px;
  opacity: 0.7;
`


const WBHeader = ({ title }) => {
  return (
    <Container>
      <Wrapper>
        <Icon><ArrowBackIosIcon/></Icon>
        <Label>{ title }</Label>
      </Wrapper>
    </Container>
  )
};

export default WBHeader;
