import React from "react";
import { ScrollView } from "react-native";

import LoginForm from "../components/auth/login/LoginForm";

export default function Login() {
  return (
    <ScrollView>
      <LoginForm />
    </ScrollView>
  );
};
