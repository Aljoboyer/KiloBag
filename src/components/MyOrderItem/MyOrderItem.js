import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native'
import React from 'react'
import CustomButton from '../CustomButton'
import { Colors } from './../../Theme/Colors';
import { MyOrderItemStyle } from '../../Styles/MyOrderStyle/MyOrderStyle';
import { useNavigation } from '@react-navigation/native';


const DeliveryButton = ({title, colors}) => {
    return (
        <Pressable style={MyOrderItemStyle.DeliverBtn}>
        <Text style={{fontSize: 13, fontWeight: '500', color: colors}}>{title}</Text>
    </Pressable>
    )
}
export default function MyOrderItem({orders}) {
    const navigation = useNavigation()
    const OrderItem = ({item}) => (
        <Pressable onPress={() => navigation.navigate('OrderDetails')} style={MyOrderItemStyle.OrderItemView}>
            <View>
                <Text style={MyOrderItemStyle.ItemText}>Order ID: 17837638299221</Text>
                <Text style={{fontSize: 11, color: '#6F6F6F' , fontWeight: '500', marginVertical: 7}}>On 12/04/2022 at 12:40PM</Text>
                <Pressable style={MyOrderItemStyle.ReorderBtn}>
                    <Text style={{fontSize: 13, fontWeight: '500', color: 'white', textAlign: 'center'}}>Delivered</Text>
                </Pressable>
            </View>
            <View style={{justifyContent: 'space-between'}}>
                <Text style={MyOrderItemStyle.ItemText}>$50</Text>
                {
                    item == 1  && <DeliveryButton title="Delivered" colors={Colors.LightGreen} />
                }
                {
                    item == 3  && <DeliveryButton title="In progress" colors='#FF8F27' />
                }
                {
                    item == 4  && <DeliveryButton title="On the way" colors='#2E6CA5' />
                }
                {
                    item == 5  && <DeliveryButton title="Payment Failed" colors='#D10511' />
                }
                {
                    item == 2  && <Pressable style={MyOrderItemStyle.CancelBtn}>
                        <Text style={{fontSize: 13, fontWeight: '500', color: '#A7A7A7'}}>In Progress</Text>
                    </Pressable>
                }
            </View>
        </Pressable>
    )
  return (
    <FlatList
    data={orders}
    renderItem={OrderItem} 
    keyExtractor={item => item.index}
    horizontal={false}
    showsHorizontalScrollIndicator={false}
    showsVerticalScrollIndicator={false}
    />
  )
}

