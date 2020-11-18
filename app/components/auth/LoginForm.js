import React, { useState } from 'react';
import { View, StyleSheet, Text } from "react-native";
import { Input, Button, Icon } from "react-native-elements";
import md5 from "md5";
import validate from "validate.js";
import { emailValidation, requiredValidation as passwordRequired } from "../../utils/validationConstraints";

//  Redux
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../redux/actions/authActions";

export default function LoginForm() {
  //  Redux
  const dispatch = useDispatch();
  const { loading, errorMessage } = useSelector(state => state.auth);
  //  Self
  const [email, setEmail] = useState("developer@perseo.tv");
  const [password, setPassword] = useState("dev");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = () => {
    //  Check validation
    const validationResult = validate({
      emailValidation: email,
      passwordRequired: password 
    }, {emailValidation, passwordRequired});

    setFormErrors(validationResult);
    //  If error, we dont continue
    if(validationResult) {
      return;
    }

    //  Set user data
    const userData = {
      user: email,
      pass: md5(password),
      device: "Android"
    };
    //  Call action to loging with user data
    dispatch(loginAction(userData));
  }

  return (
    <View style={styles.loginFormContainer}>
      <Input
        placeholder='Email'
        keyboardType="email-address"
        value={email}
        onChange={e => setEmail(e.nativeEvent.text)}
        rightIcon={
          <Icon type='material-community' 
            name='at' 
          />}
      />
      {formErrors && formErrors.emailValidation && <Text style={styles.loginError}>{formErrors.emailValidation[0]}</Text>}
      <Input
        placeholder='Password'
        secureTextEntry={!showPassword}
        value={password}
        onChange={e => setPassword(e.nativeEvent.text)}
        rightIcon={
          <Icon
            type='material-community'
            name={!showPassword ? "eye-off-outline" : "eye-outline"}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
      />
      {formErrors && formErrors.passwordRequired && <Text style={styles.loginError}>{formErrors.passwordRequired[0]}</Text>}
      <Button
        title='Login'
        containerStyle={styles.btnContainerLogin}
        buttonStyle={styles.btnLogin}
        onPress={onSubmit}
        loading={loading}
      />
      {errorMessage && <Text style={styles.loginError}>{errorMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  loginFormContainer: {
    // marginTop: 40,
    // marginLeft: 20,
    // marginRight: 20,
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 20,
  },
  loginError: {
    color: "red",
    fontWeight: "100",
    marginBottom: 10,
  }
});