import React from "react";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";

import Search from "../../screens/Search";
import MediaDetails from "../../screens/MediaDetails";

const Stack = createStackNavigator();

const SearchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='search'
        component={Search} 
        options={{ title: "Search" }} 
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

export default SearchStack;
