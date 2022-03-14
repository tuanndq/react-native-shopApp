import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import Categories from './screens/Categories';
import Category from './screens/Category';
import Cart from './screens/Cart';
import Orders from './screens/Orders';
import NewOrder from './screens/NewOrder';
import OrderInfo from './screens/OrderInfo';
import Settings from './screens/Settings';

export function HomeTab() {
  const Stack = createStackNavigator();
  return(
    <Stack.Navigator>
      <Stack.Screen name="Categories" component={Categories} />    
      <Stack.Screen name="Category" component={Category} />
    </Stack.Navigator>
  );
}

export function CartTab() {
  const Stack = createStackNavigator();
  return(
    <Stack.Navigator initialRouteName="Cart">
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="New Order" component={NewOrder} />
    </Stack.Navigator>
  );
}

export function OrderTab() {
  const Stack = createStackNavigator();
  return(
    <Stack.Navigator>
      <Stack.Screen name="Orders" component={Orders} />
      <Stack.Screen name="OrderInfo" component={OrderInfo} />
    </Stack.Navigator>
  );
}

export function SettingsTab() {
  const Stack = createStackNavigator();
  return(
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}