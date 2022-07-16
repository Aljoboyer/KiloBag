import { View, Text, StyleSheet , Image, TextInput} from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import Entypo from 'react-native-vector-icons/Entypo'
import { Avatar, Icon, ListItem } from "@rneui/themed";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Colors } from '../../Theme/Colors'
import CustomButton from '../CustomButton'


const CartItem = ({subscription, bgColor}) => {
  return (
   <View>
     <View style={{ borderBottomColor: Colors.LightGreen, borderBottomWidth: 2, borderTopColor:  Colors.LightGreen, borderTopWidth: 2 }}>
    {[1, 2, 3,].map((l, i) => (
        <ListItem key={i}
            containerStyle={{ paddingHorizontal: 4, flexDirection: 'row', justifyContent: 'space-around', }}
        >
            <View style={{ flexDirection: 'row' }}>
                <View style={CartItemstyles.imageView}>
                    <Image source={require('../../../assets/waterMalon.png')} />
                </View>
                <View style={{ justifyContent: 'space-between', paddingVertical: 5, }}>
                    <Text style={{color: 'black', fontSize: 15}}>Watermelon</Text>
                    <Text style={{color: 'black', fontSize: 13}}>$21</Text>
                    <Text style={{color: Colors.LightGray, fontSize: 12}}>You Saved $1</Text>
                </View>
            </View>
            <View style={{ justifyContent: 'space-between', padding: 2, alignSelf: 'flex-end' }}>
             
                <View style={{ flexDirection: 'row' }}>
                    <View style={CartItemstyles.AmountIcon}>
                        <Entypo name='minus' style={{ color: 'white', fontSize: 16, fontWeight: '600' }} />
                    </View>
                    <Text style={{ marginHorizontal: 12, color: 'black' }}>2</Text>
                    <View style={CartItemstyles.AmountIcon}>
                        <Entypo name='plus' style={{ color: 'white', fontSize: 16, fontWeight: '600', }} />
                    </View>
                </View>
            </View>
        </ListItem>
    ))}
    </View>
    
    <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 20,}}>
        <Image source={require('../../../assets/coupon.png')} />
        <Text style={{ fontSize: 16, fontWeight: '500',  marginLeft: 10, color: 'black' }}>Apply Discount Code</Text>
    </View>
    <View style={CartItemstyles.PromoView}>
        <TextInput placeholder='Enter promo code' style={[CartItemstyles.InputStyle, {borderColor: bgColor}]} />
        <CustomButton title='Apply' customStyles={[CartItemstyles.ButtonStyle, {backgroundColor: bgColor}]} />
    </View>
   </View>
  )
}

export default CartItem;

const CartItemstyles = StyleSheet.create({
    imageView: { height: 90, width: 90,  borderRadius: 12, marginRight: 12, justifyContent: 'center', alignItems: 'center' },
    AmountIcon: { backgroundColor: Colors.LightGreen, padding: 2, borderRadius: 2, },
    ButtonStyle:{borderTopLeftRadius: 0, borderBottomLeftRadius: 0, width: 100},
    InputStyle:{borderWidth: 1.5 , width: 210,borderTopLeftRadius: 10, borderBottomLeftRadius: 10, paddingLeft: 10 },
    PromoView:{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingBottom: 15}
});
