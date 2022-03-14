import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { IconButton, Colors } from 'react-native-paper';
import Context from '../context-api';
import NumberFormat from '../mixins/NumberFormat';

const CartListItem = (props) => {
  const { changeQuantity } = useContext(Context);
  const { product } = props;

  return (
    <View style={styles.shadow}>
      <View style={styles.container}>
        <Image style={styles.img} source={{ uri: product.images[0].url }}></Image>

        <View style={styles.info}>
          <Text style={styles.title}>{ product.name }</Text>
          <Text style={styles.price}>{ NumberFormat(product.price) }</Text>
        </View>

        <View style={styles.actions}>
          <IconButton
            icon="minus"
            color={Colors.red500}
            size={20}
            onPress={() => changeQuantity(product, "minus")}
          />
          <Text style={styles.quantityNum}>{ product.quantity }</Text>
          <IconButton
            icon="plus"
            color={Colors.red500}
            size={20}
            onPress={() => changeQuantity(product, "plus")}
          />
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
  quantityNum: {
    fontSize: 16,
    color: '#333',
    alignSelf: 'center',
  }
})

export default CartListItem;