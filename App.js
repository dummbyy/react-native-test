import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Ionicons'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './components/Home';
import Liked from './components/Liked';
import Details from './components/Details';
import Profile from './components/Profile';
import colors from './assets/colors/colors'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

Entypo.loadFont();

const TabNavigator = () => {
  return(
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.orange,
        tabBarInactiveTintColor: colors.gray,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar
      }}
    >
      <Tab.Screen name="Home" component={Home} options= {{tabBarIcon: ({focused, color}) => {
          if(focused) return <Entypo size={25} color={color} name="home"/>
          return <Entypo name="home-outline" color={color} size={25} />
      }}}/>
      <Tab.Screen name="Liked" component={Liked} options={{tabBarIcon: ({focused, color}) => {
          if(focused) return <Entypo name="heart" color={color} size={30} />
          return <Entypo name="heart-outline" color={color} size={30} />
      }}}/>
      <Tab.Screen name="Profile" component={Profile} options={{tabBarIcon: ({focused, color}) => {
          if(focused) return <Entypo name="person" color={color} size={25}/>
          return <Entypo name="person-outline" color={color} size={25}/>
      }}}/>
      <Tab.Screen name="Details" component={Details} options={{tabBarIcon: ({focused, color}) => {
          if(focused) return <Entypo name="albums" color={color} size={25} />
          return <Entypo name="albums-outline" size={25} color={color}/>
      }}}/>
    </Tab.Navigator>
  )
}

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TabNavigator" component={TabNavigator} options={{headerShown: false}}/>
        <Stack.Screen name="Details" component={Details} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
const styles = StyleSheet.create({
  tabBar: {
    backgroundColor:colors.white,
    borderTopLeftRadius:20,
    borderTopRightRadius: 20
  }
});

