import { View, Text, StyleSheet, Image, Pressable, } from 'react-native'
import React from 'react'
import Octicons from 'react-native-vector-icons/Octicons'
import CustomButton from '../../../components/CustomButton'

const LocationPermission = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigation.goBack()}>
                <Octicons name='chevron-left' style={{ color: 'black', fontSize: 30 }} />
            </Pressable>
            <View style={{ alignItems: 'center' }}>
                <Image
                    source={require('../../../assets/temp_img.png')}
                />
            </View>

            <View style={styles.locationText}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Location</Text>
                <Text style={{ textAlign: 'center', paddingTop: 10 }}>Please enable location access
                    so we could provide you accurate
                    results of available products</Text>
            </View>
            <View>
                <CustomButton title='Enable' onPress={() => navigation.navigate("Home")} />
                <Pressable>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', padding: 15, color: '#2A2A2A' }}>Not Now</Text>
                </Pressable>
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
    locationText: {
        alignItems: 'center',
        paddingHorizontal: 65
    },

})

export default LocationPermission