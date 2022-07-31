import { View, Text, TextInput, Pressable, SafeAreaView, } from 'react-native'
import React, { useState } from 'react'
import Octicons from 'react-native-vector-icons/Octicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import CustomButton from '../../../components/CustomButton'
import { VerifyPhonestyles } from '../../../Styles/Auth/VerifyPhoneStyle'
import { Colors } from './../../../Theme/Colors';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import Modals from './../../../components/Modals/Modals';

const VerifyPhone = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
    <SafeAreaView  style={VerifyPhonestyles.container}>
        <View style={{flex: 1}}>
            <View style={VerifyPhonestyles.navNtitle}>
                <Pressable onPress={() => navigation.goBack()}>
                    <Octicons name='chevron-left' style={{ color: 'black', fontSize: 30 , paddingLeft: 10}} />
                </Pressable>

                <Text style={VerifyPhonestyles.title}>Verify Phone</Text>
            </View>
            <View style={VerifyPhonestyles.CodeSentView}>
            <Text>Code is sent to <Text style={{ fontWeight: 'bold' }}>+91 7839462944</Text></Text>
            <MaterialCommunityIcons name='pencil' style={{ color: 'black', fontSize: 15, paddingLeft: 5 }} />
            </View>
            <Text style={{ color: Colors.Black, fontSize: 18, }}>Enter OTP</Text>
            <View style={VerifyPhonestyles.InputContainer}>
            <OTPInputView
                pinCount={4}
                style={VerifyPhonestyles.otpView}
                codeInputFieldStyle={VerifyPhonestyles.underlineStyleBase}
                onCodeFilled={value => {
                console.log(value);
                    }}
                />
            </View>
            
            <View style={{paddingHorizontal: 25}}>
            <Text style={VerifyPhonestyles.ResendCodeText}>Didn’t receive code? <Text style={{fontWeight: 'bold'}}>Request again</Text> or <Text style={{fontWeight: 'bold'}}>Get via Call</Text></Text>
            <CustomButton onPress={() => {
                setModalVisible(!modalVisible)
            }}
                title='Verify and Proceed'
            />
            </View>
            <Modals setModalVisible={setModalVisible} modalVisible={modalVisible} loading={true} />
        </View>
    </SafeAreaView>
  
    )
}


export default VerifyPhone