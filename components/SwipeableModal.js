// src: https://github.com/TonioGarcia07/swipe

import React, { Fragment, Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import Modal from "react-native-modal";

import Button from "./Button";

class SwipeableModal extends Component {
  state = {
    visible: false
  };

  openModal = () => this.setState({ visible: true });
  closeModal = () => this.setState({ visible: false });

  render() {
    return (
      <Fragment>
        <Modal
          isVisible={this.state.visible}
          backdropOpacity={0.1}
          swipeDirection="left"
          onSwipe={this.closeModal}
          onBackdropPress={this.closeModal}
        >
          <View style={styles.modalContainer}>
            <Text style={styles.description}>
              {[
                "This is a swipeable modal from the 'react-native-modal' library.\n\n",
                "You can swipe it left to close it.\n\n",
                "You can also click on the backdrop to close the modal."
              ]}
            </Text>
          </View>
        </Modal>

        <Button
          color="#F7D426"
          label="Swipeable Modal"
          onPress={this.openModal}
        />
      </Fragment>
    );
  }
}

export default SwipeableModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 6,
    borderColor: "transparent",
    borderWidth: 2,
    marginHorizontal: 10,
    marginVertical: 80
  },
  description: {
    padding: 20,
    fontSize: 18
  }
});