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
      resizeMode: "contain",
      margin: 1,
    }
  });

  return (
    <TouchableOpacity 
      style={styles.cardContainer}
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

// export default function ItemMediaList({item}) {

//   return (
//     <TouchableHighlight style={styles.cardContainer}>
//       <Image 
//         source={{ uri: item.cover }}
//         style={styles.image}
//         resizeMode={"contain"}
//         PlaceholderContent={<ActivityIndicator />}
//       />
//     </TouchableHighlight>
//   );
// }

// const styles = StyleSheet.create({
//   cardContainer: {
//     margin: 2,
//     padding: 0,
//     width: 100,
//     // height: "100",
//     backgroundColor: "orange"
//   },

//   image: {
//     height: "100%",
//     borderRadius: 5,
//   }
// });