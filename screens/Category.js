import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import axios from 'axios';
import ProductListItem from '../components/ProductListItem';

class Category extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `${navigation.getParam('title')}`
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    const { navigation } = this.props;
    const category = navigation.getParam('category');

    axios.get(`/products?category=${category}`)
      .then(res => {
        this.setState({
          products: res.data
        })
      })
      .catch(err => {
        console.error(err);
      })
  }

  render() {
    return (
      <FlatList
        data={this.state.products}
        contentContainerStyle={styles.container}
        numColumns={2}
        renderItem={({ item }) => 
          <View style={styles.wrapper}>
            <ProductListItem product={item} onAddToCartClick={() => {}}/>
          </View>
        }
        keyExtractor={(item) => `${item.id}`}
      />
    );
  };
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingHorizontal: 8,
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 8,
  }
});

export default Category;