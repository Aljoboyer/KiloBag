import { View, Text, SafeAreaView, StyleSheet, ScrollView, } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import Entypo from 'react-native-vector-icons/Entypo'
import { Avatar, Icon, ListItem } from "@rneui/themed";
import Ionicons from 'react-native-vector-icons/Ionicons'
import BottomTab from './../../components/BottomTab';
import { Colors } from '../../Theme/Colors'
import CartItem from '../../components/CartItem/CartItem'
import { Cartstyles } from '../../Styles/CartStyles/CartStyles'
import KiloBagHeader from './../../components/KiloBagHeader/KiloBagHeader';

const Cart = () => {
    const [expandedInstant, setExpandedInstant] = React.useState(null);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <KiloBagHeader title='Cart' search={true} image={true}/>
            <ScrollView style={Cartstyles.container}>
                <View style={{ marginBottom: 30 }}>
                    <View style={Cartstyles.CartView}>
                         <CartItem bgColor={Colors.LightGreen}/>
                    </View>
                </View>
            </ScrollView>
            <BottomTab />
        </SafeAreaView>
    )
}


export default Cart