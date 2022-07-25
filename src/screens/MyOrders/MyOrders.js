import { View, Text, SafeAreaView, StyleSheet, Pressable, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import KiloBagHeader from '../../components/KiloBagHeader/KiloBagHeader';
import { Colors } from './../../Theme/Colors';
import MyOrderItem from './../../components/MyOrderItem/MyOrderItem';
import CustomButton from '../../components/CustomButton';
import { MyOrderItemStyle, MyOrderStyle } from './../../Styles/MyOrderStyle/MyOrderStyle';

export default function MyOrders() {
  const [selected, setSelected] = useState(false);
  const [selected2, setSelected2] = useState(false);
  const notfound = false;

  const orders = [1,2,3,4,5,]
  return (
    <SafeAreaView style={{flex: 1}}>
        <KiloBagHeader title="My Orders" search={true} image={true} />
        <ScrollView style={MyOrderStyle.MainContainer} showsVerticalScrollIndicator={false}>
            <View style={MyOrderStyle.MainView}>
              <View style={MyOrderStyle.TabContainer}>
                  <Pressable onPress={() => {
                    setSelected2(false)
                    setSelected(true);
                  }} style={selected ? MyOrderStyle.SelectedStyle : MyOrderStyle.NotSelectedStyle}>
                      <Text style={selected ? MyOrderStyle.SelectedText : MyOrderStyle.NotSelectedText}>Buy Now</Text>
                  </Pressable>
                  <Pressable onPress={() => {
                    setSelected(false);
                    setSelected2(true)
                  }} style={selected2 ? MyOrderStyle.SelectedStyle : MyOrderStyle.NotSelectedStyle}>
                      <Text style={selected2 ? MyOrderStyle.SelectedText : MyOrderStyle.NotSelectedText}>Subscriptions</Text>
                  </Pressable>
              </View>

                {
                  selected && 
                  <View style={MyOrderStyle.MyorderView}>
                      {
                        notfound &&  <View style={MyOrderStyle.NotFoundView}>
                            <Image source={require('../../../assets/noOrderFound.png')} />
                            <Text style={MyOrderStyle.NotFoundText}>No Orders Found!</Text>
                        </View>
                      }
                      <MyOrderItem orders={orders} />
                      <Pressable style={MyOrderStyle.Buttons}>
                      <Text style={{fontSize: 13, fontWeight: '500', color: 'white'}}>Load More</Text>
                    </Pressable>
                  </View>
                }

               {
                selected2 &&
                <View style={MyOrderStyle.SubscriptionView}>
                    {
                      notfound && <View style={MyOrderStyle.NotFoundView}>
                      <Image source={require('../../../assets/noOrderFound.png')} />
                          <Text style={MyOrderStyle.NotFoundText}>No Subscription Orders Found!</Text>
                      </View>
                    }
                    <MyOrderItem orders={orders} />
                    <Pressable style={MyOrderStyle.Buttons}>
                      <Text style={{fontSize: 15, fontWeight: '500', color: 'white'}}>Load More</Text>
                    </Pressable>
                </View>
               }
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

