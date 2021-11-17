import React from 'react'
import { View, Text, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import styles from './styles'



const SeparateDetails = ({ item }) => {
    return (
        <ScrollView>
        
            
            <View style={styles.root}>
                <Image style={styles.image}
                    source={require('../assets/acernitro.jpg')}
                    resizeMode="stretch" />

                <View style={styles.rightContainer}>
                    <Text style={styles.title} numberOfLines={3}> 11th Gen Intel® Core™ i7 processor1, GeForce RTX™ 30 Series </Text>
                    {/* ratings */}
                    <View style={styles.ratingsContainer}>
                        <FontAwesome style={styles.star} name="star" size={18} color={"#e47911"} />
                        <FontAwesome style={styles.star} name="star" size={18} color={"#e47911"} />
                        <FontAwesome style={styles.star} name="star-half-full" size={18} color={"#e47911"} />
                        <FontAwesome style={styles.star} name="star-o" size={18} color={"#e47911"} />
                        <Text>12,355</Text>
                    </View>
                    <Text style={styles.price}>from $1500.00 <Text style={styles.oldPrice}>$1600.00</Text></Text>
                </View>

            </View>
            <View style={styles.root}>
                <Image style={styles.image}
                    source={require('../assets/rog1.jpg')}
                    resizeMode="stretch" />

                <View style={styles.rightContainer}>
                    <Text style={styles.title} numberOfLines={3}>Nvidia GeForce RTX 3070 (8GB GDDR6 VRAM)  </Text>
                    {/* ratings */}
                    <View style={styles.ratingsContainer}>
                        <FontAwesome style={styles.star} name="star" size={18} color={"#e47911"} />
                        <FontAwesome style={styles.star} name="star" size={18} color={"#e47911"} />
                        <FontAwesome style={styles.star} name="star-half-full" size={18} color={"#e47911"} />
                        <FontAwesome style={styles.star} name="star-o" size={18} color={"#e47911"} />
                        <FontAwesome style={styles.star} name="star-o" size={18} color={"#e47911"} />
                        <Text>12,355</Text>
                    </View>
                    <Text style={styles.price}>from $1300.00 <Text style={styles.oldPrice}>$1500.00</Text></Text>
                </View>

            </View>
            <View style={styles.root}>
                <Image style={styles.image}
                    source={require('../assets/R0g2.jpg')}
                    resizeMode="stretch" />

                <View style={styles.rightContainer}>
                    <Text style={styles.title} numberOfLines={3}> 11th Gen Intel® Core™ i7 processor1, GeForce RTX™ 30 Series </Text>
                    {/* ratings */}
                    <View style={styles.ratingsContainer}>
                        <FontAwesome style={styles.star} name="star" size={18} color={"#e47911"} />
                        <FontAwesome style={styles.star} name="star" size={18} color={"#e47911"} />
                        <FontAwesome style={styles.star} name="star" size={18} color={"#e47911"} />
                        <FontAwesome style={styles.star} name="star-half-full" size={18} color={"#e47911"} />
                        <FontAwesome style={styles.star} name="star-o" size={18} color={"#e47911"} />
                        <Text>12,355</Text>
                    </View>
                    <Text style={styles.price}>from $1500.00 <Text style={styles.oldPrice}>$1600.00</Text></Text>
                </View>

            </View>
            <View style={styles.root}>
                <Image style={styles.image}
                    source={require('../assets/acernitro.jpg')}
                    resizeMode="stretch" />

                <View style={styles.rightContainer}>
                    <Text style={styles.title} numberOfLines={3}> 11th Gen Intel® Core™ i7 processor1, GeForce RTX™ 30 Series </Text>
                    {/* ratings */}
                    <View style={styles.ratingsContainer}>
                        <FontAwesome style={styles.star} name="star" size={18} color={"#e47911"} />
                        <FontAwesome style={styles.star} name="star" size={18} color={"#e47911"} />
                        <FontAwesome style={styles.star} name="star" size={18} color={"#e47911"} />
                        <FontAwesome style={styles.star} name="star-half-full" size={18} color={"#e47911"} />
                        <FontAwesome style={styles.star} name="star-o" size={18} color={"#e47911"} />
                        <Text>12,355</Text>
                    </View>
                    <Text style={styles.price}>from $1500.00 <Text style={styles.oldPrice}>$1600.00</Text></Text>
                </View>

            </View>
            <View style={styles.root}>
                <Image style={styles.image}
                    source={require('../assets/acernitro.jpg')}
                    resizeMode="stretch" />

                <View style={styles.rightContainer}>
                    <Text style={styles.title} numberOfLines={3}> 11th Gen Intel® Core™ i7 processor1, GeForce RTX™ 30 Series </Text>
                    {/* ratings */}
                    <View style={styles.ratingsContainer}>
                        <FontAwesome style={styles.star} name="star" size={18} color={"#e47911"} />
                        <FontAwesome style={styles.star} name="star" size={18} color={"#e47911"} />
                        <FontAwesome style={styles.star} name="star" size={18} color={"#e47911"} />
                        <FontAwesome style={styles.star} name="star-half-full" size={18} color={"#e47911"} />
                        <FontAwesome style={styles.star} name="star-o" size={18} color={"#e47911"} />
                        <Text>12,355</Text>
                    </View>
                    <Text style={styles.price}>from $1500.00 <Text style={styles.oldPrice}>$1600.00</Text></Text>
                </View>

            </View>
            <View style={styles.root}>
                <Image style={styles.image}
                    source={require('../assets/acernitro.jpg')}
                    resizeMode="stretch" />

                <View style={styles.rightContainer}>
                    <Text style={styles.title} numberOfLines={3}> 11th Gen Intel® Core™ i7 processor1, GeForce RTX™ 30 Series </Text>
                    {/* ratings */}
                    <View style={styles.ratingsContainer}>
                        <FontAwesome style={styles.star} name="star" size={18} color={"#e47911"} />
                        <FontAwesome style={styles.star} name="star" size={18} color={"#e47911"} />
                        <FontAwesome style={styles.star} name="star" size={18} color={"#e47911"} />
                        <FontAwesome style={styles.star} name="star-half-full" size={18} color={"#e47911"} />
                        <FontAwesome style={styles.star} name="star-o" size={18} color={"#e47911"} />
                        <Text>12,355</Text>
                    </View>
                    <Text style={styles.price}>from $1500.00 <Text style={styles.oldPrice}>$1600.00</Text></Text>
                </View>

            </View>
            <View style={styles.root}>
                <Image style={styles.image}
                    source={require('../assets/acernitro.jpg')}
                    resizeMode="stretch" />

                <View style={styles.rightContainer}>
                    <Text style={styles.title} numberOfLines={3}> 11th Gen Intel® Core™ i7 processor1, GeForce RTX™ 30 Series </Text>
                    {/* ratings */}
                    <View style={styles.ratingsContainer}>
                        <FontAwesome style={styles.star} name="star" size={18} color={"#e47911"} />
                        <FontAwesome style={styles.star} name="star" size={18} color={"#e47911"} />
                        <FontAwesome style={styles.star} name="star" size={18} color={"#e47911"} />
                        <FontAwesome style={styles.star} name="star-half-full" size={18} color={"#e47911"} />
                        <FontAwesome style={styles.star} name="star-o" size={18} color={"#e47911"} />
                        <Text>12,355</Text>
                    </View>
                    <Text style={styles.price}>from $1500.00 <Text style={styles.oldPrice}>$1600.00</Text></Text>
                </View>

            </View>
       
        </ScrollView>


    )
}

export default SeparateDetails
