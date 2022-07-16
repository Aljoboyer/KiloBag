import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Octicons from 'react-native-vector-icons/Octicons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Colors } from './../../Theme/Colors';

const DisplayHeader = ({backgroundColor}) => {
  return (
   <View style={{backgroundColor: backgroundColor, paddingVertical: 30, paddingLeft: 7, paddingRight: 10}}>
     <View style={styles.deliverLocation}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <MaterialIcons name='location-on' style={{ fontSize: 40, color: Colors.White }} />
            <View >
                <Text style={styles.deliverTo}>Deliver To</Text>
                <Text style={styles.location}>BTM  Layout, Bengaluru, Karnataka</Text>
            </View>
        </View>
        <MaterialIcons name='account-circle' style={{ fontSize: 60, color: Colors.White }} />
     </View>
   </View>
  )
}

export default DisplayHeader;

const styles = StyleSheet.create({
    deliverLocation: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    deliverTo: {
        fontSize: 17,
        fontWeight: 'bold',
        color: Colors.White
    },
    location: {
        fontSize: 14,
        // fontWeight: 'bold',
        color: Colors.White
    },
})