import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import NumberFormat from '../mixins/NumberFormat';

function OrderListItem({ order, navigation }) {

  return (
    <View style={styles.shadow}>
      <View style={styles.container}>
        <Image style={styles.img} source={{ uri: order.products[0].images[0].url }} />

        <View style={styles.info}>
          <Text>{ order.name }</Text>
          <Text>{ NumberFormat(order.price) }</Text>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity
            activeOpacity={.5}
            onPress={() => navigation.navigate('OrderInfo', { 
              'Order': order
            })}
          >
            <View style={styles.actionBtn}>
              <Text style={styles.actionBtnText}>View</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  shadow: {
    elevation: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
    backgroundColor: '#fff',
    padding: 8,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 10,
    overflow: 'hidden',
  },
  img: {
    flex: 1,
    width: 60,
    height: '100%',
    borderRadius: 4,
  },
  info: {
    flex: 3,
    paddingHorizontal: 8,
    flexWrap: 'wrap',
  },
  actions: {
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionBtn: {
    backgroundColor: '#80aaff',
    padding: 8,
    borderRadius: 8,
  },
  actionBtnText: {
    color: '#fff'
  },
})

export default OrderListItem;