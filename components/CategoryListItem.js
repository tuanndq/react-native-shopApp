import React from 'react';
import {
  Alert,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';
import SkiiImage from '../assets/ski.png'

const CategoryListItem = (props) => {

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={props.onPress}>
      <View style={styles.container}>
        <Text style={styles.itemTitle}>{ props.category.name }</Text>
        <Image source={SkiiImage} style={styles.image} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    elevation: 10,
    alignItems: 'center',
    padding: 16,
    borderRadius: 4,
    backgroundColor: '#fff',
    margin: 10,
  },
  itemTitle: {
    textTransform: 'uppercase',
    marginBottom: 8,
    fontWeight: '700',
  },
  image: {
    width: 64,
    height: 64,
  },
})

export default CategoryListItem;