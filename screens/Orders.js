import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Context from '../context-api';
import OrderListItem from '../components/OrderListItem';

class OrdersScreen extends React.Component {
  static navigationOptions = {
    title: 'Orders'
  }

  static contextType = Context;
  
  render() {
    const { orderList } = this.context;
    const { navigation } = this.props;

    return (
      <FlatList 
        data={orderList}
        renderItem={({ item }) => 
          <OrderListItem order={item} navigation={navigation} />
        }
        keyExtractor={(item) => item.id}
      />
    )
  }
}

export default OrdersScreen;