import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import productStyles from './productSyles';
import { Picker } from '@react-native-picker/picker';
import product from '../data/product';
import QuantitySelector from './quantitySelector';
import { useState } from 'react';
import { Button } from 'react-native-paper';
import ImageCarousel from './imageCarousel';



const ProductDetails = () => {

    const [quantity, setQuantity] = useState(1);

    return (
        <SafeAreaView>
            <View style={productStyles.root}>
                <Text style={productStyles.title}> Acer Nitro 5</Text>

                {/* Image carousel */}
                <ImageCarousel />

                {/* option selector */}

                {/* Price */}





                <Picker>
                    <Picker.Item label="8GB" value="js" />
                    <Picker.Item label="16GB" value="js" />
                    <Picker.Item label="32GB" value="js" />
                    <Picker.Item label="64GB" value="js" />
                </Picker>
                {/* Description */}
                <Text style={productStyles.price}>from $1500.00 <Text style={productStyles.oldPrice}>$1600.00</Text></Text>
                <Text style={productStyles.description}>
                    Go full throttle with an 11th Gen Intel® Core™ i7 processor1,
                    GeForce RTX™ 30 Series GPUs1 and the high-speed FHD / QHD display.
                    Reign over the game world with the combined power of a 11th Gen Intel® Core™ i7 processor1 and
                    NVIDIA® GeForce RTX™ 30 Series GPUs. Configure your laptop for maximum
                    speed and massive storage with two slots for M.2 PCIe / SATA SSDs1 and up to 32GB of DDR4 3200 RAM.
                </Text>
                {/* Quantiti Selector */}

                {/* Quantiti Selector */}
                <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

                {/* Button */}
                <Pressable onPress={() => { console.warn('Add to cart') }} style={styles.root}>
                    <Text style={styles.text}>Add to Cart</Text>
                </Pressable>
                <Pressable onPress={() => { console.warn('Buy Now') }} style={styles.root}>
                    <Text style={styles.text}>Buy Now</Text>
                </Pressable>


            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#e47911',
        marginVertical: 10,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#a15e1b",


    },
    text: {
        fontSize: 16,

    }
})

export default ProductDetails;
