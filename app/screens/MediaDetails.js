import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MediaDetails(props) {
  //  Extra the file id
  const {itemId} = props.route.params;

  
  
  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
      
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.mainInfo}>
          <Text>Title</Text>
          <Text>Votes</Text>
        </View>
        <View style={styles.restInfo}>
          <Text>Duration</Text>
          <Text>Range</Text>
          <Text>Section</Text>
        </View>
        <View style={styles.descriptionInfo}>
          <Text>Description</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  videoContainer: {
    flex: 1,
    backgroundColor: "orange",
  },
  infoContainer: {
    flex: 1,
    backgroundColor: "yellow",
    padding: 10
  },
  mainInfo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "purple",
  },
  restInfo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "green",
    flexDirection: "row",
  },
  descriptionInfo: {
    flex: 2,
    backgroundColor: "red",
  }
});