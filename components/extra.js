import { StatusBar } from 'expo-status-bar';

import React from 'react';
import { StyleSheet, Text, View ,Button,TextInput,Alert,Linking, TouchableOpacity,Image} from 'react-native';

export default function App() {
  return (

    
    <View style={styles.container} >
      <Image
  source={{
    uri: 'https://reactjs.org/logo-og.png',
   
  }}
  style={{ width: 400, height: 400 }}
/>
      <Text  style={{bottom:20}}>Welcome to Mini Sakai</Text>
      <StatusBar style="auto" />
      <TextInput
      style={{ width:100, borderColor: 'grey', borderWidth: 2.5,}}
      placeholder="First Name"  
      
    />
    <TextInput
      style={{marginTop:30, width:100, borderColor: 'grey', borderWidth: 2.5,}}
      placeholder="Surname"  
      
    />
    <TextInput
      style={{ marginBottom:20, marginTop:30, borderColor: 'grey', borderWidth: 2.5,width:100,}}
      placeholder="Enter your Email"
      
    />
      <Button  color="#FE434C" type="clear"  style={{marginTop:20,borderRadius:40, }} title="Sign up"
      onPress={() => Linking.openURL('https://sakai.ug.edu.gh/portal/site/!gateway/tool/!gateway-110')}
      />

     
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:50,
    padding: 20,
    top:20,
  },
});
