import React from "react";
import { View, StyleSheet } from "react-native";

import LoginForm from "../components/auth/LoginForm";
import LoginHeader from "../components/auth/LoginHeader";

export default function Login() {

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <LoginHeader />
      </View>
      <View style={styles.loginForm}>
        <LoginForm/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  headerView: {
    flex: 1,
    backgroundColor: "black",
  },
  loginForm: {
    flex: 2,
  }
});