import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function LoginHeader() {
  return (
    <View style={styles.container}>
      {/* <Text>Hola mundo</Text> */}
      <Image 
        source={require("../../../assets/img/perseotv.png")}
        // source={{uri: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQujAu6RsAWa1Wd-jdlI5ScYSt6-qAGjX8sGGmkHdesGK5LXQOv" }}
        style={styles.imageLogo}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderColor: "green",
    // borderWidth: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  imageLogo: {
    // height: "100%",
    // height: 100,
    // width: 100,
    // width: 200,
    width: "80%",
    // borderRadius: 5,
    resizeMode: "contain",
    // margin: 1,
    // margin: 10,
  }
});
