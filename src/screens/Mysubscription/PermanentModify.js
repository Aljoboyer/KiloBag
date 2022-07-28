import { View, Text, SafeAreaView, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import KiloBagHeader from '../../components/KiloBagHeader/KiloBagHeader'
import { Colors } from './../../Theme/Colors';
import { Image } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
import { ModalStyle } from './../../Styles/ModalStyle/ModalStyle';
import { ModifySubStyle } from './../../Styles/ModifyStyle/ModifyStyle';


export default function PermanentModify() {
  return (
    <SafeAreaView>
        <KiloBagHeader title="Modify Permanently" search={true} image={true} />
       <View style={{padding: 20}}>
            <View style={ModifySubStyle.ProductView}>
                <View style={ModifySubStyle.ImgView}>
                    <Image style={{height: 69, width: 63}} source={require('../../../assets/Milk.png')} />
                </View>
                <View >
                    <Text style={{fontSize: 12, fontWeight: '500', color: '#303030', marginBottom: 4}}>Amul Taaza Milk</Text>
                    <Text style={{fontSize: 13, fontWeight: '500', color: '#454545', marginBottom: 4}}>Subscription: <Text style={{ color: '#2E6CA5'}}>Daily</Text></Text>
                    <Text style={{fontSize: 12, fontWeight: '500', color: 'black'}}>$21 <Text style={{ color: Colors.LightGreen}}>250ml</Text></Text>
                    <Text style={{fontSize: 12, fontWeight: '500', color: 'black', marginTop: 4}}>Qty: 2</Text>
                </View>

                <View style={{ justifyContent: 'flex-end', paddingBottom: 10 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Pressable style={{ backgroundColor: Colors.LightGreen, padding: 2, borderRadius: 2 }}>
                        <Entypo name='minus' style={{ color: 'white', fontSize: 16, fontWeight: '600' }} />
                        </Pressable>
                        <Text style={{ marginHorizontal: 12, color: 'black' }}>2</Text>
                        <Pressable style={{ backgroundColor: Colors.LightGreen, padding: 2, borderRadius: 2 }}>
                            <Entypo name='plus' style={{ color: 'white', fontSize: 16, fontWeight: '600', }} />
                        </Pressable>
                    </View>
                </View>
            </View>
            <Pressable  style={[ModalStyle.ButtonsCommonStyle, {alignSelf: 'flex-end', height: 35, width: 118, marginTop: 10}]}>
                <Text style={{fontSize: 13, fontWeight: '500', color: 'white',}}>Save</Text>
            </Pressable>
            
       </View>
    </SafeAreaView>
  )
}

