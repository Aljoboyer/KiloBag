import { View, Text, SafeAreaView, Pressable,Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { CategoryStyle } from '../../Styles/CategoryStyle/CategoryStyle';
import { Colors } from './../../Theme/Colors';
import Octicons from 'react-native-vector-icons/Octicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import CheckBox from '@react-native-community/checkbox';
import { Avatar, Icon, ListItem } from "@rneui/themed";
import { CheckoutStyle } from './../../Styles/CheckoutStyle/CheckoutStyle';
import CustomButton from '../../components/CustomButton';
import KiloBagHeader from './../../components/KiloBagHeader/KiloBagHeader';

const Checkout = () => {
    const [isSelected, setSelection] = useState(false);
    const [expandedInstant, setExpandedInstant] = React.useState(null);
    const PaymentOption = ['UPI','Cards','Netbanking', 'PhonePe', 'PayPal', 'Wallet'];
    const [gender, setGender] = useState(null);

  return (
    <SafeAreaView style={{ flex: 1}}>
        <KiloBagHeader title='Checkout'/>

        <ScrollView style={{paddingHorizontal: 20, paddingBottom: 40}}>
             <Text style={{color: 'black', fontSize: 16, marginVertical: 20}}>Delivery Location <Text style={{color: 'black', fontSize: 13, color: Colors.LightGreen}}>for instant</Text></Text>
            <Pressable style={CheckoutStyle.LocationView}>
                <View style={CheckoutStyle.LocationIconBox}>
                     <MaterialIcons name='location-on' style={{ fontSize: 40, color: Colors.White }} />
                </View>
                <View>
                    <Text style={{color: 'black', fontSize: 13, fontWeight: '500'}}>BTM  Layout, Bengaluru, Karnataka</Text>
                    <Text style={{color: '#535353', fontSize: 11, fontWeight: '500', paddingTop: 5}}>Pin - 537673</Text>
                </View>
                <Octicons name='chevron-right' style={{fontSize: 30 , color: Colors.LightGreen}} />
            </Pressable>

            <View style={{marginTop: 30}}>
                <Text style={{fontSize: 14, color: 'black', marginBottom: 15}}>Payment Method</Text>
                {
                PaymentOption.map(option => {
                const selected = option === gender
                    return (
                    <Pressable onPress={() => setGender(option)} style={CheckoutStyle.radioContent}>
                        <View style={[CheckoutStyle.outerCircle, selected && CheckoutStyle.selectedOuterCircle]}>
                            <View style={[CheckoutStyle.innerCircle, selected && CheckoutStyle.selectedInnerCircle]}></View>
                        </View>
                        <Text style={{fontSize: 14, fontWeight: '500', color: 'black'}}>{option}</Text>
                    </Pressable>
                    )
                })
                }
            </View>

            <View style={CheckoutStyle.DeliveryContainer}>
                <ListItem.Accordion
                    content={
                    <>
                        <ListItem.Content >
                            <ListItem.Title style={{color: Colors.LightGreen, }}>Delivery Instructions</ListItem.Title>

                        </ListItem.Content>
                    </>
                }
                isExpanded={expandedInstant}
                onPress={() => {
                    setExpandedInstant(!expandedInstant);
                }}
                icon={ <AntDesign name='caretdown' style={{fontSize: 18 , color: Colors.LightGreen}} />}
                noRotation
                >
                    <ListItem>
                        <View >
                        <View style={CheckoutStyle.CheckBoxView}>
                            <CheckBox
                                value={isSelected}
                                onValueChange={setSelection}
                                style={{alignSelf: "flex-start",}}
                            />
                            <Text style={CheckoutStyle.InstructionText}>Return the Bag</Text>
                        </View>
                        <View style={CheckoutStyle.CheckBoxView}>
                            <CheckBox
                                value={isSelected}
                                onValueChange={setSelection}
                                style={{alignSelf: "flex-start",}}
                            />
                            <Text style={CheckoutStyle.InstructionText}>No Contact Delivery</Text>
                        </View>
                        <View style={CheckoutStyle.CheckBoxView}>
                            <CheckBox
                                value={isSelected}
                                onValueChange={setSelection}
                                style={{alignSelf: "flex-start",}}
                            />
                            <Text style={CheckoutStyle.InstructionText}>Beware of Pets</Text>
                        </View>
                        </View>
                    </ListItem>
                </ListItem.Accordion>
            </View>
            <View style={CheckoutStyle.PlaceOrderContainer}>
                <View style={CheckoutStyle.PlaceOrderView}>
                    <View>
                        <Text style={{fontSize: 15, fontWeight: '400', color: 'black'}}>Total</Text>
                        <Text  style={{fontSize: 17, fontWeight: '500', color: 'black', marginTop: 5}}>$452</Text>
                    </View>
                    <CustomButton title="Place Order" customStyles={CheckoutStyle.PlaceOrderBtn} />
                </View>
        </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Checkout;

