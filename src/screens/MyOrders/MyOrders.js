import { View, Text, SafeAreaView, UIManager, Pressable, Image, ScrollView, LayoutAnimation,TouchableOpacity , Animated, Dimensions, StyleSheet} from 'react-native'
import React, { useState } from 'react'
import KiloBagHeader from '../../components/KiloBagHeader/KiloBagHeader';
import { Colors } from './../../Theme/Colors';
import MyOrderItem from './../../components/MyOrderItem/MyOrderItem';
import CustomButton from '../../components/CustomButton';
import { MyOrderItemStyle, MyOrderStyle } from './../../Styles/MyOrderStyle/MyOrderStyle';
import * as Animatable from 'react-native-animatable';

const { width } = Dimensions.get("window");
export default function MyOrders() {
  const [selected, setSelected] = useState(true);
  const [selected2, setSelected2] = useState(false);
  const notfound = false;

  const orders = [1,2,3,4,5,];

  return (
    <SafeAreaView style={{flex: 1}}>
        <KiloBagHeader title="My Orders" search={true} image={true} />
        <ScrollView style={MyOrderStyle.MainContainer} showsVerticalScrollIndicator={false}>
            <View style={MyOrderStyle.MainView}>
              <View style={MyOrderStyle.TabContainer}>
                  <TouchableOpacity activeOpacity={0.5} onPress={() => {
                    setSelected2(false)
                    setSelected(true);
                  }} style={selected ? MyOrderStyle.SelectedStyle : MyOrderStyle.NotSelectedStyle}>
                      <Text style={selected ? MyOrderStyle.SelectedText : MyOrderStyle.NotSelectedText}>Buy Now</Text>
                  </TouchableOpacity>

                  <TouchableOpacity activeOpacity={0.5} onPress={() => {
                    setSelected(false);
                    setSelected2(true);
                  }} style={selected2 ? MyOrderStyle.SelectedStyle : MyOrderStyle.NotSelectedStyle}>
                      <Text style={selected2 ? MyOrderStyle.SelectedText : MyOrderStyle.NotSelectedText}>Subscriptions</Text>
                  </TouchableOpacity>
              </View>

                {
                  selected && 
                  <Animatable.View animation="slideInLeft" duration={1000} easing="ease-in-out" >
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
                  </Animatable.View>
                }

               {
                selected2 &&
                <Animatable.View animation="slideInRight" duration={1000} easing="ease-in-out">
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
                </Animatable.View >
               }
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}
