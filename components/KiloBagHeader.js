import { View, Text, StyleSheet, Pressable, } from 'react-native'
import React from 'react'
import Octicons from 'react-native-vector-icons/Octicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'

const KiloBagHeader = ({ title, backBtn, search, menu, }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.header}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {
                    backBtn ? <Pressable onPress={() => navigation.goBack()}>
                        <Octicons name='chevron-left' style={{ color: 'black', fontSize: 30 }} />
                    </Pressable> : <></>
                }
                {
                    title ? <Text style={{ fontSize: 16, marginLeft: 10, fontWeight: '500', color: 'black' }}>{title}</Text>
                        : <></>
                }

            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {
                    search ? <FontAwesome name='search' style={{ fontSize: 24, color: '#8B8B8B' }} /> : <></>
                }
                {
                    menu ? <Pressable onPress={() => navigation.navigate('Menu')}>
                        <MaterialIcons name='account-circle' style={{ fontSize: 48, color: 'black', marginLeft: 20 }} />
                    </Pressable> : <></>
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
    },
    title: { fontSize: 16, marginLeft: 10, fontWeight: '500', color: 'black' },
})

export default KiloBagHeader