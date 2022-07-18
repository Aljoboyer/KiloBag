import { View, Text, SafeAreaView, ScrollView, StyleSheet, Pressable, } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import CustomButton from '../../components/CustomButton'
import Octicons from 'react-native-vector-icons/Octicons'
import { Colors } from './../../Theme/Colors';

const Menu = ({navigation}) => {
    const menu = [
        "Order", "Invite Friends & Get Additional Discount", "Personal Details", "Delivery Address", "About", "Help and Support", "Terms and Condition", "Return and Refund Policy", "Who We Are"
    ]
    return (
        <SafeAreaView style={{ flex: 1,}}>
            <View style={styles.header}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}> 
                    <Pressable onPress={() => navigation.goBack()}>
                        <Octicons name='chevron-left' style={{ color: Colors.LightGreen, fontSize: 25 }} />
                    </Pressable>
                    <Text style={{ fontSize: 20, marginLeft: 20, fontWeight: '700', color: Colors.LightGreen }}>User Profile</Text>
                        
                </View>
            </View>

            <ScrollView style={styles.container}>
        
                <View style={{ backgroundColor: '#F5F5F5', paddingVertical: 12, flexDirection: 'row', paddingLeft: 40 }}>
                    <MaterialIcons name='account-circle' style={{ fontSize: 56, color:  Colors.LightGreen, marginLeft: 20 }} />
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 16 }}>
                        <Text>+91 1234567898</Text>
                        <MaterialCommunityIcons name='pencil' style={{ color:  Colors.LightGreen, fontSize: 15, paddingLeft: 5 }} />
                    </View>

                </View>
                {
                    menu.map((name) => {
                        return <View key={name} style={{ borderBottomColor: "#E7E6E6", borderBottomWidth: 1, paddingVertical: 20, paddingLeft: 40}}>
                            <Pressable>
                                <Text style={{ marginLeft: 24, fontSize: 13, fontWeight: '400', color: 'black' }}>{name}</Text>
                            </Pressable>
                        </View>
                    })
                }
              
                <View style={{ marginVertical: 32, paddingHorizontal: 25 }}>

                    <CustomButton title="Logout" />
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 0,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingVertical: 30
    },
    title: { fontSize: 16, marginLeft: 10, fontWeight: '500', color: 'black' },
})

export default Menu