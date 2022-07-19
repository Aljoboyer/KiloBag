import { View, Text, Dimensions, StyleSheet ,Pressable, FlatList, ScrollView} from 'react-native'
import React from 'react'
import Modal from "react-native-modalbox";
import Entypo from 'react-native-vector-icons/Entypo'
import { Colors } from './../../Theme/Colors';
import { BottomModalStyle } from '../../Styles/ModalStyle/ModalStyle';

export default function BottomModal({bottomModalVisible, setBottomModalVisible}) {
    const ProductItem = ({item}) => (
        <View style={BottomModalStyle.ContentView}>
            <Text style={{fontSize: 15, fontWeight: '500', color: 'black'}}>Milk <Text style={{fontSize: 12, fontWeight: '500', color: Colors.LightGreen}}>500ml</Text></Text>

            <Text style={{fontSize: 15, fontWeight: '500', color: 'black', marginVertical: 10}}>$21 <Text style={{fontSize: 15, fontWeight: '500', color: Colors.LightGray, textDecorationLine: 'line-through'}}>$21</Text></Text>

            <View style={{flexDirection: 'row', justifyContent: 'space-between' , alignItems: 'center'}}>
                <Pressable  style={BottomModalStyle.AmountBtn}>
                    <Text style={{color: Colors.DarkGray, fontSize: 15}}>Subscribe @20</Text>
                </Pressable>

                <Pressable  style={BottomModalStyle.BuyNowbtn}>
                    <Text style={{color: 'white', fontSize: 15}}>Buy Now</Text>
                </Pressable>
                
            </View>
        </View>
    )

  return (
        <Modal
        entry="bottom"
        backdropPressToClose={true}
        isOpen={bottomModalVisible}
        style={BottomModalStyle.modalBox}
        onClosed={() => setBottomModalVisible(false)}
    >
        <ScrollView style={BottomModalStyle.ContentContainer}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{fontSize: 15, fontWeight: '500', color: Colors.LightGreen}}>Choose Size</Text>
                <Pressable onPress={() => setBottomModalVisible(false)}>
                <Entypo name='cross' style={{fontSize: 30 , color: Colors.LightGreen}} />
                </Pressable>
            </View>

                <FlatList
                keyExtractor={item => item}
                data={[1, 2,3,4]}
                renderItem={ProductItem}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                />
        </ScrollView>
        </Modal>
  )
}

