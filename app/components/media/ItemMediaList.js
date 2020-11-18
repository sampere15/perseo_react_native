import React from 'react'
import { TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { Image } from "react-native-elements";
import { Global } from "../../utils/global";
import FavIcon from "./FavIcon";

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
        PlaceholderContent={<ActivityIndicator size="large" color={Global.corporativeColor} />}
      />
      <FavIcon 
        item={item}
      />
    </TouchableOpacity>
  );
}