import { View, Text, SafeAreaView, TextInput } from 'react-native'
import React, { useState } from 'react'
import KiloBagHeader from './../../components/KiloBagHeader/KiloBagHeader';
import CustomButton from './../../components/CustomButton';
import ErrorText from './../../components/ErrorText/ErrorText';


const InputContainer = ({label, OnChangeText, keyboardType}) => {
    return (
        <View style={{marginBottom: 15}}>
            <Text style={{ fontSize: 14, fontWeight: '400', color: 'black'}}>{label}</Text>
            <TextInput keyboardType={keyboardType} style={{height: 45, borderRadius: 10, borderColor: '#C8C8C8', borderWidth: 1, marginTop: 10}} onChangeText={OnChangeText} />
        </View>
    )
}
export default function RequestDelivery() {
    const [deliveryData, setDeliveryData] = useState({});
    const [emailErr, setEmailErr] = useState(null)
    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const numReg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

  return (
    <SafeAreaView>
        <KiloBagHeader title="Request Delivery" />
        <View style={{padding: 25}}>
            <InputContainer
            
            keyboardType='number-pad'
            label='Phone Number' OnChangeText={(text) => { 
                if(text){
                    if (numReg.test(text.toLowerCase())) {
                        setEmailErr(null)
                        console.log('email')
                      }
                      else {
                        setEmailErr('Enter valid email such as example@email.com')
                        console.log('not email')
                      }
                }else{setEmailErr(null)}
                setDeliveryData({...deliveryData, phone: text})
            }} />

            <InputContainer label='Email ID' OnChangeText={(text) => 
             {
                if(text){
                    if (reg.test(text.toLowerCase())) {
                        setEmailErr(null)
                        console.log('email')
                      }
                      else {
                        setEmailErr('Enter valid email such as example@email.com')
                        console.log('not email')
                      }
                }else{setEmailErr(null)}
              setDeliveryData({...deliveryData, email: text})
            }} />
            {emailErr && <ErrorText errors={emailErr} Customstyles={{marginBottom: 10}} />}

            <InputContainer label='Location' OnChangeText={(text) => setDeliveryData({...deliveryData, Location: text})} />

            <CustomButton title='Request Delivery' customStyles={{width: 180, alignSelf: 'center', marginTop: 20}} onPress={() => {
                    console.log('hit', deliveryData)}} /> 
        </View>
    </SafeAreaView>
  ) 
}