import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Checkout from './../screens/Checkout/Checkout';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import CategoryProduct from './../screens/CategoryProduct/CategoryProduct';
import Home from '../screens/Home/Home';
import TrendingProduct from './../screens/TrendingProduct/TrendingProduct';
import TodayOffers from './../screens/TodayOffers/TodayOffers';
import Subscribe from './../screens/Subscribe/Subscribe';
import SearchProduct from './../screens/SearchProduct/SearchProduct';
import ChooseLocation from './../screens/ChooseLocation/ChooseLocation';
import SubscribeSuccess from './../screens/Subscribe/SubscribeSuccess';
import RequestDelivery from './../screens/ChooseLocation/RequestDelivery';
import OrderDetails from './../screens/MyOrders/OrderDetails';
import Mysubscription from './../screens/Mysubscription/Mysubscription';
import DeleteSubscription from './../screens/Mysubscription/DeleteSubscription';
import PermanentModify from './../screens/Mysubscription/PermanentModify';
import ModifyTemporary from './../screens/Mysubscription/ModifyTemporary';
import PauseSubscription from './../screens/Mysubscription/PauseSubscription';
import Suggestion from './../screens/Menu/Suggestion';
import Errors from './../screens/Errors/Errors';

const Stack = createNativeStackNavigator();

export default function StackScreens() {
  return (
    <Stack.Navigator  screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CategoryProduct" component={CategoryProduct} />
      <Stack.Screen name="TrendingProduct" component={TrendingProduct} />
      <Stack.Screen name="TodayOffers" component={TodayOffers} />
      <Stack.Screen name="Subscribe" component={Subscribe} />
      <Stack.Screen name="SearchProduct" component={SearchProduct} />
      <Stack.Screen name="SubscribeSuccess" component={SubscribeSuccess} />
      <Stack.Screen name="RequestDelivery" component={RequestDelivery} />
      <Stack.Screen name="OrderDetails" component={OrderDetails} />
      <Stack.Screen name="Mysubscription" component={Mysubscription} /> 
      <Stack.Screen name="DeleteSubscription" component={DeleteSubscription} /> 
      <Stack.Screen name="PermanentModify" component={PermanentModify} /> 
      <Stack.Screen name="ModifyTemporary" component={ModifyTemporary} />
      <Stack.Screen name="PauseSubscription" component={PauseSubscription} /> 
      <Stack.Screen name="Errors" component={Errors} /> 
    </Stack.Navigator>

  )
}