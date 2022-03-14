import React, { useState, useContext } from 'react';
import { Alert, View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import Context from '../context-api';

const NewOrder = (props) => {
  const [name, onChangeName] = useState("");
  const [phone, onChangePhone] = useState("");
  const [address, onChangeAddress] = useState("");

  const { createOrder } = useContext(Context);

  const onCreateOrderPress = () => {
    if (!name) {
      Alert.alert('Name is missing!', 'Please input your name')
    } else if (!phone) {
      Alert.alert('Phone Number is missing!', 'Please input your phone number')
    } else if (phone.length != 10) {
      Alert.alert('Phone Number invalid!', 'Phone number must be 10 character length')
    } else if (!address) {
      Alert.alert('Address is missing!', 'Please input your address')
    }
    else {
      createOrder({name, phone, address});
      props.navigation.navigate('Orders');
    }
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.field}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeName}
            value={name}
          />
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangePhone}
            value={phone}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeAddress}
            value={address}
          />
        </View>
        <TouchableOpacity
          onPress={onCreateOrderPress}
        >
          <View style={styles.orderBtn}>
            <Text style={styles.orderBtnText}>Order</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
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
  orderBtn: {
    height: 40,
    backgroundColor: '#80aaff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 16,
  },
  orderBtnText: {
    color: '#fff',
    fontSize: 16,
  },
})

export default NewOrder;