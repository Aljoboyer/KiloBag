import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image , Pressable, TextInput} from 'react-native'
import React, { useState } from 'react'
import KiloBagHeader from '../../components/KiloBagHeader/KiloBagHeader';
import { CategoryStyle } from '../../Styles/CategoryStyle/CategoryStyle';
import BottomTab from './../../components/BottomTab';
import { Colors } from './../../Theme/Colors';
import Octicons from 'react-native-vector-icons/Octicons'
import { SubscribeStyle } from './../../Styles/SubscribeStyle/SubscribeStyle';
import DateTimePicker  from '@react-native-community/datetimepicker';
import Entypo from 'react-native-vector-icons/Entypo'
import { CartItemstyles } from '../../Styles/CartStyles/CartStyles';
import CustomButton from './../../components/CustomButton';
import { CheckoutStyle } from './../../Styles/CheckoutStyle/CheckoutStyle';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Avatar, Icon, ListItem } from "@rneui/themed";
import AntDesign from 'react-native-vector-icons/AntDesign'
import CheckBox from '@react-native-community/checkbox';

const SubscribeEvent = ({title, setSelected, selected}) => {
    return (
        <Pressable onPress={() => setSelected(title)} style={selected == title ? SubscribeStyle.SelectedStyle : SubscribeStyle.NotSelectedStyle}>
            <Text style={selected == title ? SubscribeStyle.NotSelectedText : SubscribeStyle.NotSelectedText}>{title}</Text>
        </Pressable>
    )
}
export default function Subscribe() {
    const [selected, setSelected]= useState('');
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const isbuy = true;
    const [expandedInstant, setExpandedInstant] = React.useState(null);
    const [isSelected, setSelection] = useState(false);

    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate;
      setShow(false);
      setStartDate(currentDate);
    };

    const ShowPicker = (mode) => {
      setShow(true);
      setMode(mode);
    }

  return (
    <SafeAreaView style={{ flex: 1, }}>
    <KiloBagHeader  title='Subscribe' search={true} image={true}/>
     <ScrollView style={CategoryStyle.container}>
        <View style={SubscribeStyle.ProductView}>
            <View style={{flexDirection: 'row'}}>
                <View style={{height: 80, width: 80}}>
                    <Image style={{height: '100%', width: '100%'}} source={require('../../../assets/Milk.png')} />
                </View>

                <View style={{paddingLeft: 10}}>
                    <Text style={{fontSize: 14, fontWeight: '500', color: 'black'}}>Amul Taaza Milk</Text>
                    <View style={{flexDirection: 'row', marginVertical: 10}}>
                        <Text style={{color: 'black', fontSize: 15, fontWeight: '500', }}>$21</Text>
                        <Pressable>
                            <Text style={{color: Colors.LightGreen, fontSize: 14, marginLeft: 15, }}>2500ml <Octicons name='chevron-down' style={{ color: Colors.LightGreen, fontSize: 12, }} /></Text>
                        </Pressable>
                    </View>
                    <Text style={{color: Colors.LightGreen, fontSize: 12, fontWeight: '600'}}>Subscribe @20</Text>
                 
                </View>
            </View>
          
        </View>

        <View style={SubscribeStyle.DeliverySelectView}>
            <Text style={{fontSize: 15, fontWeight: '500', color: Colors.LightGreen, marginBottom: 10}}>Select Delivery</Text>
            <View style={SubscribeStyle.DeliveryEventView}>
                <SubscribeEvent selected={selected} setSelected={setSelected} title="Daily"/>
                <SubscribeEvent selected={selected} setSelected={setSelected} title="Alternate Day"/>
                <SubscribeEvent selected={selected} setSelected={setSelected} title="Every 2 days"/>
                <SubscribeEvent selected={selected} setSelected={setSelected} title="Weekly"/>
                <SubscribeEvent selected={selected} setSelected={setSelected} title="Monthly"/>
            </View>
        </View>

        <View style={SubscribeStyle.SubscribeDateView}>
            <View>
                <Text style={{color: Colors.LightGreen, fontSize: 15, fontWeight:'500'}}>Subscription Start Date</Text>
                <Text  style={{color: 'black', fontSize: 13, fontWeight:'500', paddingTop: 5}}>{startDate.toLocaleDateString()}</Text>
            </View>
            <Pressable  onPress={() => ShowPicker('date') } style={{alignSelf: 'flex-end'}}>
                <Image source={require('../../../assets/calender.png')} />
            </Pressable>
            {show && (
                <DateTimePicker
                testID="dateTimePicker"
                value={startDate}
                mode={mode}
                is24Hour={true}
                onChange={onChange}
                />
            )}
        </View>
        
        <View style={SubscribeStyle.DiscountCodeView}>     
            <Text style={SubscribeStyle.ApplyCouponText}>Apply Coupons</Text>

            <View style={SubscribeStyle.PromoView}>
                <TextInput placeholder='Enter promo code' style={[SubscribeStyle.InputStyle, {borderColor: '#C2C2C2'}]} />
                <CustomButton title='Apply' customStyles={[SubscribeStyle.ButtonStyle, {backgroundColor: Colors.LightGreen}]} />
            </View>
        </View>

        <Pressable style={[CheckoutStyle.LocationView, {borderColor: Colors.SectionBorderColor}]}>
                <View style={CheckoutStyle.LocationIconBox}>
                     <MaterialIcons name='location-on' style={{ fontSize: 40, color: Colors.White }} />
                </View>
                <View>
                    <Text style={{color: 'black', fontSize: 13, fontWeight: '500'}}>BTM  Layout, Bengaluru, Karnataka</Text>
                    <Text style={{color: '#535353', fontSize: 11, fontWeight: '500', paddingTop: 5}}>Pin - 537673</Text>
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

 
         <CustomButton title='Subscribe' customStyles={{alignSelf: 'center', width: '95%', marginBottom: 5, marginTop: 30}}/>
       
     </ScrollView> 
     <BottomTab/>
 </SafeAreaView>
  )
}

