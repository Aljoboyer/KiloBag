import { View, Text, TouchableOpacity, Image, StyleSheet , FlatList, Pressable, Modal} from 'react-native'
import React, {useState} from 'react'
import { Colors } from './../../Theme/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { BottomModalStyle, ModalStyle } from './../../Styles/ModalStyle/ModalStyle';
import { FreshItemStyle } from '../../Styles/FreshFindStyle/FreshFindStyle';
import { useNavigation } from '@react-navigation/native';

const FreshFindItem = ({items, setBottomModalVisible}) => {
    const navigation = useNavigation()

    const freshItem =  ({item}) => (
    
        <View  style={FreshItemStyle.CategoryItemView}>
            <View style={FreshItemStyle.categories}>
                <Image style={{width: 56, height: 55}} source={require('../../../assets/Eggpland.png')}/>
            </View>
            <View  style={FreshItemStyle.itemFooter}>
                <Text style={FreshItemStyle.categoryTitle}>{item}</Text>
                <View style={FreshItemStyle.AmountView}>
                    <Text style={{color: 'black', fontSize: 13, paddingVertical: 10}}>$21</Text>
                    <Pressable onPress={() => setBottomModalVisible(true)}  style={FreshItemStyle.AmountBtn}>
                        <Text  style={{color: Colors.LightGreen}}>1Kg</Text>
                        <MaterialIcons name='keyboard-arrow-down' style={{ fontSize: 17, color: Colors.LightGreen, }} />
                    </Pressable>
                </View> 
                <Pressable onPress={() => navigation.navigate('Subscribe')}  style={FreshItemStyle.subscribeBtn}>
                    <Text style={{color: Colors.DarkGray, fontSize: 11, fontWeight: '500'}}>Subscribe @20</Text>
                </Pressable>
                <Pressable  style={FreshItemStyle.BuyNowbtn}>
                    <Text style={{color: 'white', fontSize: 11, alignItems: 'center'}}>Buy Now</Text>
                </Pressable>
            </View>
        </View> 
    )
  return (
    
        <FlatList
        data={items}
        renderItem={freshItem}
        keyExtractor={item => item.index}
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        />
  )
}


export default FreshFindItem;

