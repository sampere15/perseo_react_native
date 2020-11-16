import React from "react";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";

import Favs from "../../screens/Favs";

const Stack = createStackNavigator();

const FavStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='favs'
        component={Favs} 
        options={{ title: "Favs" }} 
      />
    </Stack.Navigator>
  );
};

export default FavStack;
