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
            buttonColor='#00695C' 
            title="Search" 
            onPress={() => {Alert.alert('You tapped the Search button!');}}>
              <Icon 
                name="search" 
                style={styles.actionButtonIcon} 
              />
          </ActionButton.Item>
          <ActionButton.Item 
            buttonColor='#00796B' 
            title="New Marker" 
            onPress={() => {Alert.alert('You tapped the New Marker button!');}}>
              <Icon 
                name="add-location" 
                style={styles.actionButtonIcon} 
              />
          </ActionButton.Item>
          <ActionButton.Item 
            buttonColor='#00897B' 
            title="Edit Marker" 
            onPress={() => {Alert.alert('You tapped the Edit Marker button!');}}>
              <Icon 
                name="edit-location" 
                style={styles.actionButtonIcon} 
              />
          </ActionButton.Item>
          <ActionButton.Item 
            buttonColor='#009688' 
            title="Select Marker" 
            onPress={() => {Alert.alert('You tapped the Select Marker button!');}}>
              <Icon 
                name="touch-app" 
                style={styles.actionButtonIcon} 
              />
          </ActionButton.Item>
          <ActionButton.Item 
            buttonColor='#26A69A' 
            title="Refresh" 
            onPress={() => {Alert.alert('You tapped the Refresh button!');}}>
              <Icon 
                name="refresh" 
                style={styles.actionButtonIcon} 
              />
          </ActionButton.Item>
          <ActionButton.Item 
            buttonColor='#4DB6AC' 
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
