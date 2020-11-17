import React, { useState } from "react";
import { Icon } from 'react-native-elements';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//  Redux
import { useSelector } from "react-redux";

import manageToken from "../utils/manageToken";

//  Import stacks
import HomeStack from "./stacks/HomeStack";
import FavsStack from "./stacks/FavsStack";
import SearchStack from "./stacks/SearchStack";
import AccountStack from "./stacks/AccountStack";

import Login from "../screens/Login";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  //  Recover auth from redux
  const { auth } = useSelector(state => state.auth);
  // Recover token from storage
  const token = manageToken.getTokenSecureStore();

  // console.log(auth);
  // cons token = await manageToken.getTokenSecureStore();

  return (
    <NavigationContainer>
    {/* Check if user is logged or not */}
    {token || auth
    ?
      <Tab.Navigator
        initialRouteName="HomeStack"
        tabBarOptions={{
          inactiveTintColor: "#646464",
          activeTintColor: "#B31E1E"
        }}
        screenOptions={({ route }) => ({
          //  Recuperamos la prop color del tabBarIcon mediante destructuring y se lo pasamos por parámetro a la funcion que hemos creado
          tabBarIcon: ({ color }) => screenOptions(route, color),
        })}
      >
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{ title: "Home" }}
        />
        <Tab.Screen
          name="FavsStack"
          component={FavsStack}
          options={{ title: "Favs" }}
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
    :
      <Login />
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
    case "FavsStack":
      iconName = "star-outline";
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