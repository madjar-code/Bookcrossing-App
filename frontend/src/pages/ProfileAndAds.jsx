import BigHeader from '../components/BigHeader';
import styled from 'styled-components'
import BigFooter from '../components/BigFooter';


const Container = styled.div`
  width: 100vw;
  height: 100vh;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;  
`


const ProfileAndAds = () => {

  return (
    <Container>
      <Wrapper>
        <BigHeader/>
      </Wrapper>
      <BigFooter/>
    </Container>
  )
};

export default ProfileAndAds;
