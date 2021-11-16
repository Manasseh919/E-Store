import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View,navigation } from 'react-native';
import 'react-native-gesture-handler';



const DetailScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Detail Screen</Text>
        <Button
          title="Go to details screen....again"
          onPress={()=>navigation.push("Details")}
        />
        <Button
          title="Go to Home"
          onPress={()=>navigation.navigate("Home")}
        />
        <Button
          title="Go back"
          onPress={()=>navigation.goBack()}
        />
         <Button
          title="Go to the first screen"
          onPress={()=>navigation.popToTop()}
        />
      </View>
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