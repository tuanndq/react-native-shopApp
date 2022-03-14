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
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HomeTab, CartTab, OrderTab, SettingsTab } from './AppNavigator'

import Context from './context-api';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const [cartList, setCartList] = useState([]);
  const [orderList, setOrderList] = useState([]);
  const [state, setState] = useState({
    numProductInCart: 0,
    totalPrice: 0,
  })

  //  APP FUNCTION

  //  Add product to cart
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
    setState({
      ...state,
      numProductInCart: state.numProductInCart + 1,
      totalPrice: state.totalPrice + product.price
    })
  }
  
  //  Change number product in cart
  const changeQuantity = (product, type) => {
    let temp = cartList;
    temp = temp.map(item => {
      let numProduct = item.quantity;
      if (item.id == product.id) {
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
    temp = temp.filter(item => item.quantity > 0);
    setCartList(temp);

    let numChange = type == "plus" ? 1 : -1;
    let priceChange = type == "plus" ? product.price : -product.price;
    setState({
      ...state,
      numProductInCart: state.numProductInCart + numChange,
      totalPrice: state.totalPrice + priceChange
    })
  }

  //  Create new order
  const createOrder = ({ name, phone, address }) => {
    let newOrder = {
      id: (new Date).getTime(),
      name,
      phone,
      address,
      price: state.totalPrice,
      products: cartList,
      createdAt: (new Date).toLocaleString()
    }
    let temp = orderList;
    temp.push(newOrder);
    setOrderList(temp);
    setCartList([]);
    setState({
      numProductInCart: 0,
      totalPrice: 0,
    })
  }

  return(
    <Context.Provider value={{ 
      cartList, state, orderList,
      addToCart, changeQuantity, createOrder 
    }}>
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
            component={HomeTab}
          />
          <Tab.Screen
            name="Cart"
            component={CartTab}
            options={{ 
              unmountOnBlur: true,
              tabBarBadge: state.numProductInCart > 0 ? state.numProductInCart : null
            }}
          />
          <Tab.Screen
            name="Orders"
            component={OrderTab}
            options={{
              unmountOnBlur: true
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsTab}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Context.Provider>
  )
 
}

export default TabNavigator;