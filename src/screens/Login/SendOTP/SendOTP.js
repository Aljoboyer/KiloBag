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

const CognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider();


const SendOTP = ({ navigation }) => {
  const [isSelected, setSelection] = useState(false);

    const screen = Dimensions.get("screen");
    const region = "ap-south-1";
    const provider = new CognitoIdentityProvider({ region });
    const [mobileNumber, setMobileNumber] = React.useState();
    const [countryCode, setCountryCode] = React.useState();
    const [passWord, setPassWord] = React.useState();
    const [check, setCheck] = React.useState();

    // const UserPoolId = 'ap-south-1_FNUH9In81'
    // const ClientId = '351ld38felatf5k2rkfgqqsnhf'

    // const poolData = {
    //     UserPoolId,
    //     ClientId
    // }
    const poolData = {
        UserPoolId: 'ap-south-1_FNUH9In81',
        ClientId: '351ld38felatf5k2rkfgqqsnhf',
        region: 'ap-south-1',
        AuthFlow: 'CUSTOM_AUTH',
        authenticationFlowType: 'CUSTOM_AUTH',
      }
      const userPool = new CognitoUserPool(poolData);
      const userData = { Username: '+8801616306215', Password: 'Pa$sw0rd',  Pool: userPool };
      const cognitoUser = new CognitoUser(userData);
   const createUserInAmazonCognito = () => {
        console.log('create user')
    
        //Fill required atributes
        const attributeList = [];

        const attributeGivenName = new CognitoUserAttribute({
          Name: 'given_name',
          Value: '+8801824089515'
        });
    
        attributeList.push(attributeGivenName);
    
        var cognitoUser;
        //Call SignUp function
        userPool.signUp('+8801824089515', 'Pa$sw0rd', attributeList, null, (err, result) => {
          if (err) {
            console.log('Error at signup ', err);
            return;
          }
          cognitoUser = result.user;
          console.log('cognitoUser', cognitoUser)
        });
    
      }

    const  signIn = () => {
        const authenticationDetails = new AuthenticationDetails({
          Username: '+8801616306215',
          Password: 'Pa$sw0rd'
        });
        const cognitoUser = new CognitoUser({
          Username: '+8801616306215',
          Pool: userPool
        });
        cognitoUser.setAuthenticationFlowType('CUSTOM_AUTH');
        cognitoUser.initiateAuth(authenticationDetails, {
          onSuccess: (result) => {
            console.log('onSuccess', result)
            console.log('access token + ' + result.getAccessToken().getJwtToken());
          },
    
          onFailure: (err) => {
            console.log('onFailure', err)
          },
          mfaRequired: (codeDeliveryDetails) => {
            console.log('mfaRequired', codeDeliveryDetails)
          }
        });
      }

    const LonginHandler = () => {
    
      const authenticationData = { Username: '+8801616306215', Password: 'Pa$sw0rd' };
      const authenticationDetails = new AuthenticationDetails(authenticationData);
    
      cognitoUser.setAuthenticationFlowType('CUSTOM_AUTH');
    
      cognitoUser.initiateAuth(authenticationDetails, {
        onSuccess: function(result) {
          console.log('SUCESS', result);
        },
        onFailure: function(err) {
          console.log('ERROR', err);
        },
        customChallenge: function(challengeParameters) {
          let challengeResponse = challengeParameters.ANSWER;
          cognitoUser.sendCustomChallengeAnswer(challengeResponse);
          console.log('challengeParameters', challengeParameters);
        }
      });
      // const params = {
      //   AuthFlow: 'CUSTOM_AUTH',
      //   UserPoolId: 'ap-south-1_FNUH9In81',
      //   ClientId: '351ld38felatf5k2rkfgqqsnhf',
      //   AuthParameters: {
      //     USERNAME: '+8801616306215'
      //   }
      // };
  
      // const identityProvider = new CognitoIdentityServiceProvider();
  
      // return identityProvider.initiateAuth(params, (err, data) => {
      //   if (err) {
      //     console.log('err',err);
      //   } else {
      //     console.log('data', data);
      //   }
      // });
    
    }

    return (
    <ScrollView style={SendOTPStyle.OtpMainContainer}>
        <View  style={SendOTPStyle.ImageView}>
            <Image style={{ height: 240, width: 260, }}
                    source={require('../../../../assets/otpimg.png')}
            />
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

                    />
                </View>
                <View >
                    <TextInput style={SendOTPStyle.OtpNumInputs}
                        value={mobileNumber}
                        onChangeText={num => setMobileNumber(num)}
                        placeholder='Mobile Number'
                        keyboardType='number-pad'
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
        <CustomButton title="Send OTP" onPress={LonginHandler} />
    </ScrollView>
    )
}


// authenticateUser
export default SendOTP;

    // const loginParams = {
    //     AuthFlow: "CUSTOM_AUTH",
    //     ClientId: poolData.clientId,
    //     UserPoolId: poolData.userPoolId,
    //     AuthParameters: {
    //         USERNAME: mobileNumber
    //     },
    // };

// async function signUp() {
//     try {
//         const { user } = await Auth.signUp({
//             username: (countryCode + mobileNumber).toString(),
//             password: passWord,
//         });
//         console.log(user);
//         if (user) {

//         }
//     } catch (error) {
//         console.log('error signing up:', error);
//     }
// }

// async function confirmSignUp() {
//     try {
//         await Auth.confirmSignUp(username, "901837");
//         /* Once the user successfully confirms their account, update form state to show the sign in form*/
//         console.log('confirmed')
//     } catch (err) { console.log({ err }); }
// }
// const handleSignIn = () => {
//     async function signIn() {
//         try {
//             let response = await Auth.signIn('+8801521301928', 'helloD1521#').then(user => console.log("user", user));
//             return response;
//         } catch (err) { console.log('err', err); }
//     }
//     signIn();
//     async function session() {
//         let user = await Auth.currentSession().then(res => {
//             let accessToken = res.getAccessToken()
//             let jwt = accessToken.getJwtToken()
//             //You can print them to see the full objects
//             console.log(`myAccessToken: ${JSON.stringify(accessToken)}`)
//             console.log(`myJwt: ${jwt}`)
//         })
//     }
//     session();
//     console.log('after sign in');

// }



// confirmSignUp();
// const handleSendOTPPress = () => {

//     // console.log("hello", loginParams);
//     // provider.initiateAuth(loginParams, function (err, data) {
//     //     if (err) console.log(err, err.stack, "error bapu"); // an error occurred
//     //     else console.log(data);           // successful response
//     // });
// }
// handleSendOTPPress();

// +8801616306215