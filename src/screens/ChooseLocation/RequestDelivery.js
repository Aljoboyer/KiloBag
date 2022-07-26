import { View, Text, SafeAreaView, TextInput } from 'react-native'
import React, { useState } from 'react'
import KiloBagHeader from './../../components/KiloBagHeader/KiloBagHeader';
import CustomButton from './../../components/CustomButton';


const InputContainer = ({label, OnChangeText}) => {
    return (
        <View style={{marginBottom: 15}}>
            <Text style={{ fontSize: 14, fontWeight: '400', color: 'black'}}>{label}</Text>
            <TextInput style={{height: 45, borderRadius: 10, borderColor: '#C8C8C8', borderWidth: 1, marginTop: 10}} onChangeText={OnChangeText} />
        </View>
    )
}
export default function RequestDelivery() {
    const [deliveryData, setDeliveryData] = useState({})
    
  return (
    <SafeAreaView>
        <KiloBagHeader title="Request Delivery" />
        <View style={{padding: 25}}>
            <InputContainer label='Phone Number' OnChangeText={(text) => setDeliveryData({...deliveryData, phone: text})} />

            <InputContainer label='Email ID' OnChangeText={(text) => setDeliveryData({...deliveryData, email: text})} />
            
            <InputContainer label='Location' OnChangeText={(text) => setDeliveryData({...deliveryData, Location: text})} />

            <CustomButton title='Request Delivery' customStyles={{width: 180, alignSelf: 'center', marginTop: 20}} onPress={() => {
                    console.log('hit', deliveryData)
            }} /> 
        </View>
    </SafeAreaView>
  )
}