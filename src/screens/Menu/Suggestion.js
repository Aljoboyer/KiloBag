import { View, Text, SafeAreaView, Pressable, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import KiloBagHeader from '../../components/KiloBagHeader/KiloBagHeader'
import { CheckoutStyle } from './../../Styles/CheckoutStyle/CheckoutStyle';
import { ModalStyle } from './../../Styles/ModalStyle/ModalStyle';
import { DeleteSubStyle } from '../Mysubscription/DeleteSubscription';

export default function Suggestion() {
    const [options, setOptions] = useState(null);
    const Suggest=['Suggest a Product','Feedback']
  return (
    <SafeAreaView style={{flex: 1}}>
      <KiloBagHeader title="Suggestions" />
      <ScrollView style={{flex: 1, padding: 25}}>
        {
        Suggest.map(option => {
            const selected = option === options
                return (
                    <View>
                <Pressable onPress={() => setOptions(option)} style={CheckoutStyle.radioContent}>
                    <View style={[CheckoutStyle.outerCircle, selected && CheckoutStyle.selectedOuterCircle]}>
                        <View style={[CheckoutStyle.innerCircle, selected && CheckoutStyle.selectedInnerCircle]}></View>
                    </View>
                    <Text style={{fontSize: 14, fontWeight: '500', color: 'black'}}>{option}</Text>
                </Pressable>
                {
                    option == options &&  <TextInput  multiline={true} style={[DeleteSubStyle.Inputs, {marginTop:10}]} />
                }
                </View>
                )
            })
                }
            
      </ScrollView>
        {
            options && <View style={{paddingHorizontal: 30}}>
            <Pressable style={[ModalStyle.ButtonsCommonStyle, {height: 45, width: '100%', marginVertical: 20, borderRadius: 10}]}>
                <Text style={{fontSize: 15, fontWeight: '600', color: 'white'}}>Submit</Text>
            </Pressable>
        </View>
        }
    </SafeAreaView>
  )
}