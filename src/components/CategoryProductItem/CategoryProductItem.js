import { View, Text, FlatList, StyleSheet, Pressable, Image, Modal } from 'react-native'
import React, {useState} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Colors } from './../../Theme/Colors';
import { ModalStyle } from './../../Styles/ModalStyle/ModalStyle';

const  CategoryProductItem = ({subscription, setBottomModalVisible}) =>  {

    const ProductItem = ({item}) => (

        <View key={item} style={styles.MainContainer}>
            <Pressable onPress={() => navigation.navigate('ProductDetails')}>
                <View style={{ flexDirection: 'row', }}>
                    <View style={styles.imageView}>
                        <Image source={require('../../../assets/waterMalon.png')} />
                    </View>
                    <View style={{ alignItems: 'flex-start', justifyContent: 'space-between', paddingVertical: 5, }}>
                    
                        <View>
                            <Text style={{color: 'black', fontSize: 14}}>Watermelon</Text>
                        </View>

                        <View style={{flexDirection: 'row', marginVertical: 10}}>
                            <Text style={{color: 'black', fontSize: 14, fontWeight: '500', }}>$21</Text>
                            <Pressable onPress={() => setBottomModalVisible(true)} >
                                    <Text style={{color: Colors.LightGreen, fontSize: 11, marginLeft: 15, fontWeight: '600'}}>2500ml <Octicons name='chevron-down' style={{ color: Colors.LightGreen, fontSize: 12, }} /></Text>
                            </Pressable>
                        </View>

                        {
                            subscription ?     <View  style={styles.AmountBtntow}>
                            <Text style={{color: '#B7B7B7', fontSize: 10}}>Subscribe @20</Text>
                        </View> :     <Pressable  style={styles.AmountBtn}>
                            <Text style={{color: Colors.DarkGray, fontSize: 10}}>Subscribe @20</Text>
                        </Pressable>
                        }
                    
                    </View>
                </View>
            </Pressable>

            {
                item == 1 && <View style={{ justifyContent: 'flex-end', paddingBottom: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Pressable style={{ backgroundColor: Colors.LightGreen, padding: 2, borderRadius: 2 }}>
                    <Entypo name='minus' style={{ color: 'white', fontSize: 16, fontWeight: '600' }} />
                    </Pressable>
                    <Text style={{ marginHorizontal: 12, color: 'black' }}>2</Text>
                    <Pressable style={{ backgroundColor: Colors.LightGreen, padding: 2, borderRadius: 2 }}>
                        <Entypo name='plus' style={{ color: 'white', fontSize: 16, fontWeight: '600', }} />
                    </Pressable>
                </View>
            </View>
            }
            {
            item == 2 &&  <View  style={{ justifyContent: 'flex-end', paddingBottom: 5 }}>
            <Pressable style={styles.ButNowBtn}>
                <Text style={{color: 'white', fontSize: 12}}>Buy Now</Text>
            </Pressable>
        </View>
            }
            {
                item == 3 && <View  style={{ justifyContent: 'flex-end', paddingBottom: 5 }}>
            <Text style={{color: Colors.LightPink , fontSize: 12, paddingLeft: 10, fontWeight: '700'}}>OUT OF STOCK</Text>
            </View> 
                
            }

        </View> 
    )
  return (
    <FlatList
    keyExtractor={item => item}
    data={[1, 2, 3, 4, 5, 6, 7, 9, 10]}
    renderItem={ProductItem}
    horizontal={false}
    showsHorizontalScrollIndicator={false}
    showsVerticalScrollIndicator={false}
    />
  )
}

export default CategoryProductItem;

const styles = StyleSheet.create({
    imageView:{ height: 90, width: 90, borderRadius: 12, marginRight: 12 , justifyContent: 'center', alignItems: 'flex-start',},
    MainContainer:{ padding: 12, borderRadius: 12, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12,        backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 1, },
    AmountBtn:{ borderColor: Colors.LightGreen, borderRadius: 5,  borderWidth: 1 , width: 88, height: 27, justifyContent: 'center', alignItems: 'center'},
    AmountViewStyle:{width: 200,},
    ModalText:{fontSize: 20, fontWeight: '500', color: Colors.Black, marginTop: 10, borderColor: Colors.LightGreen, borderWidth: 1, paddingHorizontal: 15, paddingVertical: 5},
    ButNowBtn:{
        backgroundColor: Colors.LightGreen,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        height: 27,
        width: 88
    },
    AmountBtntow:{borderColor: '#B7B7B7',borderRadius: 5,  borderWidth: 1 , width: 88, height: 27, justifyContent: 'center', alignItems: 'center'}
})