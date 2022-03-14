import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import Categories from './screens/Categories';
import Category from './screens/Category';
import Cart from './screens/Cart';
import Orders from './screens/Orders';
import Settings from './screens/Settings';

export function Tab1() {
  const Stack = createStackNavigator();
  return(
    <Stack.Navigator>
      <Stack.Screen name="Categories" component={Categories} />    
      <Stack.Screen name="Category" component={Category} />
    </Stack.Navigator>
  );
}

export function Tab2() {
  const Stack = createStackNavigator();
  return(
    <Stack.Navigator initialRouteName="Cart">
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
}

export function Tab3() {
  const Stack = createStackNavigator();
  return(
    <Stack.Navigator>
      <Stack.Screen name="s3" component={Orders} />
    </Stack.Navigator>
  );
}

export function Tab4() {
  const Stack = createStackNavigator();
  return(
    <Stack.Navigator>
      <Stack.Screen name="s4" component={Settings} />
    </Stack.Navigator>
  );
}