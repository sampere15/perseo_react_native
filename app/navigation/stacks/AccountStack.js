import React from "react";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";

import Account from "../../screens/Account";

const Stack = createStackNavigator();

const AccountStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='account'
        component={Account} 
        options={{ title: "Account" }} 
      />
    </Stack.Navigator>
  );
};

export default AccountStack;
