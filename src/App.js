import React, { useState } from 'react';
import styled from 'styled-components';
import { VelInput, Slider, Image } from './components';
import star from './assets/images/star-small.png';
import { SMALL_SIZE } from './constants';

const App = () => {
  const [vel, setVel] = useState(0.0);
  return (
    <Container>
      <Image src={star} vel={vel} />
      <InputSection>
        <VelInput vel={vel} setVel={setVel} />
        <Slider vel={vel} setVel={setVel} />
      </InputSection>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const InputSection = styled.div`
  display: flex;

  @media (max-width: ${SMALL_SIZE}) {
    flex-direction: column;
  }
`;

export default App;
