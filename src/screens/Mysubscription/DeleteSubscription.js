import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import KiloBagHeader from './../../components/KiloBagHeader/KiloBagHeader';
import { Colors } from './../../Theme/Colors';
import { ModalStyle } from '../../Styles/ModalStyle/ModalStyle';
import Modals from '../../components/Modals/Modals';

export default function DeleteSubscription() {
    const [modalVisible, setModalVisible] = useState(false);
    
    const SuccessDelete = () => {
        setModalVisible(true)
        setTimeout(() => {
            setModalVisible(false)
        }, 3000);
    }
  return (
    <SafeAreaView>
        <KiloBagHeader title="Delete Subscription" search={true} image={true} />
        <View style={{padding: 20}}>
            <View style={DeleteSubStyle.ProductView}>
                <View style={DeleteSubStyle.ImgView}>
                    <Image style={{height: 69, width: 63}} source={require('../../../assets/Milk.png')} />
                </View>
                <View style={{paddingLeft: 20}}>
                    <Text style={{fontSize: 12, fontWeight: '500', color: '#303030', marginBottom: 4}}>Amul Taaza Milk</Text>
                    <Text style={{fontSize: 13, fontWeight: '500', color: '#454545', marginBottom: 4}}>Subscription: <Text style={{ color: '#2E6CA5'}}>Daily</Text></Text>
                    <Text style={{fontSize: 12, fontWeight: '500', color: 'black'}}>$21 <Text style={{ color: Colors.LightGreen}}>250ml</Text></Text>
                    <Text style={{fontSize: 12, fontWeight: '500', color: 'black', marginTop: 4}}>Qty: 2</Text>
                </View>
            </View>
            <View style={{paddingTop: 20}}>
                <Text  style={{fontSize: 15, fontWeight: '500', color: 'black', marginBottom: 5}}>Cancellation Reason</Text>
                <TextInput  multiline={true} style={DeleteSubStyle.Inputs} />

                <Pressable onPress={() => SuccessDelete()} style={[ModalStyle.ButtonsCommonStyle, {alignSelf: 'flex-end', height: 35, width: 118, marginTop: 10}]}>
                <Text style={{fontSize: 13, fontWeight: '500', color: 'white',}}>Submit</Text>
                </Pressable>
            </View>
        </View>
        <Modals isdeleted={true} modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </SafeAreaView>
  )
}

export const DeleteSubStyle = StyleSheet.create({
    ProductView:{
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: Colors.SectionBorderColor,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    ImgView:{
        height: 88,
        width: 88,
    },
    Inputs:{
        borderColor: Colors.SectionBorderColor,
        borderWidth: 1,
        height: 116,
        width: '100%',
        borderRadius: 10,
        justifyContent: "flex-start",
        textAlignVertical: 'top'
    }
})