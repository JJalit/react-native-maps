import React from 'react';
import Styled from 'styled-components/native';
import MapView, {Marker} from 'react-native-maps';

const Container = Styled.View`
    flex: 1;
`;

const MarkerOnMap = () => {
  return (
    <Container>
      <MapView
        style={{flex: 1}}
        initialRegion={{
          latitude: 37.556864,
          longitude: 126.980968,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{latitude: 37.556864, longitude: 126.980968}}
          title="회사"
          description="회현 사무실"
        />
      </MapView>
    </Container>
  );
};

export default MarkerOnMap;
