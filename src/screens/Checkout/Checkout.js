import { View, Text, SafeAreaView, Pressable,Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { CategoryStyle } from '../../Styles/CategoryStyle/CategoryStyle';
import { Colors } from './../../Theme/Colors';
import Octicons from 'react-native-vector-icons/Octicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import CheckBox from '@react-native-community/checkbox';
import { Avatar, Icon, ListItem } from "@rneui/themed";
import { CheckoutStyle } from './../../Styles/CheckoutStyle/CheckoutStyle';

const Checkout = () => {
    const [isSelected, setSelection] = useState(false);
    const [expandedInstant, setExpandedInstant] = React.useState(null);

  return (
    <SafeAreaView>
        <View style={[CategoryStyle.header, { backgroundColor: Colors.LightGreen, paddingVertical: 30}]}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Pressable onPress={() => navigation.goBack()}>
                    <Octicons name='chevron-left' style={{fontSize: 25 , color: Colors.White}} />
                </Pressable>
                <Text style={{ fontSize: 19, marginLeft: 15, fontWeight: '500', color: Colors.White}}>Checkout </Text>
                
            </View>
        </View>

        <ScrollView style={{paddingHorizontal: 20}}>
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

            <Text style={{color: 'black', fontSize: 16, marginVertical: 20}}>Payment Method</Text>
            <Pressable style={CheckoutStyle.LocationView}>
                <View style={{flexDirection: 'row'}}>
                    <View style={CheckoutStyle.CardIconBox}>
                        <Text  style={{color: 'white', fontSize: 13, fontWeight: '400'}}>Visa</Text>
                    </View>
                    <View style={{paddingLeft: 20}}>
                        <Text style={{color: 'black', fontSize: 13, fontWeight: '500'}}>Visa Classic</Text>
                        <Text style={{color: 'black', fontSize: 13, fontWeight: '500', paddingTop: 5}}>**** **** **** 5664</Text>
                    </View>
                </View>
                <Octicons name='chevron-right' style={{fontSize: 30 , color: Colors.LightGreen}} />
            </Pressable>

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
 
        </ScrollView>
    </SafeAreaView>
  )
}

export default Checkout;

