import { View, Text, SafeAreaView, Image, Pressable } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Colors } from './../../Theme/Colors';
import { MapView } from 'react-native-maps';

export default function Errors() {
  return (
    <SafeAreaView>
        <View style={{ alignItems: 'center' , justifyContent: 'center', paddingTop: 50}}>
            <Image source={require('../../../assets/PageNotFound.png')} />
            <View style={{alignItems: 'center', paddingHorizontal: 70}}>
                <Text style={{fontSize: 25, fontWeight: '700', color: '#363636'}}>PAGE NOT FOUND</Text>
                <Text style={{marginVertical: 10, fontSize: 13, fontWeight: '400', textAlign: 'center'}}>Sorry, we couldn’t find the page you requested.</Text>
                <Pressable style={{justifyContent: 'center', alignItems: 'center', width: 118, height: 45, backgroundColor: Colors.LightGreen}}>
                    <Text style={{fontSize: 15, fontWeight: '500', color: 'white', justifyContent: 'center'}}> <AntDesign name='arrowleft' style={{fontSize: 20 , color: 'white'}} /> Go Back</Text>
                </Pressable>
            </View>
        </View>
    </SafeAreaView>
  )
}