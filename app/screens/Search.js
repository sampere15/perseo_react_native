import React,{ useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import MySearchBar from "../components/search/MySearchBar";
import SearchResult from "../components/search/SearchResult";

export default function Search({navigation}) {

  return (
    <ScrollView style={styles.container}>
      <MySearchBar />
      <View style={styles.resultContainer}>
        <SearchResult navigation={navigation}/>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    // backgroundColor: "red",
  },
  resultContainer: {
    flex: 1,
    // backgroundColor: "yellow",
  }
});