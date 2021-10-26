import { StatusBar } from 'expo-status-bar';

import React from 'react';
import { StyleSheet, Text, View ,Dimensions,Button, TextInput,Alert,Linking, TouchableOpacity,Image, TouchableWithoutFeedback, ScrollView} from 'react-native';
import Formloader from './components/formloader';
import FormSelectionBtn from './components/formSelection';
import Loginform from './components/Loginform';
import Signupform from './components/Signupform';

export default function App() {
  return (

    
    <View style={{flex:1, paddingTop:120}} >
      <View style={{height:80}}>
        <Formloader 
        leftHeading='Welcome ' 
        rightHeading='Back'
        subHeading='Manasseh Is Awesome'
         />
      </View>  
      <View style={{
        flexDirection:'row',
        padding:20,
        marginBottom:20
      }}>
        <FormSelectionBtn style={styles.borderLeft} backgroundColor='rgba(27,27,51,1)'  title='Login'/>
        <FormSelectionBtn  style={styles.borderRight} style={styles.borderRight} backgroundColor='rgba(27,27,51,0.4)' title='Sign Up'/>
        
      </View>
      <ScrollView horizontal
       pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        <Loginform/>
        <Signupform/>
        
        
      </ScrollView>
    </View>
  );
};

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
  borderLeft:{
    borderTopLeftRadius:8,
    borderBottomLeftRadius:8,
  },
  borderRight:{
    borderTopRightRadius:8,
    borderBottomRightRadius:8,
  }
});
