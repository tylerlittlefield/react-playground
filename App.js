import React from 'react';
import { StyleSheet, View, TextInput, Alert } from 'react-native';
import { MapView } from 'expo';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/MaterialIcons';

// declare region outside of render
const region = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

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
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});

// render the map
export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={ region }
        />
        <MapView.Callout>
          <View style={ styles.calloutView }>
            <TextInput style={ styles.calloutSearch }
              placeholder={ "Search" }
            />
          </View>
        </MapView.Callout>
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item 
            buttonColor='#9b59b6' 
            title="New Tree" 
            onPress={() => {Alert.alert('You tapped the New Tree button!');}}>
              <Icon 
                name="add-location" 
                style={styles.actionButtonIcon} 
              />
          </ActionButton.Item>
          <ActionButton.Item 
            buttonColor='#3498db' 
            title="Edit Tree" 
            onPress={() => {Alert.alert('You tapped the Edit Tree button!');}}>
              <Icon 
                name="edit-location" 
                style={styles.actionButtonIcon} 
              />
          </ActionButton.Item>
          <ActionButton.Item 
            buttonColor='#1abc9c' 
            title="Select" 
            onPress={() => {Alert.alert('You tapped the Select button!');}}>
              <Icon 
                name="touch-app" 
                style={styles.actionButtonIcon} 
              />
          </ActionButton.Item>
          <ActionButton.Item 
            buttonColor='#1abc9c' 
            title="Sync" 
            onPress={() => {Alert.alert('You tapped the Sync button!');}}>
              <Icon 
                name="sync" 
                style={styles.actionButtonIcon} 
              />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  }
}
