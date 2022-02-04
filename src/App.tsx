import React from 'react';
import styled from 'styled-components/native';

import AppleMap from './AppleMap';
import InitialLocation from './InitialLocation';
import MarkerOnMap from './MarkerOnMap';
import TrackingMapWithMarker from './TrackingMapWithMarker';
import TrackUserLocation from './TrackUserLocation';
import UserLocation from './UserLocation';

const Container = styled.View`
  flex: 1;
`;

const App = () => {
  return (
    <Container>
      <TrackUserLocation />
    </Container>
  );
};

export default App;
