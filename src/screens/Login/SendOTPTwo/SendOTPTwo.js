import { View, Text, Dimensions, Image, TextInput, StyleSheet, ScrollView, } from 'react-native'
import React, { useState } from 'react'
import CheckBox from '@react-native-community/checkbox';
import CustomButton from '../../../components/CustomButton';

const SendOTPTwo = ({ navigation }) => {
    const screen = Dimensions.get("screen");
    const [isSelected, setSelection] = useState(false);
    const val = '+91'
    return (
        <ScrollView
            style={{
                flex: 1,
                marginTop: screen.height - 700,
                paddingHorizontal: 40,
            }}>
            <View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginVertical: 20,
                }}>
                    <Image style={{ width: 215, height: 200 }}
                            source={require('../../../../assets/introimg.png')}
                    />
                </View>


                <View style={{ marginTop: 80, }}>
                    <Text style={{ color: '#343333', fontSize: 18, fontWeight: '600' }} >Login or Register</Text>
                </View>
                <View style={{ marginTop: 25, marginBottom: 20 }}>
                    <Text style={{ color: '#343333', fontSize: 14, fontWeight: '500' }} >Enter Mobile Number</Text>
                </View>
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        // marginBottom: 5
                    }}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'flex-end', marginBottom: 35 }}>
                        <View >
                            <Text style={{ color: '#000' }}>Country Code</Text>
                            <TextInput
                                defaultValue={val}
                                style={{
                                    borderBottomColor: '#939393',
                                    borderBottomWidth: 2,
                                    fontSize: 12,
                                    fontWeight: '500',
                                    paddingBottom: 0,
                                    paddingLeft: 5
                                }}
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
                                placeholder='Mobile Number'
                            />
                        </View>
                    </View>
                </View>
                <View
                    style={{ marginBottom: 25 }}
                >
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', }}>
                        <CheckBox
                            value={isSelected}
                            onValueChange={setSelection}
                            style={styles.checkbox}
                        />
                        <View style={{ justifyContent: 'flex-start', }}>
                            <Text style={{ fontSize: 12, color: '#2A2A2A', fontWeight: '500', }}>By clicking on ‘Send OTP’, I agree to the
                                <Text style={{ fontWeight: '700' }}> Terms and Condition & Privacy Policy</Text>
                            </Text>
                        </View>
                    </View>
                    {/* <Text style={{ fontSize: 12, color: '#2A2A2A', fontWeight: '700', paddingLeft: 30 }}> and Condition & Privacy Policy</Text> */}
                </View>
                <CustomButton title="Send OTP" onPress={() => navigation.navigate('SendOTPWithKb')} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
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

export default SendOTPTwo
