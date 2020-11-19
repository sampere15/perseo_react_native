import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { Overlay } from "react-native-elements";
import { Global } from "../../utils/global";

export default function LoadingScreen({ isVisible, text }) {
  return (
    <View style={styles.view}>
      <ActivityIndicator size="large" color="#000" />
      {text && <Text style={styles.text}>{text}</Text>}
    </View>
  );
}

LoadingScreen.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  text: PropTypes.string
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  text: {
    color: "#000",
    textTransform: "uppercase",
    marginTop: 10
  }
});