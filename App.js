/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import type { Node } from 'react';
import {
  StyleSheet,
  useColorScheme,
  Dimensions,
} from 'react-native';


import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import ProductDetails from './src/screens/ProductDetails/ProductDetails';
import Menu from './src/screens/Menu/Menu';
import Cart from './src/screens/Cart/Cart';
import ChooseLanguage from './src/screens/Login/ChooseLanguage/ChooseLanguage';
import SendOTPWithKb from './src/screens/Login/SendOTP/SendOTP';
import LocationPermission from './src/screens/Login/LocationPermission/LocationPermission';
import SendOTPTwo from './src/screens/Login/SendOTPTwo/SendOTPTwo';
import SendOTP from './src/screens/Login/SendOTP/SendOTP';
import VerifyPhone from './src/screens/Login/VerifyPhone/VerifyPhone';
import PackingLove from './src/screens/Login/PackingLove/PackingLove';
import DailyHome from './src/screens/Home/DailyHome';
import InstantHome from './src/screens/Home/InstantHome';
import MonthlyHome from './src/screens/Home/MonthlyHome';
import InstantCategory from './src/screens/CategoryProduct/InstantCategory';
import DailyCategory from './src/screens/CategoryProduct/DailyCategory';
import MonthlyCategory from './src/screens/CategoryProduct/MonthlyCategory';

Amplify.configure(awsconfig);

const Stack = createNativeStackNavigator();

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme,
    background: "white",
  }
}

const App = () => {

  const usernew = false;
  // console.log(signOut());
  return (
    <NavigationContainer theme={AppTheme}>
      <Stack.Navigator initialRouteName='Menu'  screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Menu" component={Menu} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};

MonthlyCategory

export default App;
// {
//   usernew ? (<>
//     <Stack.Screen name="InstantHome" component={InstantHome} />
//      <Stack.Screen name="DailyHome" component={DailyHome} /> 
//      <Stack.Screen name="MonthlyHome" component={MonthlyHome} />
//        <Stack.Screen name="InstantCategory" component={InstantCategory} />
//        <Stack.Screen name="DailyCategory" component={DailyCategory} />
//      <Stack.Screen name="MonthlyCategory" component={MonthlyCategory} />
//     <Stack.Screen name="ProductDetails" component={ProductDetails} />
//     <Stack.Screen name="Menu" component={Menu} />
//     <Stack.Screen name="Cart" component={Cart} />
//   </>) : (<>
//     <Stack.Screen name="ChooseLanguage" component={ChooseLanguage} />
//     {/* <Stack.Screen name="SendOTPTwo" component={SendOTPTwo} /> */}
//     <Stack.Screen name="SendOTP" component={SendOTP} />
//     <Stack.Screen name="VerifyPhone" component={VerifyPhone} />
//     <Stack.Screen name="LocationPermission" component={LocationPermission} />
// <Stack.Screen name="PackingLove" component={PackingLove} />
//   </>)
// }