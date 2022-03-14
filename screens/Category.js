import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import axios from 'axios';
import ProductListItem from '../components/ProductListItem';
import Context from '../context-api';

class Category extends React.Component {
  static contextType = Context;

  static navigationOptions = ({ navigation }) => {
    return {
      title: `${navigation.getParam('title')}`
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      products: [
        { 
          "id": 1, 
          "name": "Snowboard",
          "price": "500K",
          "images": [
            { "url": "https://www.burton.com/static/product/W22/10691108000142_1.png?impolicy=bglt&imwidth=972" }
          ],
          "category": 1
        },
        { 
          "id": 2, 
          "name": "Snowboard 2",
          "price": "500K",
          "images": [
            { "url": "https://www.burton.com/static/product/W22/10691108000142_1.png?impolicy=bglt&imwidth=972" }
          ],
          "category": 1
        },
        { 
          "id": 3, 
          "name": "Snowboard 3",
          "price": "500K",
          "images": [
            { "url": "https://www.burton.com/static/product/W22/10691108000142_1.png?impolicy=bglt&imwidth=972" }
          ],
          "category": 2
        }
      ]
    }
  }

  componentDidMount() {
    
  }

  render() {
    const { addToCart } = this.context;
    return (
      <FlatList
        data={this.state.products}
        contentContainerStyle={styles.container}
        numColumns={2}
        renderItem={({ item }) => 
          <View style={styles.wrapper}>
            <ProductListItem product={item} onAddToCartClick={addToCart}/>
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