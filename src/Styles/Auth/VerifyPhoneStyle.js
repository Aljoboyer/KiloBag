import {  StyleSheet } from 'react-native';
import { Colors } from './../../Theme/Colors';

export const VerifyPhonestyles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: Colors.LightGreen,
        marginLeft: 80
    },
    navNtitle: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 25
    },
    textInput: {
        borderBottomColor: '#939393',
        borderBottomWidth: 2,
        width: 50,
        fontSize: 20,
        fontWeight: '500',
        paddingBottom: 0,
        paddingLeft: 5,
        textAlign: 'center',
        height: 55,
        fontSize: 28,
        color: Colors.LightGreen
    },
    CodeSentView:{
        flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
        height: 110
    },
    InputContainer:{
        flexDirection: 'row', 
        justifyContent: 'center',
        paddingBottom: 40,
        paddingHorizontal: 25
    },
    ResendCodeText:{
        color: Colors.Black,
        alignSelf: 'center',
        fontSize: 15,
        paddingBottom: 40,
        lineHeight: 21,
        paddingHorizontal: 30
    },
    otpView: {
        width: '100%',
        height: 100,
        color: Colors.Black,
      },
      underlineStyleBase: {
        fontSize: 20,
        height: 55,
        borderWidth: 0,
        borderBottomWidth: 2,
        color: Colors.LightGreen,
        borderBottomColor: Colors.LightGreen,
      },
})
