import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import CartListItem from '../components/CartListItem';
import Context from '../context-api';
import NumberFormat from '../mixins/NumberFormat';

class CartScreen extends React.Component {
  static contextType = Context;

  static navigationOptions = {
    title: 'Cart'
  }

  constructor(props) {
    super(props);
    this.state = {
      cartList: []
    }
  }

  componentDidMount() {
    
  }

  render() {
    const { cartList, state } = this.context;
    const { numProductInCart, totalPrice } = state;
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          data={cartList}
          renderItem={({ item }) => 
            <CartListItem product={item} />
          }
          keyExtractor={(item) => `${item.id}`}
        />
        { numProductInCart > 0 &&
          <View style={styles.cartInfo}>
            <View style={styles.leftOrder}>
              <Text style={styles.title}>Total</Text>
              <Text style={styles.price}>{ NumberFormat(totalPrice) }</Text>
            </View>
            <View style={styles.rightOrder}>
              <TouchableOpacity
                onPress={() => navigation.navigate('New Order')}
                activeOpacity={.5}
              >
                <View style={styles.orderBtn}>
                  <Text style={styles.orderBtnText}>Create Order</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cartInfo: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 90,
    borderRadius: 4,
  },
  leftOrder: {
    flex: 1,
    marginLeft: 24,
  },
  title: {
    marginTop: 16,
  },
  price: {
    fontSize: 24,
  },
  rightOrder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderBtn: {
    height: 40,
    backgroundColor: '#80aaff',
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  orderBtnText: {
    color: '#fff',
    fontSize: 16,
  },
})

export default CartScreen;