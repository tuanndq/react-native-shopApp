import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import axios from 'axios';
import CategoryListItem from '../components/CategoryListItem';

class Categories extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props);
    this.state = {
      categories: []
    } 
  };

  componentDidMount() {
    axios.get('/categories')
      .then(res => {
        this.setState({
          categories: res.data
        })
      })
      .catch(err => {
        console.error("Have error: " + err);
      })
  }

  render() {
    const { categories }= this.state;
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <FlatList data={categories}
          renderItem={({ item }) => 
            <CategoryListItem 
              category={item}
              onPress={() => navigation.navigate('Category', {
                title: item.name,
                category: item.id
              })}
          />}
          keyExtractor={item => `${item.id}`}
          contentContainerStyle={styles.scrollView}
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  scrollView: {
    paddingLeft: 16,
    paddingRight: 16,
  }
});

export default Categories;