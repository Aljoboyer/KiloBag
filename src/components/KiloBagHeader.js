import { View, Text, StyleSheet, Pressable, } from 'react-native'
import React from 'react'
import Octicons from 'react-native-vector-icons/Octicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'
import { Colors } from '../Theme/Colors'

const KiloBagHeader = ({ title, backBtn, search, menu, }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.header}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}> 
                {
                    backBtn ? <Pressable onPress={() => navigation.goBack()}>
                        <Octicons name='chevron-left' style={{ color: 'white', fontSize: 25 }} />
                    </Pressable> : <></>
                }
                {
                    title ? <Text style={{ fontSize: 20, marginLeft: 20, fontWeight: '700', color: 'white' }}>{title}</Text>
                        : <></>
                }

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.LightGreen,
        paddingLeft: 15,
        paddingVertical: 30
    },
    title: { fontSize: 16, marginLeft: 10, fontWeight: '500', color: 'black' },
})

export default KiloBagHeader