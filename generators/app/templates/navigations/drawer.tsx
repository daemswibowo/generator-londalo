/**
 * Londalo Generator
 * For react navigation drawer guide please visit:
 * https://reactnavigation.org/docs/drawer-navigator/
 */

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

type <%= name %>NavigationProps = {
  // put your props types here, such as navigation, route etc...
  // for more information please check this https://reactnavigation.org/docs/typescript/
}

export default function <%= name %>Navigation(props: <%= name %>NavigationProps) {

  return <Drawer.Navigator>
    {/* Here put your screens component*/}
    <Drawer.Screen name={'ScreenName'} options={{title: 'My Screen'}} component={MyScreenComponent} />
  </Drawer.Navigator>
}
