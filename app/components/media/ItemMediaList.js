import React from 'react'
import { View, Text, TouchableOpacity, TouchableHighlight, Touch, StyleSheet, ActivityIndicator, TouchableNativeFeedback} from 'react-native';
import { Card, Image } from "react-native-elements";

export default function ItemMediaList({navigation, item, height}) {
  //  Calculate the width for the given height
  const width = 9/16*height;

  const styles = StyleSheet.create({
    image: {
      height: "100%",
      width: width,
      borderRadius: 5,
      resizeMode: "cover",
      margin: 1,
    },
  });

  return (
    <TouchableOpacity 
      onPress={() => navigation.navigate("mediadetails", { itemId: item.id })}
    >
      <Image 
        source={{ uri: item.cover }}
        style={styles.image}
        PlaceholderContent={<ActivityIndicator />}
      />
    </TouchableOpacity>
  );
}