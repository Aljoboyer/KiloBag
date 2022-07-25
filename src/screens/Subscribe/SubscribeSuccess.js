import { View, Text, SafeAreaView, Image, Pressable, ScrollView } from 'react-native'
import React from 'react'
import KiloBagHeader from './../../components/KiloBagHeader/KiloBagHeader';
import { Colors } from './../../Theme/Colors';
import Octicons from 'react-native-vector-icons/Octicons'

export default function SubscribeSuccess() {
  return (
    <SafeAreaView style={{flex: 1,}}>
        <KiloBagHeader cross={true} search={true} image={true}/>
        <ScrollView style={{paddingHorizontal: 25}}>
            <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('../../../assets/SubscribeSuccess.png')} />
                <Text style={{fontSize: 18, fontWeight: '500', color: Colors.LightGreen}}>Subscription Successful</Text>
                <Text style={{fontSize: 13, fontWeight: '400', color: '#232323', textAlign: 'center', paddingTop: 10}}>Your subscription starts from 12/04/2022.
                Please recharge your wallet for 
                uninteruppted services.</Text>
            </View>
        </ScrollView>
        <View style={{paddingHorizontal: 25, paddingBottom: 30}}>
            <Pressable style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderColor: Colors.LightGreen, borderWidth: 1, borderRadius: 10, paddingHorizontal: 15, paddingVertical:15}}>
                    <View style={{flexDirection: 'row', alignItems: 'center',}}>
                        <Image source={require('../../../assets/wallet.png')} />
                        <View style={{paddingLeft: 10}}>
                            <Text style={{fontSize: 13, fontWeight: '600', color: '#353535', paddingBottom: 5}}>Wallet Balance {"  "}<Text style={{color: Colors.LightGreen,}}>$500</Text></Text>

                            <Text style={{fontSize: 13, fontWeight: '600', color: '#0076B9'}}>Add money to your wallet </Text>
                        </View>
                    </View>

                    <Octicons name='chevron-right' style={{fontSize: 30 , color: Colors.LightGreen}} />

            </Pressable>
        </View>
    </SafeAreaView>
  )
}