import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { MapView } from 'expo';

// style sheet
const styles = StyleSheet.create({
  calloutView: {
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 6,
    width: "40%",
    marginLeft: "30%",
    marginRight: "30%",
    marginTop: 20
  },
  calloutSearch: {
    borderColor: "transparent",
    marginLeft: 10,
    width: "90%",
    marginRight: 10,
    height: 40,
    borderWidth: 0.0  
  },
});

// render the search bar
class SearchBar extends Component {
  render() {
    return (
      <MapView.Callout>
        <View style={ styles.calloutView }>
          <TextInput style={ styles.calloutSearch }
            placeholder={ "Search" }
          />
        </View>
      </MapView.Callout>
    );
  }
}

export default SearchBar;
