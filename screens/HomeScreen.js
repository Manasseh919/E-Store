import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View,navigation } from 'react-native';
import 'react-native-gesture-handler';



const HomeScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button
          title="Go to details screen"
          onPress={()=>navigation.navigate("Details")}
        />
      </View>
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