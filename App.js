// import React, { useState } from 'react';
// import axios from 'axios';
// import { View, StyleSheet } from 'react-native';
// import { createAppContainer } from 'react-navigation';
// import AppNavigator from './AppNavigator';
// import Context from './context-api';

// axios.defaults.baseURL = 'http://0374-27-71-120-202.ngrok.io';

// const AppContainer = createAppContainer(AppNavigator);

// export default function App() {
  // const [cartList, setCartList] = useState([]);

  // const addToCart = (product) => {
  //   let temp = cartList;
  //   let check = false;
  //   cartList.forEach(item => {
  //     if (item.id == product.id) {
  //       check = true;
  //     }
  //   })
  //   if (check) {
  //     temp.map(item => {
  //       if (item.id == product.id) {
  //         let numProduct = item.quantity + 1;
  //         return {
  //           ...item,
  //           quantity: numProduct
  //         }
  //       }
  //     })
  //   } else {
  //     temp.push({
  //       ...product,
  //       quantity: 1
  //     })
  //   }
  //   setCartList(temp);
  // }

//   return (
//     <Context.Provider
//       value={{
//         cartList,
//         addToCart
//       }}
//     >
//       <AppContainer />
//     </Context.Provider>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'stretch',
//     justifyContent: 'center',
//   },
//   scrollView: {
//     paddingLeft: 16,
//     paddingRight: 16,
//   }
// });




import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Tab1, Tab2, Tab3, Tab4 } from './AppNavigator'

import Context from './context-api';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (product) => {
    let temp = cartList;
    let check = false;
    cartList.forEach(item => {
      if (item.id == product.id) {
        check = true;
      }
    })
    if (check) {
      temp = temp.map(item => {
        let numProduct = item.quantity;
        if (item.id == product.id) {
          numProduct++;
        }
        return {
          ...item,
          quantity: numProduct
        }
      })
    } else {
      temp.push({
        ...product,
        quantity: 1
      })
    }
    setCartList(temp);
  }

  const changeQuantity = (id, type) => {
    let temp = cartList;
    temp = temp.map(item => {
      let numProduct = item.quantity;
      if (item.id == id) {
        if (type == "plus") {
          numProduct++;
        } else {
          numProduct--;
        }
      }
      return {
        ...item,
        quantity: numProduct
      }
    })
    console.log(temp);
    temp = temp.filter(item => item.quantity > 0);
    setCartList(temp);
  }

  return(
    <Context.Provider value={{ cartList, addToCart, changeQuantity }}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              switch(route.name) {
                case 'Home':
                  iconName = 'home';
                  break;
                case 'Cart':
                  iconName = 'cart';
                  break;
                case 'Orders':
                  iconName = 'list';
                  break;
                case 'Settings':
                  iconName = 'settings';
                  break;
              }
              return <Ionicons name={iconName} size={size} color={color} />
            }
          })}
        >
          <Tab.Screen
            name="Home"
            component={Tab1}
          />
          <Tab.Screen
            name="Cart"
            component={Tab2}
            options={{unmountOnBlur: true}}
          />
          <Tab.Screen
            name="Orders"
            component={Tab3}
          />
          <Tab.Screen
            name="Settings"
            component={Tab4}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Context.Provider>
  )
 
}

export default TabNavigator;