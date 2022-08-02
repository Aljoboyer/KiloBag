import React, { useState } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import ProductDetails from './src/screens/ProductDetails/ProductDetails';
import Menu from './src/screens/Menu/Menu';
import ChooseLanguage from './src/screens/Login/ChooseLanguage/ChooseLanguage';
import LocationPermission from './src/screens/Login/LocationPermission/LocationPermission';
import SendOTP from './src/screens/Login/SendOTP/SendOTP';
import VerifyPhone from './src/screens/Login/VerifyPhone/VerifyPhone';
import PackingLove from './src/screens/Login/PackingLove/PackingLove';
import Checkout from './src/screens/Checkout/Checkout';
import ChooseLocation from './src/screens/ChooseLocation/ChooseLocation';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabScreens from './src/ScreenRoutes/TabScreens';
import Suggestion from './src/screens/Menu/Suggestion';
import RequestDelivery from './src/screens/ChooseLocation/RequestDelivery';

Amplify.configure(awsconfig);

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme,
    background: "white",
  }
}
 
const App = () => {

  const usernew = true;
  // console.log(signOut());
  return (

    <NavigationContainer theme={AppTheme}>
      {   usernew ?
          <Stack.Navigator initialRouteName='TabScreens'  screenOptions={{ headerShown: false }}>
          <Stack.Screen name="TabScreens" component={TabScreens} />
          <Stack.Screen name="ProductDetails" component={ProductDetails} />
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="Checkout" component={Checkout} />
          <Stack.Screen  name="Suggestion" component={Suggestion} />
          </Stack.Navigator>
          :
          <Stack.Navigator initialRouteName='ChooseLanguage'  screenOptions={{ headerShown: false }}>
              <Stack.Screen name="ChooseLanguage" component={ChooseLanguage} />
              <Stack.Screen name="SendOTP" component={SendOTP} />
              <Stack.Screen name="VerifyPhone" component={VerifyPhone} />
              <Stack.Screen name="PackingLove" component={PackingLove} />
              <Stack.Screen name="LocationPermission" component={LocationPermission} />
              <Stack.Screen name="ChooseLocation" component={ChooseLocation} />
              <Stack.Screen name="RequestDelivery" component={RequestDelivery} />
          </Stack.Navigator>
        }
    </NavigationContainer>

  );
};

export default App;

