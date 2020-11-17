import React, { useState } from 'react';
import { View, StyleSheet, Image } from "react-native";
import { Input, Button, Icon } from "react-native-elements";
import md5 from "md5";

//  Redux
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../redux/actions/authActions";

export default function LoginForm() {
  //  Redux
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.auth);

  const [email, setEmail] = useState("developer@perseo.tv");
  const [password, setPassword] = useState("dev");

  const onSubmit = () => {
    //  Set user data
    const userData = {
      user: email,
      pass: md5(password),
      device: "Android"
    };
    //  Call action to loging with user data
    dispatch(loginAction(userData))
  }

  return (
    <View style={styles.loginFormContainer}>
      <Input
        placeholder='Email'
        containerStyle={styles.inputForm}
        value="developer@perseo.tv"
        rightIcon={
          <Icon type='material-community' 
            name='at' 
            iconStyle={styles.inputIcon} 
          />}
      />
      <Input
        placeholder='Password'
        containerStyle={styles.inputForm}
        secureTextEntry={false}
        value="dev"
        rightIcon={
          <Icon
            type='material-community'
            name={true ? "eye-off-outline" : "eye-outline"}
            // iconStyle={styles.inputIcon}
          />
        }
      />
      <Button
        title='Login'
        containerStyle={styles.btnContainerLogin}
        buttonStyle={styles.btnLogin}
        onPress={onSubmit}
        loading={loading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loginFormContainer: {
    marginLeft: 20,
    marginRight: 20,
  }
});