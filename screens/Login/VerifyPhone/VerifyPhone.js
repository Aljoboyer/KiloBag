import { View, Text, StyleSheet, TextInput, Pressable, } from 'react-native'
import React from 'react'
import Octicons from 'react-native-vector-icons/Octicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import CustomButton from '../../../components/CustomButton'
const VerifyPhone = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.navNtitle}>
                <Pressable onPress={() => navigation.goBack()}>
                    <Octicons name='chevron-left' style={{ color: 'black', fontSize: 30 }} />
                </Pressable>

                <Text style={styles.title}>Verify Phone</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Text>Code is sent to <Text style={{ fontWeight: 'bold' }}>+91 7839462944</Text></Text>
                <MaterialCommunityIcons name='pencil' style={{ color: 'black', fontSize: 15, paddingLeft: 5 }} />
            </View>
            <Text style={{ fontWeight: 'bold' }}>Enter OTP</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                <TextInput
                    style={styles.textInput}
                />
                <TextInput
                    style={styles.textInput}
                />
                <TextInput
                    style={styles.textInput}
                />
                <TextInput
                    style={styles.textInput}
                />
            </View>
            <Text>Didn’t receive code? Request again or Get via Call</Text>
            <CustomButton onPress={() => navigation.navigate("LocationPermission")}
                title='Verify and Proceed'
            />
            <View>
                <View style={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                    <View style={{ width: 75 }}>
                        <CustomButton title='1' />
                    </View>
                    <View style={{ width: 75, }}>
                        <CustomButton title='2' />
                    </View>
                    <View style={{ width: 75 }}>
                        <CustomButton title='3' />
                    </View>
                </View>
                <View style={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                    <View style={{ width: 75 }}>
                        <CustomButton title='4' />
                    </View>
                    <View style={{ width: 75, }}>
                        <CustomButton title='5' />
                    </View>
                    <View style={{ width: 75 }}>
                        <CustomButton title='6' />
                    </View>
                </View>
                <View style={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                    <View style={{ width: 75 }}>
                        <CustomButton title='7' />
                    </View>
                    <View style={{ width: 75, }}>
                        <CustomButton title='8' />
                    </View>
                    <View style={{ width: 75 }}>
                        <CustomButton title='9' />
                    </View>
                </View>
                <View style={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginBottom: 10 }}>
                    <View style={{ width: 75 }}>
                        {/* <CustomButton title='7' /> */}
                    </View>
                    <View style={{ width: 75, }}>
                        <CustomButton title='0' />
                    </View>
                    <View style={{ width: 75 }}>
                        <CustomButton title='X' />
                    </View>
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        justifyContent: 'space-between',
        backgroundColor: 'white',
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: 'black',
        marginLeft: 20,
    },
    navNtitle: {
        flexDirection: 'row',
        alignItems: 'center'
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
    }
})

export default VerifyPhone