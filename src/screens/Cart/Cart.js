import { View, Text, SafeAreaView, StyleSheet, ScrollView, } from 'react-native'
import React, { useEffect, useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import Entypo from 'react-native-vector-icons/Entypo'
import { Avatar, Icon, ListItem } from "@rneui/themed";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Colors } from '../../Theme/Colors'
import CartItem from '../../components/CartItem/CartItem'
import { Cartstyles } from '../../Styles/CartStyles/CartStyles'
import KiloBagHeader from './../../components/KiloBagHeader/KiloBagHeader';
import { useIsFocused } from '@react-navigation/native'

const Cart = () => {
    const [expandedInstant, setExpandedInstant] = React.useState(null);
    const [skeletonShow, setSkeletonShow] = useState(false)
    const isVisible = useIsFocused();

    useEffect(() => {;
      if (isVisible) {
          setSkeletonShow(true)
      setTimeout(() => {
          setSkeletonShow(false)
      }, 2000);
      }
      },[isVisible])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <KiloBagHeader title='Bag' search={true} image={true}/>
            <ScrollView style={Cartstyles.container}>
                <View style={{ marginBottom: 30 }}>
                    <View style={Cartstyles.CartView}>
                         <CartItem skeletonShow={skeletonShow} bgColor={Colors.LightGreen}/>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


export default Cart