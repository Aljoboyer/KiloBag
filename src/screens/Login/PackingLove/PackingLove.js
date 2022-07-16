import { View, Text, StyleSheet, Image, Pressable, } from 'react-native'
import React from 'react'
import CustomButton from '../../../components/CustomButton'
import { Colors } from './../../../Theme/Colors';

const PackingLove = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <Image
                     source={require('../../../../assets/PackingLove.png')}
                />
            </View>

            <View style={styles.locationText}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: Colors.LightGreen }}>PACKING LOVE</Text>
                <Text style={{ textAlign: 'center', paddingTop: 10, color: Colors.Black }}>in healthiest form for you</Text> 
            </View>
            <View>
                <CustomButton title='Get Started' onPress={() => navigation.navigate("Home")} customStyles={{width: 170, alignSelf: 'center'}} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 25,
        paddingHorizontal: 35,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    locationText: {
        alignItems: 'center',
        paddingHorizontal: 65,
        paddingTop: 100,
        paddingBottom: 30
    },

})

export default PackingLove
