import { View, Text, StyleSheet, Image, Pressable, SafeAreaView, } from 'react-native'
import React from 'react'
import Octicons from 'react-native-vector-icons/Octicons'
import CustomButton from '../../../components/CustomButton'
import { Colors } from './../../../Theme/Colors';

const LocationPermission = ({ navigation }) => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{padding: 30}}>
                <Pressable onPress={() => navigation.goBack()}>
                    <Octicons name='chevron-left' style={{ color: 'black', fontSize: 30,  }} />
                </Pressable>
            </View>
            <View  style={styles.container}>
                <View style={{ alignItems: 'center' , paddingTop: 20}}>
                    <Image style={{width: 228, height: 220}} source={require('../../../../assets/location.png')}/>
                </View>

                <View style={styles.locationText}>
                    <Text style={{ fontSize: 18, fontWeight: '600', color: Colors.LightGreen }}>Location</Text>
                    <Text style={{ textAlign: 'center', paddingTop: 10, color: '#181717' }}>Please enable location access
                        so we could provide you accurate
                        results of available products</Text> 
                <CustomButton title='Enable' onPress={() => navigation.navigate("ChooseLocation")} customStyles={{width: 190, alignSelf: 'center', marginTop: 80, height: 48}} />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 25,
        paddingHorizontal: 35,
    },
    locationText: {
        alignItems: 'center',
        paddingHorizontal: 50,
        paddingTop: 60
    },

})

export default LocationPermission