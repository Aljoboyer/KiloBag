import { View, Text, SafeAreaView, StyleSheet, Pressable, Image, FlatList, } from 'react-native'
import React from 'react'
import KiloBagHeader from '../../components/KiloBagHeader/KiloBagHeader'
import { MyOrderItemStyle } from '../../Styles/MyOrderStyle/MyOrderStyle'
import { Colors } from './../../Theme/Colors';
import { OrderDetailStyle } from './../../Styles/MyOrderStyle/MyOrderStyle';
import { ModalStyle } from './../../Styles/ModalStyle/ModalStyle';


const OrderProcess = ({title, colors}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={[OrderDetailStyle.CircleView, {backgroundColor: colors}]}></View>
      <Text style={{fontSize: 14, color: colors , fontWeight: '500', marginLeft: 8}}>{title}</Text>
    </View>
  )
}
export default function BagOrderDetails() {
  const progress = true;
  const delivered = false;
  const anyTimePay = true
  const OrderItem = ({item}) => (
    <View style={OrderDetailStyle.ProductView}>
        <Image source={require('../../../assets/biscuit.png')} />
        <View>
          <Text style={MyOrderItemStyle.ItemText}>Britania Mariegold Biscuit</Text>
          <Text style={{fontSize: 11, color: '#6F6F6F' , fontWeight: '500', paddingTop: 5}}>500gm X 1</Text>
        </View>
        <Text style={{fontSize: 13, color: '#5A5A5A' , fontWeight: '500'}}>$50</Text>
    </View>
  )
  return (
    <SafeAreaView style={{flex: 1}}>
      <KiloBagHeader title="Order Details" />
      
     {
      anyTimePay &&  <View style={OrderDetailStyle.PayAnytimeView}>
      <Text style={OrderDetailStyle.PayTitle}>Pay anytime for a contactless delivery</Text>
      <View style={{flexDirection:  'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10}}>
          <Text style={{fontSize: 15, fontWeight: '500', color: 'black'}}>Total: <Image source={require('../../../assets/rupiIconBlack.png')} /> 500</Text>
          <Pressable style={[ModalStyle.ButtonsCommonStyle, {width: 114, height: 34}]}>
            <Text style={{fontSize: 14, fontWeight: '500', color: 'white'}}>Pay Now</Text>
          </Pressable>
      </View>
  </View>
     }

      <View style={OrderDetailStyle.MainView}>
          <View style={OrderDetailStyle.DescripView}>
              <View>
                  <Text style={MyOrderItemStyle.ItemText}>Order ID: 17837638299221</Text>
                  <Text style={{fontSize: 11, color: '#6F6F6F' , fontWeight: '500', marginVertical: 8}}>on 12/04/2022 at 12:40PM</Text>
                  {progress && <OrderProcess title="In Progress" colors="#FF8F27" />}
                  {delivered && <OrderProcess title="Delivered" colors={Colors.LightGreen} />}
                  <Text style={{fontSize: 11, color: 'black' , fontWeight: '500', marginTop: 8}}>Payment Method: <Text style={{fontSize: 11, color: 'black' , fontWeight: '400'}}>Online</Text></Text>
              </View>

             <View>
              <Pressable style={[MyOrderItemStyle.DeliverBtn, {backgroundColor: 'white', borderColor: Colors.LightGreen, borderWidth: 1, borderRadius: 5, height: 31, width: 95}]}>
                  <Text style={{fontSize: 13, fontWeight: '500', color: Colors.LightGreen, textAlign: 'center'}}>Track</Text>
                </Pressable>
             </View>
          </View>
          <Text style={[OrderDetailStyle.LocationText, {paddingVertical: 12}]}>Delivery Address: <Text style={[MyOrderItemStyle.ItemText, {fontWeight: '300'}]}>Nelamangala - Majestic Service...</Text></Text>

          <FlatList
          data={[1,2,3,4,5,6,7,8,9,10]}
          renderItem={OrderItem} 
          keyExtractor={item => item.index}
          horizontal={false}
          showsVerticalScrollIndicator={true}
          indicatorStyle={{color: 'red'}} 
          /> 
        <View style={OrderDetailStyle.CalculationView}>
            <View>
              <Text style={OrderDetailStyle.CalText}>Subtotal</Text>
              <Text style={OrderDetailStyle.CalText}>Shipping Charges</Text>
              <Text style={OrderDetailStyle.CalText}>Estimating Tax</Text>
              <Text style={OrderDetailStyle.TotalText}>Total</Text>
            </View>
            <View>
              <Text style={[OrderDetailStyle.CalText, {fontWeight: '600', fontSize: 13}]}>$450</Text>
              <Text style={[OrderDetailStyle.CalText, {fontWeight: '600', fontSize: 13}]}>2</Text>
              <Text style={[OrderDetailStyle.CalText, {fontWeight: '600', fontSize: 13}]}>1</Text>
              <Text style={OrderDetailStyle.TotalText}>$452</Text>
            </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

