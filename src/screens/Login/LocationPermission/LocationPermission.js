import { View, Text, StyleSheet, Image, Pressable, } from 'react-native'
import React from 'react'
import Octicons from 'react-native-vector-icons/Octicons'
import CustomButton from '../../../components/CustomButton'
import { Colors } from './../../../Theme/Colors';

const LocationPermission = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigation.goBack()}>
                <Octicons name='chevron-left' style={{ color: 'black', fontSize: 30,  }} />
            </Pressable>
            <View style={{ alignItems: 'center' }}>
                <Image
                     source={require('../../../../assets/location.png')}
                />
            </View>

            <View style={styles.locationText}>
                <Text style={{ fontSize: 19, fontWeight: 'bold', color: Colors.LightGreen }}>Location</Text>
                <Text style={{ textAlign: 'center', paddingTop: 10, color: Colors.Black }}>Please enable location access
                    so we could provide you accurate
                    results of available products</Text> 
            </View>
            <View>
                <CustomButton title='Enable' onPress={() => navigation.navigate("Home")} customStyles={{width: 150, alignSelf: 'center'}} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 25,
        paddingHorizontal: 35,
        justifyContent: 'space-between',
        backgroundColor: 'white',
    },
    locationText: {
        alignItems: 'center',
        paddingHorizontal: 65
    },

})

export default LocationPermission