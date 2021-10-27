import React from 'react'
import { View, Text,StyleSheet,Dimensions,KeyboardAvoidingView } from 'react-native'

const Formcontainer = ({children}) => {
    return (
     <KeyboardAvoidingView style={styles.container}>
   {children}
  </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,
        width: Dimensions.get('window').width},
     
});

export default Formcontainer
