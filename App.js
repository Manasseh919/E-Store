import { StatusBar } from 'expo-status-bar';

import React, {useRef}from 'react';
import { StyleSheet, Text, View ,Dimensions,Animated,Button, TextInput,Alert,Linking, TouchableOpacity,Image, TouchableWithoutFeedback, ScrollView} from 'react-native';
import Formloader from './components/formloader';
import FormSelectionBtn from './components/formSelection';
import Loginform from './components/Loginform';
import Signupform from './components/Signupform';

const {width} = Dimensions.get('window')


export default function App() {
  const animation = useRef(new Animated.Value(0)).current;
  const scrollView = useRef()

  const rightHeaderOpacity = animation.interpolate({
    inputRange:[0,width],
    outputRange:[1,0],
  });
  const leftHeaderTranslateX = animation.interpolate({
    inputRange:[0,width],
    outputRange:[0,40],
  });
  const rightHeaderTranslateY = animation.interpolate({
    inputRange:[0,width],
    outputRange:[0,-20],
  });
  const loginColorInterpolate = animation.interpolate({
    inputRange:[0,width],
    outputRange:['rgba(27,27,51,1)','rgba(27,27,51,0.4)'],
  });
  const signupColorInterpolate = animation.interpolate({
    inputRange:[0,width],
    outputRange:['rgba(27,27,51,0.4)','rgba(27,27,51,1)'],
  });
  


  return (

    
    <View style={{flex:1, paddingTop:120}} >
      <View style={{height:80}}>
        <Formloader 
        leftHeading='Welcome ' 
        rightHeading='Back'
        subHeading='Manasseh Is Awesome'
        rightHeaderOpacity={rightHeaderOpacity}
        leftHeaderTranslateX={leftHeaderTranslateX}
        rightHeaderTranslateY={rightHeaderTranslateY}
         />
      </View>  
      <View style={{
        flexDirection:'row',
        padding:20,
        marginBottom:20
      }}>
        <FormSelectionBtn 
        style={styles.borderLeft} 
        backgroundColor={loginColorInterpolate}
          title='Login'
          onPress={()=> scrollView.current.scrollTo({x:0})}
          />
        <FormSelectionBtn  
        style={styles.borderRight}
         backgroundColor={signupColorInterpolate} 
          title='Sign Up'
          onPress={()=> scrollView.current.scrollTo({x:width})}
          />
        
      </View>
      <ScrollView 
      ref = {scrollView}
      horizontal
       pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll ={Animated.event([{nativeEvent:{contentOffset:{x:animation}}}],
          {useNativeDriver:false}
          )}
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
