import { View, Text, Image, StyleSheet, Dimensions, TextInput } from 'react-native'
import React, { useEffect } from 'react'
import CustomButton from '../../../components/CustomButton'
import CheckBox from '@react-native-community/checkbox';
import { CognitoIdentityProvider } from "@aws-sdk/client-cognito-identity-provider";
import { Auth } from 'aws-amplify';



const SendOTPWithKb = ({ navigation }) => {
    const screen = Dimensions.get("screen");
    const region = "ap-south-1";
    const provider = new CognitoIdentityProvider({ region });
    const [mobileNumber, setMobileNumber] = React.useState();
    const [countryCode, setCountryCode] = React.useState();
    const [passWord, setPassWord] = React.useState();
    const [check, setCheck] = React.useState();

    const poolData = {
        userPoolId: 'ap-south-1_FNUH9In81',
        clientId: '351ld38felatf5k2rkfgqqsnhf',
    }
    const loginParams = {
        AuthFlow: "CUSTOM_AUTH",
        ClientId: poolData.clientId,
        UserPoolId: poolData.userPoolId,
        AuthParameters: {
            USERNAME: mobileNumber
        },
    };
    // const username = "+8801521301928";
    // const password = 'helloD1521#'
    // console.log((countryCode + mobileNumber));
    // console.log(passWord);
    async function signUp() {
        try {
            const { user } = await Auth.signUp({
                username: (countryCode + mobileNumber).toString(),
                password: passWord,
            });
            console.log(user);
            if (user) {

            }
        } catch (error) {
            console.log('error signing up:', error);
        }
    }

    async function confirmSignUp() {
        try {
            await Auth.confirmSignUp(username, "901837");
            /* Once the user successfully confirms their account, update form state to show the sign in form*/
            console.log('confirmed')
        } catch (err) { console.log({ err }); }
    }
    const handleSignIn = () => {
        async function signIn() {
            try {
                let response = await Auth.signIn('+8801521301928', 'helloD1521#').then(user => console.log("user", user));
                return response;
            } catch (err) { console.log({ err }); }
        }
        signIn();
        async function session() {
            let user = await Auth.currentSession().then(res => {
                let accessToken = res.getAccessToken()
                let jwt = accessToken.getJwtToken()
                //You can print them to see the full objects
                console.log(`myAccessToken: ${JSON.stringify(accessToken)}`)
                console.log(`myJwt: ${jwt}`)
            })
        }
        session();
        console.log('after sign in');

    }



    // confirmSignUp();
    // const handleSendOTPPress = () => {

    //     // console.log("hello", loginParams);
    //     // provider.initiateAuth(loginParams, function (err, data) {
    //     //     if (err) console.log(err, err.stack, "error bapu"); // an error occurred
    //     //     else console.log(data);           // successful response
    //     // });
    // }
    // handleSendOTPPress();

    return (
        <View
            style={{
                flex: 1,
                padding: 40,
            }}>
            <View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    // marginVertical: 20,

                }}>
                    <Image style={{ height: 85, width: 90, }}
                        source={require('../../../assets/temp_img.png')}
                    />
                </View>
                <View style={{ marginTop: 40, }}>
                    <Text style={{ color: '#343333', fontSize: 18, fontWeight: '600' }} >Login or Register</Text>
                </View>
                <View style={{ marginTop: 15, marginBottom: 10 }}>
                    <Text style={{ color: '#343333', fontSize: 14, fontWeight: '500' }} >Enter Mobile Number</Text>
                </View>
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: 10
                    }}
                >

                    <View style={{ flexDirection: 'row', alignItems: 'flex-end', }}>
                        <View >
                            <Text style={{ color: '#000' }}>Country Code</Text>
                            <TextInput
                                // value='+91'
                                defaultValue='+88'
                                style={{
                                    borderBottomColor: '#939393',
                                    borderBottomWidth: 2,
                                    fontSize: 12,
                                    fontWeight: '500',
                                    paddingBottom: 0,
                                    paddingLeft: 5
                                }}
                                onChangeText={num => setCountryCode(num)}
                                keyboardType='number-pad'

                            />
                        </View>
                        <View style={{ width: '70%', }}>
                            <TextInput
                                style={{
                                    borderBottomColor: '#939393',
                                    borderBottomWidth: 2,
                                    fontSize: 12,
                                    fontWeight: '500',
                                    paddingLeft: 5,
                                    paddingBottom: 0,
                                    marginLeft: 10,
                                }}
                                value={mobileNumber}
                                onChangeText={num => setMobileNumber(num)}
                                placeholder='Mobile Number'
                                keyboardType='number-pad'
                            />
                        </View>
                    </View>
                    <View style={{ width: '95%', }}>
                        <TextInput
                            style={{
                                borderBottomColor: '#939393',
                                borderBottomWidth: 2,
                                fontSize: 12,
                                fontWeight: '500',
                            }}
                            value={passWord}
                            secureTextEntry={true}
                            onChangeText={password => setPassWord(password)}
                            placeholder='Password'
                        />
                    </View>
                </View>
                <CustomButton title="Send OTP" onPress={handleSignIn} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    highlight: {
        fontWeight: '700',
    },
    selectedLanguage: {
        width: 125,
        height: 120,
        borderRadius: 10,
        borderWidth: 5,
        borderColor: '#929292',
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    notSelectedLanguage: {
        width: 125,
        height: 120,
        borderRadius: 10,
        borderColor: '#929292',
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: "flex-start",
        // borderColor: 'red',
        // borderWidth: 3,
    },
});

export default SendOTPWithKb