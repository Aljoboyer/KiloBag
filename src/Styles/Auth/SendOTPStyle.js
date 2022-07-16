import {  StyleSheet } from 'react-native';

export const SendOTPStyle = StyleSheet.create({
    OtpMainContainer:{
    paddingHorizontal: 40,
    paddingTop: 80
   },
   ImageView:{
    justifyContent: 'center',
    alignItems: 'center',
    // marginVertical: 20,
    },
    OtpInputsCode:{
        borderBottomColor: '#939393',
        borderBottomWidth: 2,
        fontSize: 12,
        fontWeight: '500',
        paddingLeft: 5,
        width: 40,
        height: 50
    },
    OtpNumInputs:{
        borderBottomColor: '#939393',
        borderBottomWidth: 2,
        fontSize: 12,
        fontWeight: '500',
        paddingLeft: 5,
        marginLeft: 10,
        width: 215,
        height: 50
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingBottom: 50,
        paddingTop: 20
    },
    PassInputs:{
        borderBottomColor: '#939393',
        borderBottomWidth: 3,
        fontSize: 12,
        fontWeight: '500',
        width: 300,
        height: 50,
        marginTop: 10
    }
});
