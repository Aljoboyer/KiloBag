import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import CustomButton from '../../../components/CustomButton';

const ChooseLanguage = ({ navigation }) => {
    const screen = Dimensions.get("screen");

    return (
        <View
            style={{
                flex: 1,
                // marginTop: screen.height - 700,
                padding: 40
            }}>
            <View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginVertical: 20,
                }}>
                    <Image
                        source={require('../../../assets/temp_img.png')}
                    />
                </View>

                <Text style={{ textAlign: 'center', fontSize: 16, color: '#2A2A2A', fontWeight: '600', marginVertical: 50 }}>Choose Your Preferred Language</Text>
                <View style={{
                    flex: 1,
                    backgroundColor: '#fff',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    marginBottom: 50,
                    paddingHorizontal: 30
                }}>
                    <View
                        style={styles.selectedLanguage}
                    >
                        <Text style={{ fontSize: 40, color: '#919191' }}>Aa</Text>
                        <Text>English</Text>
                    </View>
                    <View
                        style={styles.notSelectedLanguage}
                    >
                        <Text style={{ fontSize: 40, color: '#919191' }}>అఉ</Text>
                        <Text>Telugu</Text>
                    </View>
                </View>
                <View style={{ marginTop: 80 }}>
                    <CustomButton title="Proceed" onPress={() => navigation.navigate("SendOTP")} />
                </View>
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

export default ChooseLanguage