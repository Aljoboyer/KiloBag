import { View, Text, StyleSheet , Image, TextInput, FlatList} from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import { Colors } from '../../Theme/Colors'
import CustomButton from '../CustomButton'
import { CartItemstyles } from '../../Styles/CartStyles/CartStyles'
import { useNavigation } from '@react-navigation/native';


const CartItem = ({ bgColor}) => {
    const navigation = useNavigation();

    const CartProduct = ({}) => (
 
            <View style={CartItemstyles.ProductView} >
                <View style={{ flexDirection: 'row',  }}>
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
            </View>
    )
  return (
    <View>
      <FlatList
        data={[1,2,3]}
        renderItem={CartProduct}
        keyExtractor={item => item.index}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        />
        <View style={CartItemstyles.DiscountCodeView}>
            <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 20,  }}>
                <Image source={require('../../../assets/coupon.png')} />
                <Text style={{ fontSize: 16, fontWeight: '500',  marginLeft: 10, color: 'black' }}>Apply Discount Code</Text>
            </View>
            <View style={CartItemstyles.PromoView}>
                <TextInput placeholder='Enter promo code' style={[CartItemstyles.InputStyle, {borderColor: Colors.LightGreen}]} />
                <CustomButton title='Apply' customStyles={[CartItemstyles.ButtonStyle, {backgroundColor: Colors.LightGreen}]} />
            </View>
        </View>
         
         <View style={CartItemstyles.OrderInfoView}>
            <Text style={{fontSize: 16, fontWeight: '700', color: 'black'}}>Order Info</Text>
            <View style={CartItemstyles.AmountView}>
                <View>
                    <Text style={{marginVertical: 3 , color: '#828282'}}>Subtotal</Text>
                    <Text style={{marginVertical: 3 , color: '#828282'}}>Shipping charges</Text>
                    <Text style={{marginVertical: 3 , color: '#828282'}}>Estimating text</Text>
                    <Text style={{marginTop: 10, fontSize: 16, color: 'black', fontWeight: '700'}}>Total</Text>
                </View>
                <View>
                    <Text style={{marginVertical: 3 , color: '#828282'}}>$450</Text>
                    <Text style={{marginVertical: 3 , color: '#828282'}}>2</Text>
                    <Text style={{marginVertical: 3 , color: '#828282'}}>1</Text>
                    <Text style={{marginTop: 10, fontSize: 16, color: 'black', fontWeight: '700'}}>$453</Text>
                </View>
            </View>
            <CustomButton onPress={() => navigation.navigate('Checkout')} title='Secure Checkout' customStyles={{width: 290, borderRadius: 10, alignSelf: 'center', marginTop: 10}} />
         </View>
    </View>
  )
}

export default CartItem;


