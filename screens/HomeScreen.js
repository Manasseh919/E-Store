import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View,navigation } from 'react-native';
import 'react-native-gesture-handler';
import Products from '../components/products';
import SeparateDetails from '../components/SeparateDetails';



const HomeScreen = ({navigation}) => {
    return (
     <Products/>
   
    );
  };



  export default HomeScreen;

  const styles = StyleSheet.create({
      container:{
          flex:1,
          alignItems:'center',
          justifyContent:'center'
      }
  })