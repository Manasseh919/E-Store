import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View,navigation } from 'react-native';
import 'react-native-gesture-handler';
import ProductDetails from '../components/ProductDetails';
import productStyles from '../components/productSyles';





const DetailScreen = ({navigation}) => {
    return (
      
      <ProductDetails/>
    );
  };

  export default DetailScreen;


  const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})