import React from "react";
import { View, StyleSheet } from "react-native";

import UserInfo from "../components/auth/UserInfo";
import Logout from "../components/auth/Logout";

export default function Account() {
  return (
    <View style={styles.container}>
      <View style={styles.userInfoContainer}>
        <UserInfo />
      </View>
      <View style={styles.logoutContainer}>
        <Logout />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  userInfoContainer: {
    flex: 2,
    flexDirection: "column",
  },
  logoutContainer: {
    flex: 1,
    flexDirection: "column",
  },
});