import { View, Text, SafeAreaView, Image, Pressable , ScrollView} from 'react-native'
import React, { useState } from 'react'
import KiloBagHeader from './../../components/KiloBagHeader/KiloBagHeader';
import { Colors } from './../../Theme/Colors';
import Entypo from 'react-native-vector-icons/Entypo'
import { ModifySubStyle } from './../../Styles/ModifyStyle/ModifyStyle';
import { ModalStyle } from './../../Styles/ModalStyle/ModalStyle';
import Modals from './../../components/Modals/Modals';
import DateTimePicker  from '@react-native-community/datetimepicker';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

export default function ModifyTemporary() {
    const [modalVisible, setModalVisible] = useState(false);
    const [show, setShow] = useState(false);
    const [dates, setDates] = useState(null);
    const Success = () => {
        setModalVisible(true)
        setTimeout(() => {
            setModalVisible(false)
        }, 2000);
    }
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setStartDate(currentDate);
      };
  return (
    <SafeAreaView style={{flex: 1}}>
        <KiloBagHeader title="Pause Subscription" search={true} image={true} />
        <ScrollView >
           
           <View style={{padding: 20, flex: 1}}>
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
                </View>
                <View>
                    <Text style={{fontSize: 15, fontWeight: '500', color: 'black', marginTop: 20}}>Select Dates</Text>
                    
                    <Text style={ModifySubStyle.DateLabel}>From Date</Text>
                    <View style={ModifySubStyle.DateView}>
                        <Text>{dates ?dates :  new Date().toLocaleDateString()}</Text>
                        <Pressable onPress={() => setShow(!show)}><Image source={require('../../../assets/calender.png')} /></Pressable>
                    </View>

                    <Text style={ModifySubStyle.DateLabel}>End Date</Text>
                    <View style={ModifySubStyle.DateView}>
                        <Text>{dates ?dates :  new Date().toLocaleDateString()}</Text>
                        <Pressable><Image source={require('../../../assets/calender.png')} /></Pressable>
                    </View>
                </View>
                {
                show &&  <View >
                    <Calendar
                        onDayPress={day => {
                            console.log('selected day', day);
                            setDates(day.dateString)
                            setShow(false)
                        }}
                        />
                </View>
            }
                <View style={{flexDirection: 'row',  justifyContent: 'flex-end',  marginTop: 50}}>
                    <Pressable  style={[ModalStyle.ButtonsCommonStyle, {alignSelf: 'flex-end', height: 44, width: 125, backgroundColor: 'white', borderColor: Colors.LightGreen, borderWidth: 1, marginRight: 20}]}>
                    <Text style={{fontSize: 13, fontWeight: '500', color:  Colors.LightGreen,}}>Cancel</Text>
                    </Pressable>
                    <Pressable onPress={() => Success()}  style={[ModalStyle.ButtonsCommonStyle, {alignSelf: 'flex-end', height: 44, width: 125,}]}>
                    <Text style={{fontSize: 13, fontWeight: '500', color: 'white',}}>Save</Text>
                    </Pressable>
                </View>
           </View>
       </ScrollView>

       <Modals isModifyed={true} modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </SafeAreaView>
  )
}