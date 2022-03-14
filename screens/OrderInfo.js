import React from 'react';
import { Image, View, Text, ScrollView, StyleSheet, FlatList } from 'react-native';
import NumberFormat, { NumberFormatFull } from '../mixins/NumberFormat';

const OrderInfo = (props) => {

  const order = props.route.params['Order'];
  console.log(order);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.field}>
          <Text style={styles.label}>Id</Text>
          <Text>{ order.id }</Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Name</Text>
          <Text>{ order.name }</Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Phone Number</Text>
          <Text>{ order.phone }</Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Address</Text>
          <Text>{ order.address }</Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Price</Text>
          <Text>{ NumberFormatFull(order.price) }</Text>
        </View>
        {order.products.map((item, idx) =>
          <View style={styles.orderProductContainer} key={idx}>
            <Image style={styles.img} source={{ uri: item.images[0].url }}></Image>
            <View style={styles.info}>
              <Text style={styles.title}>{ item.name }</Text>
              <Text style={styles.price}>{ NumberFormat(item.price) }</Text>
            </View>
            <View style={styles.quantity}>
              <Text>Quantity</Text>
              <Text style={styles.quantityNum}>{ item.quantity }</Text>
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
  },
  field: {
    marginVertical: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
  },
  orderProductContainer: {
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
  quantity: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityNum: {
    fontSize: 20,
    backgroundColor: '#eee',
    padding: 8,
    borderRadius: 10
  }
})

export default OrderInfo;