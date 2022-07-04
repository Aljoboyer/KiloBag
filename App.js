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


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SendOTP from './screens/Login/SendOTP/SendOTP';
import ChooseLanguage from './screens/Login/ChooseLanguage/ChooseLanguage';
import SendOTPWithKb from './screens/Login/SendOTPWithKb/SendOTPWithKb';
import VerifyPhone from './screens/Login/VerifyPhone/VerifyPhone';
import LocationPermission from './screens/Login/LocationPermission/LocationPermission';
import Home from './screens/Home/Home';
import Category from './screens/Category/Category';
import ProductDetails from './screens/ProductDetails/ProductDetails';
import Menu from './screens/Menu/Menu';
import Cart from './screens/Cart/Cart';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const screen = Dimensions.get("screen");
  const usernew = false;
  // console.log(signOut());
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>


        {
          usernew ? (<>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Category" component={Category} />
            <Stack.Screen name="ProductDetails" component={ProductDetails} />
            <Stack.Screen name="Menu" component={Menu} />
            <Stack.Screen name="Cart" component={Cart} />
          </>) : (<>
            <Stack.Screen name="ChooseLanguage" component={ChooseLanguage} />
            <Stack.Screen name="SendOTP" component={SendOTP} />
            <Stack.Screen name="SendOTPWithKb" component={SendOTPWithKb} />
            <Stack.Screen name="VerifyPhone" component={VerifyPhone} />
            <Stack.Screen name="LocationPermission" component={LocationPermission} />
          </>)
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
  selectedLanguage: {
    width: 125,
    height: 120,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: '#929292',
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notSelectedLanguage: {
    width: 125,
    height: 120,
    borderRadius: 10,
    borderColor: '#929292',
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "flex-start",
    // borderColor: 'red',
    // borderWidth: 3,
  },
});

export default App;
