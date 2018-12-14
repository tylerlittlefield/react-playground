import React from "react";
import { StyleSheet, Alert } from "react-native";
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Button = ({ onPress }) => (
<ActionButton buttonColor="rgba(231,76,60,1)">
        <ActionButton.Item 
          buttonColor='#00695C' 
          title="Search" 
          onPress={onPress}>
            <Icon 
              name="search" 
              style={styles.actionButtonIcon} 
            />
        </ActionButton.Item>
        <ActionButton.Item 
          buttonColor='#00796B' 
          title="Add" 
          onPress={() => {Alert.alert('You tapped the Add button!');}}>
            <Icon 
              name="add-location" 
              style={styles.actionButtonIcon} 
            />
        </ActionButton.Item>
        <ActionButton.Item 
          buttonColor='#00897B' 
          title="Edit" 
          onPress={() => {Alert.alert('You tapped the Edit button!');}}>
            <Icon 
              name="edit-location" 
              style={styles.actionButtonIcon} 
            />
        </ActionButton.Item>
        <ActionButton.Item 
          buttonColor='#009688' 
          title="Select" 
          onPress={() => {Alert.alert('You tapped the Select button!');}}>
            <Icon 
              name="touch-app" 
              style={styles.actionButtonIcon} 
            />
        </ActionButton.Item>
        <ActionButton.Item 
          buttonColor='#26A69A' 
          title="List" 
          onPress={onPress}>
            <Icon 
              name="list" 
              style={styles.actionButtonIcon} 
            />
        </ActionButton.Item>
        <ActionButton.Item 
          buttonColor='#4DB6AC' 
          title="Refresh" 
          onPress={() => {Alert.alert('You tapped the Refresh button!');}}>
            <Icon 
              name="refresh" 
              style={styles.actionButtonIcon} 
            />
        </ActionButton.Item>
        <ActionButton.Item 
          buttonColor='#80CBC4' 
          title="Sync" 
          onPress={() => {Alert.alert('You tapped the Sync button!');}}>
            <Icon 
              name="sync" 
              style={styles.actionButtonIcon} 
            />
        </ActionButton.Item>
      </ActionButton>
);

export default Button;

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});