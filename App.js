import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import CategoryListItem from './components/CategoryListItem';

export default function App() {
  const categories = [
    { id: 1, name: 'Dung cu truot tuyet' },
    { id: 2, name: 'Quan ao truot tuyet' },
    { id: 3, name: 'Mu len' },
    { id: 4, name: 'Gang tay' },
    { id: 5, name: 'Mu' },
  ]

  const [items, setItems] = useState(categories);

  return (
    <View style={styles.container}>
      {/* <ScrollView style={styles.scrollView}> */}
        <FlatList data={items}
          renderItem={({ item }) => <CategoryListItem category={item} />}
          keyExtractor={item => `${item.id}`}
          contentContainerStyle={styles.scrollView}
        />
      {/* </ScrollView> */}
    </View>
  );
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
