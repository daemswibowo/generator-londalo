/**
 * Londalo Generator
 * For react navigation stack guide please visit:
 * https://reactnavigation.org/docs/stack-navigator/
 */

import React from 'react';
import {createStackNavigator, StackNavigationOptions} from "@react-navigation/stack";

const Stack = createStackNavigator();

type <%= name %>NavigationProps = {
  // put your props types here, such as navigation, route etc...
  // for more information please check this https://reactnavigation.org/docs/typescript/
}

export default function <%= name %>Navigation(props: <%= name %>NavigationProps) {

  const defaultOptions: StackNavigationOptions = {
    // put default navigation options
  }

  return <Stack.Navigator screenOptions={defaultOptions}>
    {/* Here put your screens component*/}
    <Stack.Screen name={'ScreenName'} options={{title: 'My Screen'}} component={MyScreenComponent} />
  </Stack.Navigator>
}
