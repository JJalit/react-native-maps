import React from 'react';
import styled from 'styled-components/native';

import AppleMap from './AppleMap';

const Container = styled.View`
  flex: 1;
`;

const App = () => {
  return (
    <Container>
      <AppleMap />
    </Container>
  );
};

export default App;
