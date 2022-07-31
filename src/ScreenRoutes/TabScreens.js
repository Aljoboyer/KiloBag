import { View, Text, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import MyOrders from '../screens/MyOrders/MyOrders';
import Wallet from '../screens/Wallet/Wallet';
import Cart from '../screens/Cart/Cart';
import { Colors } from '../Theme/Colors';
import StackScreens from './StackScreens';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export default function ScreenRoutes() {
  const show = true;
  // const navigation = useNavigation()
  return (

      <Tab.Navigator
      initialRouteName='StackScreens'
     
      screenOptions={({route}) => ({
      tabBarStyle: { borderTopColor:  Colors.LightGreen, borderTopWidth: 1, paddingTop: 10 , height: 70, backgroundColor: 'white', paddingBottom: 15},
      
      tabBarIcon: ({focused, size, color}) => {

          if(route.name === 'StackScreens')
          {  
            
            if(focused)
              return(
                  <Image source={require('../../assets/homeFill.png')}/>
              )
              else{
                return (
                  <Image source={require('../../assets/home.png')}/>
                )
              }
          }
          else if(route.name === 'MyOrders')
          {
            if(focused)
            return(
                <Image source={require('../../assets/rupiFill.png')}/>
            )
            else{
              return (
                <Image source={require('../../assets/rupi.png')}/>
              )
            }
          }
          
          else if(route.name === 'Wallet')
          {
            if(focused)
            return(
                  <Image  source={require('../../assets/walletFill.png')}/>
            )
            else{
              return (

                  <Image  source={require('../../assets/wallet.png')}/>
              )
            }
          }

          else if(route.name === 'Bag')
          {
            if(focused)
            return(
                  <Image  source={require('../../assets/bagFill.png')}/>
            )
            else{
              return (

                  <Image  source={require('../../assets/bag.png')}/>
              )
            }
          }
        }
      })}
        >
        <Tab.Screen options={{
          tabBarLabelStyle: {color: Colors.LightGreen},
          header: () => null,
        }} 
        listeners={({ navigation, route }) => ({
          tabPress: e => {
            if (route.state && route.state.routeNames.length > 0) {
                navigation.navigate('Home')
                
            }
          },
        })}
        name="StackScreens" component={StackScreens}/> 

        <Tab.Screen  options={{
          tabBarLabelStyle: {color: Colors.LightGreen},
          header: () => null
        }}
        name="MyOrders" component={MyOrders}/>

        <Tab.Screen  options={{
          tabBarLabelStyle: {color: Colors.LightGreen},
          header: () => null
        }} name="Wallet" component={Wallet}/>
        
        <Tab.Screen  options={{
        tabBarBadge: `${'2'}`,
        tabBarLabelStyle: {color: Colors.LightGreen},
        tabBarBadgeStyle: {backgroundColor: 'white', borderRadius: 50, borderWidth: 1, borderColor: '#5CBB5E', marginBottom: 10, color: '#5CBB5E', fontSize: 12},
        header: () => null
      }} name="Bag" component={Cart}/>
      </Tab.Navigator> 
  )
}
