import React, { Component } from 'react';
import { MapView } from 'expo';

// declare region outside of render
const region = {
  latitude: 40.7554,
  longitude: -73.9852,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

class MainMap extends Component {
  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={ region }
      />
    );
  }
}
  
export default MainMap;