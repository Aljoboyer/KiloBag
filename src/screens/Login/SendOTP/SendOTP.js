import { View, Text, Image, StyleSheet, Dimensions, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomButton from '../../../components/CustomButton'
import CheckBox from '@react-native-community/checkbox';
import { CognitoIdentityProvider } from "@aws-sdk/client-cognito-identity-provider";
import { Auth } from 'aws-amplify';
import { SendOTPStyle } from './../../../Styles/Auth/SendOTPStyle';
import { Colors } from './../../../Theme/Colors';
import { CognitoUserPool, CognitoUserAttribute, CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import AWS from 'aws-sdk';
import { useNavigation } from '@react-navigation/native';

const CognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider();


const SendOTP = ({ navigation }) => {
    const [isSelected, setSelection] = useState(false);
    const screen = Dimensions.get("screen");
    const region = "ap-south-1";
    const provider = new CognitoIdentityProvider({ region });
    const [mobileNumber, setMobileNumber] = React.useState();
    const [countryCode, setCountryCode] = React.useState();

    const poolData = {
        UserPoolId: 'ap-south-1_FNUH9In81',
        ClientId: '351ld38felatf5k2rkfgqqsnhf',
        region: 'ap-south-1',
        AuthFlow: 'CUSTOM_AUTH',
        authenticationFlowType: 'CUSTOM_AUTH',
      }


    return (
    <ScrollView style={SendOTPStyle.OtpMainContainer}>
        <View  style={SendOTPStyle.ImageView}>
            <Image style={{ height: 240, width: 260, }} source={require('../../../../assets/otpimg.png')}/>
        </View>
        <View style={{ marginTop: 40, }}>
            <Text style={{ color: Colors.LightGreen, fontSize: 20, fontWeight: '600',  marginBottom: 10 }} >Login or Register</Text>
        </View>
        <View style={{ marginTop: 15, }}>
            <Text style={{ color: '#343333', fontSize: 14, fontWeight: '500' }} >Enter Mobile Number</Text>
        </View> 
        <View style={SendOTPStyle.inputContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'flex-end', }}>
                <View >
                    <Text style={{ color: '#000' , fontSize: 12}}>Country Code</Text>
                    <TextInput
                        // value='+91'
                        defaultValue='+91' 
                        style={SendOTPStyle.OtpInputsCode}
                        onChangeText={num => setCountryCode(num)}
                        keyboardType='number-pad'
                        maxLength={3}
                    />
                </View>
                <View >
                    <TextInput style={SendOTPStyle.OtpNumInputs}
                        value={mobileNumber}
                        onChangeText={num => setMobileNumber(num)}
                        placeholder='Mobile Number'
                        keyboardType='number-pad'
                        maxLength={10}
                    />
                </View>
            </View>
        </View>
        <View style={SendOTPStyle.CheckBoxContainer}>
              <CheckBox
                  value={isSelected}
                  onValueChange={setSelection}
                  style={{alignSelf: "flex-start",}}
              />
              <View style={{ justifyContent: 'flex-start', }}>
                  <Text style={{ fontSize: 12, color: '#2A2A2A', fontWeight: '500', }}>By clicking on ‘Send OTP’, I agree to the
                      <Text style={{ fontWeight: '700' }}> Terms and Condition & Privacy Policy</Text>
                  </Text>
              </View>
        </View>
        <CustomButton title="Send OTP" onPress={() => navigation.navigate('VerifyPhone')} />
    </ScrollView>
    )
}

export default SendOTP;
