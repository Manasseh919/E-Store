import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, navigation, TextInput, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import SeparateDetails from './SeparateDetails';

import product from '../data/product';



const Products = ({ }) => {
    return (
        
            <View style={styles.page}>

                <SeparateDetails/>
              
              
            </View>
       
    );
};



export default Products;

const styles = StyleSheet.create({
    page: {

        padding: 10
    },
})