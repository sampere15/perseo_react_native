import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from "react-native-elements";

//  Redux
import { useSelector } from "react-redux";

export default function UserInfo() {
  const { user } = useSelector(state => state.media);

  return (
    <View style={styles.container}>
      <Avatar
        size="xlarge"
        rounded
        source={{
          uri: user.avatar,
        }}
      />
      <Text style={styles.name}>{user.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  name: {
    fontSize: 20,
  },
});
