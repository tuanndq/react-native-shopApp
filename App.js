import React, { useState } from 'react';
import axios from 'axios';
import { StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import AppNavigator from './AppNavigator';

axios.defaults.baseURL = 'http://ac11-27-71-120-202.ngrok.io';

const AppContainer = createAppContainer(AppNavigator);

export default function App() {

  return <AppContainer />;
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
