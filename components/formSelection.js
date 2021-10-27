import React from 'react' 
import { StyleSheet, Text, View,TouchableWithoutFeedback
 } from 'react-native'

const FormSelectionBtn = ({title,backgroundColor,style}) => {
    return (
        <TouchableWithoutFeedback>
            <View style={[styles.container,style,{backgroundColor}   ]}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableWithoutFeedback>
        
 );
};

const styles = StyleSheet.create({
    container:{
        height:45,
        width:'50%',
        backgroundColor:'#1b1b33' ,
        justifyContent:'center',
        alignItems:'center'
        },
        title:{color:'white',fontSize:16}
})

export default FormSelectionBtn;