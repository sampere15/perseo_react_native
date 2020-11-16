import React, { useState } from 'react';
import { View, StyleSheet, Image } from "react-native";
import { Input, Button, Icon } from "react-native-elements";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.loginFormContainer}>
      <Input
        placeholder='Correo electrónico'
        containerStyle={styles.inputForm}
        value="developer@perseo.tv"
        rightIcon={
          <Icon type='material-community' 
            name='at' 
            iconStyle={styles.inputIcon} 
          />}
      />
      <Input
        placeholder='Contraseña'
        containerStyle={styles.inputForm}
        secureTextEntry={false}
        value="dev"
        rightIcon={
          <Icon
            type='material-community'
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            // iconStyle={styles.inputIcon}
          />
        }
      />
      <Button
        title='Login'
        containerStyle={styles.btnContainerLogin}
        buttonStyle={styles.btnLogin}
        onPress={onSubmit}
      />
    </View>
  );
};

const onSubmit = () => {
  console.log("submit");
}

const styles = StyleSheet.create({
  loginFormContainer: {
    marginLeft: 20,
    marginRight: 20,
  }
});