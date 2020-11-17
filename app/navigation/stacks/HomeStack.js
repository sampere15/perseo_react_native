import React from "react";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";

import Home from "../../screens/Home";
import MediaDetails from "../../screens/MediaDetails";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: "horizontal",
        }}
        initialRouteName="MyZampas"
      >
      <Stack.Screen 
        name='home'
        component={Home} 
        options={{ title: "Home" }} 
      />
      <Stack.Screen 
        name='mediadetails'
        component={MediaDetails} 
        options={{
          title: "",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
