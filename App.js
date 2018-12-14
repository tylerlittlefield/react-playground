import React, { Component } from 'react';
import { View } from 'react-native';

// import components
import { ToolButtons, SearchBar, MainMap, SwipeableModal } from './components';

// render the map
export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MainMap/>
        <SearchBar/>
        <SwipeableModal/>
      </View>
    );
  }
}
