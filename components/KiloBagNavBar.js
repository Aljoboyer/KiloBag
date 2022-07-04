import { View, Text, Pressable, StyleSheet, } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

const KiloBagNavBar = () => {
    const navigation = useNavigation();

    return (
        <View>
            <View style={styles.stickyNavigation}>
                <View style={{ alignItems: 'center' }}>
                    <MaterialCommunityIcons name='flash' style={styles.stickyIcon} />
                    <Text style={styles.stickyText}>Instant</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Ionicons name='timer' style={styles.stickyIcon} />
                    <Text style={styles.stickyText}>Daily</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Ionicons name='calendar' style={styles.stickyIcon} />
                    <Text style={styles.stickyText}>Monthly</Text>
                </View>
                <Pressable onPress={() => navigation.navigate("Cart")}>
                    <View style={{ alignItems: 'center' }}>
                        <MaterialCommunityIcons name='cart' style={styles.stickyIcon} />
                        <Text style={styles.stickyText}>Cart</Text>
                    </View>
                </Pressable>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    stickyNavigation: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#C4C4C4',
        borderRadius: 16,
        padding: 8,
        margin: 12
    },
    stickyText: {
        fontSize: 16,
        fontWeight: '600',
        color: 'black'
    },
    stickyIcon: {
        fontSize: 36,
        color: 'black',
    },
})

export default KiloBagNavBar