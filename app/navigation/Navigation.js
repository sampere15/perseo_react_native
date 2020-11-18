import React, { useEffect } from "react";
import { Icon } from 'react-native-elements';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Loading from "../components/loading/Loading";
import {Global} from "../utils/global";
import tokenManager from "../utils/tokenManager";

//  Redux
import { useSelector, useDispatch } from "react-redux";
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
  const { downloading } = useSelector(state => state.media);
  // Recover token from storage
  let token = false;

  useEffect(() => {
    token = tokenManager.getTokenSecureStore();

    //  Let's download the data
    if(token) {
      dispatch(getFilesAction());
    }
  }, [auth]);

  if(downloading) {
    return <Loading isVisible={true} text={"Downloading data.."} />
  }

  //  Deep linking configuration
  const linkingConfig = {
    prefixes: ['exps://perseo_react_native.com'],
    config: {
      screens: {
        HomeStack: {
          screens: {
            mediadetails: 'mediadetails/:id'
          }
        }
      }
    }
  }

  return (
    <NavigationContainer linking={linkingConfig}>
    {/* Check if user is logged or not */}
    {token || auth
    ?
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