import React, { useState } from 'react';
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
import Home from './src/screens/Home/Home';
import CategoryProduct from './src/screens/CategoryProduct/CategoryProduct';
import Checkout from './src/screens/Checkout/Checkout';
import TrendingProduct from './src/screens/TrendingProduct/TrendingProduct';
import TodayOffers from './src/screens/TodayOffers/TodayOffers';
import Subscribe from './src/screens/Subscribe/Subscribe';
import SearchProduct from './src/screens/SearchProduct/SearchProduct';
import ChooseLocation from './src/screens/ChooseLocation/ChooseLocation';
import SubscribeSuccess from './src/screens/Subscribe/SubscribeSuccess';
import RequestDelivery from './src/screens/ChooseLocation/RequestDelivery';
import MyOrders from './src/screens/MyOrders/MyOrders';
import OrderDetails from './src/screens/MyOrders/OrderDetails';
import Mysubscription from './src/screens/Mysubscription/Mysubscription';
import DeleteSubscription from './src/screens/Mysubscription/DeleteSubscription';
import PermanentModify from './src/screens/Mysubscription/PermanentModify';
import ModifyTemporary from './src/screens/Mysubscription/ModifyTemporary';
import PauseSubscription from './src/screens/Mysubscription/PauseSubscription';
import Wallet from './src/screens/Wallet/Wallet';
import Suggestion from './src/screens/Menu/Suggestion';
import Errors from './src/screens/Errors/Errors';
 
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
      <Stack.Navigator initialRouteName='Errors'  screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Errors" component={Errors} />  
      </Stack.Navigator>
    </NavigationContainer> 
  );
};


export default App;
// {
//   usernew ? (<>
//     <Stack.Screen name="Home" component={Home} />
//        <Stack.Screen name="CategoryProduct" component={CategoryProduct} />
//     <Stack.Screen name="ProductDetails" component={ProductDetails} />
//     <Stack.Screen name="Menu" component={Menu} />
//     <Stack.Screen name="Cart" component={Cart} />
//    <Stack.Screen name="Checkout" component={Checkout} />
//<Stack.Screen name="TrendingProduct" component={TrendingProduct} />
//<Stack.Screen name="TodayOffers" component={TodayOffers} />
//<Stack.Screen name="Subscribe" component={Subscribe} />
//<Stack.Screen name="SearchProduct" component={SearchProduct} />
//<Stack.Screen name="ChooseLocation" component={ChooseLocation} />
//<Stack.Screen name="SubscribeSuccess" component={SubscribeSuccess} />
//<Stack.Screen name="RequestDelivery" component={RequestDelivery} />
//<Stack.Screen name="MyOrders" component={MyOrders} />
//<Stack.Screen name="OrderDetails" component={OrderDetails} />
//<Stack.Screen name="Mysubscription" component={Mysubscription} /> 
//<Stack.Screen name="DeleteSubscription" component={DeleteSubscription} /> 
//<Stack.Screen name="PermanentModify" component={PermanentModify} /> 
//<Stack.Screen name="ModifyTemporary" component={ModifyTemporary} />
//<Stack.Screen name="PauseSubscription" component={PauseSubscription} /> 
//<Stack.Screen name="Wallet" component={Wallet} /> 
//<Stack.Screen name="Suggestion" component={Suggestion} />
//   </>) : (<>
//     <Stack.Screen name="ChooseLanguage" component={ChooseLanguage} />
//     {/* <Stack.Screen name="SendOTPTwo" component={SendOTPTwo} /> */}
//     <Stack.Screen name="SendOTP" component={SendOTP} />
//     <Stack.Screen name="VerifyPhone" component={VerifyPhone} />
//     <Stack.Screen name="LocationPermission" component={LocationPermission} />
// <Stack.Screen name="PackingLove" component={PackingLove} />
//   </>)
// }

