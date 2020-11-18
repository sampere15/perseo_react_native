import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'

export default function ResultList() {
  const mock = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <View style={styles.list}>
      <Text>1</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  // container: {
  //   // flex: 1,
  //   height: "100%",
  //   backgroundColor: "orange",
  //   flexDirection: "column",
  // },
  list: {
    flex: 1,
    height: "100%",
    backgroundColor: "yellow",
    flexDirection: "row"
  }
});
