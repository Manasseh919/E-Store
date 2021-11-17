import React from 'react'
import { View, Text,Image } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';

const ImageCarousel = ({images}) => {
    return (
        <View>
          <Image  source={require('../assets/acernitro.jpg')}
                    resizeMode='stretch' style={{alignSelf:'center',marginTop:5}}/>
        </View>
    );
};

export default ImageCarousel;
