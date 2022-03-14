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
      categories: [
        { "id": 1, "name": "Dung cu truot tuyet" },
        { "id": 2, "name": "Quan ao truot tuyet" },
        { "id": 3, "name": "Mu len" },
        { "id": 4, "name": "Gang tay" },
        { "id": 5, "name": "Mu" }
      ],
    } 
  };

  componentDidMount() {
    
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