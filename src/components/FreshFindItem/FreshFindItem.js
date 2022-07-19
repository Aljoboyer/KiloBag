import { View, Text, TouchableOpacity, Image, StyleSheet , FlatList, Pressable, Modal} from 'react-native'
import React, {useState} from 'react'
import { Colors } from './../../Theme/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { BottomModalStyle, ModalStyle } from './../../Styles/ModalStyle/ModalStyle';
import { FreshItemStyle } from '../../Styles/FreshFindStyle/FreshFindStyle';

const FreshFindItem = ({items, setBottomModalVisible}) => {


    const freshItem =  ({item}) => (
    
        <View  style={FreshItemStyle.CategoryItemView}>
            <View style={FreshItemStyle.categories}>
                <Image style={{width: '80%', height: '80%'}} source={require('../../../assets/Eggpland.png')}/>
            </View>
            <View  style={FreshItemStyle.itemFooter}>
                <Text style={FreshItemStyle.categoryTitle}>{item}</Text>
                <View style={FreshItemStyle.AmountView}>
                    <Text style={{color: 'black', fontSize: 14, paddingVertical: 20}}>$21</Text>
                    <Pressable onPress={() => setBottomModalVisible(true)}  style={FreshItemStyle.AmountBtn}>
                        <Text  style={{color: Colors.LightGreen}}>1Kg </Text>
                        <MaterialIcons name='keyboard-arrow-down' style={{ fontSize: 20, color: Colors.LightGreen, }} />
                    </Pressable>
                </View> 
                <Pressable  style={[BottomModalStyle.AmountBtn, {marginBottom: 35}]}>
                    <Text style={{color: Colors.DarkGray, fontSize: 15}}>Subscribe @20</Text>
                </Pressable>
                <Pressable  style={FreshItemStyle.BuyNowbtn}>
                    <Text style={{color: 'white', fontSize: 15, alignItems: 'center'}}>Buy Now</Text>
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

