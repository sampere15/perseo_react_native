import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, Button } from "react-native";
import { Icon } from 'react-native-elements';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Global} from "../utils/global";
import tokenManager from "../utils/tokenManager";

//  Redux
import { useSelector, useDispatch } from "react-redux";
import { verifyToken, logoutAction } from "../redux/actions/authActions";
import { getFilesAction } from "../redux/actions/mediaActions";

//  Import stacks
import HomeStack from "./stacks/HomeStack";
import SearchStack from "./stacks/SearchStack";
import AccountStack from "./stacks/AccountStack";

import Login from "../screens/Login";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  //  Recover auth from redux
  const dispatch = useDispatch();
  const { auth } = useSelector(state => state.auth);
  const [gettingToken, setGettingToken] = useState(null);

  useEffect(() => {
    if(!auth) {
      console.log("no auth");
      setGettingToken(true);
      tokenManager.getTokenSecureStore()
        .then(token => {
          setGettingToken(false);
          if(token !== null) {
            console.log("verifying stored token");
            dispatch(verifyToken(token));
          }
          else {
            console.log("token null");
          }
        })
        .catch( error => {
          console.log("Error show Toast");
        })
    } 
    else {
      console.log("downloading files");
      //  Download files first time app starts
      dispatch(getFilesAction());
    }
  }, [auth]);

  if(gettingToken) {
    return(
      <View style={{flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
        <ActivityIndicator size="large" color={Global.corporativeColor} />
      </View>
    );
  }

  return (
    <NavigationContainer>
    {!auth ?
      <Login />
    :
      <Tab.Navigator
        initialRouteName="HomeStack"
        tabBarOptions={{
          inactiveTintColor: "#646464",
          activeTintColor: Global.corporativeColor,
          keyboardHidesTabBar: true,
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color),
        })}
      >
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{ title: "Home" }}
        />
        <Tab.Screen
          name="SearchStack"
          component={SearchStack}
          options={{ title: "Search" }}
        />
        <Tab.Screen
          name="AccountStack"
          component={AccountStack}
          options={{ title: "Account" }}
        />
      </Tab.Navigator>
    }
    </NavigationContainer>
  );
}

function screenOptions(route, color) {
  let iconName;
  //  Configure the differents icons for the differents tabs
  switch (route.name) {
    case "HomeStack":
      iconName = "compass-outline";
      break;
    case "SearchStack":
      iconName = "magnify";
      break;
    case "AccountStack":
      iconName = "account";
        break;
  }

  return (
      <Icon type="material-community" name={iconName} size={22} color={color} />
  );
}