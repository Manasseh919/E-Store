import React from "react";

import { createStackNavigator } from '@react-navigation/stack';
import Icon  from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';

const Tab = createMaterialBottomTabNavigator();


const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();


const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#ffff"
      barStyle={{ backgroundColor: 'blue' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor:'#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={DetailStackScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarColor:'blue',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor:'grey',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor:'orange',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-aperture" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
)

export default MainTabScreen;


const HomeStackScreen = ({ navigation }) => (
    <HomeStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
    }}>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title: 'Overview',
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25}
            backgroundColor="#009387"
            onPress={() => { navigation.openDrawer() }}></Icon.Button>
          )
      }} />
  
    </HomeStack.Navigator>
  );
  const DetailStackScreen = ({ navigation }) => (
    <DetailStack.Navigator screenOptions={{
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25}
          backgroundColor="blue"
          onPress={() => { navigation.openDrawer() }}></Icon.Button>
        ),
      headerStyle: {
        backgroundColor: 'blue',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
    }}>
      <DetailStack.Screen name="Details" component={DetailScreen} options={{
  
      }} />
  
    </DetailStack.Navigator>
  );
  
  