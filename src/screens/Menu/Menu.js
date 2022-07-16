import { View, Text, SafeAreaView, ScrollView, StyleSheet, } from 'react-native'
import React from 'react'
import KiloBagHeader from '../../components/KiloBagHeader'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import CustomButton from '../../components/CustomButton'

const Menu = () => {
    const menu = [
        "Order", "Invite Friends & Get Additional Discount", "Personal Details", "Delivery Address", "About", "Help and Support", "Terms and Condition", "Return and Refund Policy", "Who We Are"
    ]
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <ScrollView style={styles.container}>
                <View style={{ marginTop: 24, marginBottom: 8, paddingHorizontal: 25 }}>
                    <KiloBagHeader
                        backBtn={true}
                    />

                </View>

                <View style={{ backgroundColor: '#E5E5E5', paddingVertical: 12, flexDirection: 'row', }}>
                    <MaterialIcons name='account-circle' style={{ fontSize: 56, color: 'black', marginLeft: 20 }} />
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 16 }}>
                        <Text>+91 1234567898</Text>
                        <MaterialCommunityIcons name='pencil' style={{ color: 'black', fontSize: 15, paddingLeft: 5 }} />
                    </View>

                </View>
                {
                    menu.map((name) => {
                        return <View key={name} style={{ borderBottomColor: "#E7E6E6", borderBottomWidth: 1, paddingVertical: 20, }}>
                            <Text style={{ marginLeft: 24 }}>{name}</Text>
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
})

export default Menu