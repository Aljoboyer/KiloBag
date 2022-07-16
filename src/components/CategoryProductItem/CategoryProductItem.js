import { View, Text, FlatList, StyleSheet, Pressable, Image, Modal } from 'react-native'
import React, {useState} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Colors } from './../../Theme/Colors';
import { ModalStyle } from './../../Styles/ModalStyle/ModalStyle';

const  CategoryProductItem = ({subscription}) =>  {
    const [modalVisible, setModalVisible] = useState(false);
    const [amount, setAmount] = useState(null)
  return (
    <FlatList
    keyExtractor={item => item}
    data={[1, 2, 3, 4, 5, 6, 7, 9, 10]}
    renderItem={
        ({ item, index, separators }) => {
            return <>
            <View key={item} style={styles.MainContainer}>
                <Pressable onPress={() => navigation.navigate('ProductDetails')}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.imageView}>
                            <Image source={require('../../../assets/waterMalon.png')} />
                        </View>
                            <View style={{ justifyContent: 'space-between', paddingVertical: 5, }}>
                           
                            <View>
                                <Text style={{color: 'black', fontSize: 14}}>Watermelon</Text>

                                
                            </View>

                            <View style={{flexDirection: 'row', marginVertical: 5}}>
                                <Text style={{color: 'black', fontSize: 14}}>$21</Text>
                                <Text style={{color: Colors.LightGray, fontSize: 14, textDecorationLine: 'line-through', marginLeft: 15}}>$21</Text>
                            </View>
                            <Pressable onPress={() => setModalVisible(true)} style={styles.AmountBtn}>
                                <Text style={{color: Colors.White}}>1kg {" "} <Octicons name='chevron-down' style={{ color: 'white', fontSize: 12, }} /></Text>
                            </Pressable>
                        </View>
                    </View>
                </Pressable>

                <View style={{ justifyContent: 'space-between', padding: 2 }}>

                    {
                        subscription == 'instant' && <MaterialCommunityIcons name='flash' style={{ fontSize: 20, alignSelf: 'flex-end', color: Colors.LightGreen, }} />
                    }

                    {
                        subscription == 'daily' && <MaterialCommunityIcons name='clock-time-four' style={{ fontSize: 20, alignSelf: 'flex-end', color: Colors.LightPink, }} />
                    }
                    {
                        subscription == 'monthly' && <MaterialCommunityIcons name='calendar-range' style={{ fontSize: 20, alignSelf: 'flex-end', color: Colors.LightBlue, }} />
                    }
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
            </View> 
            <View style={ModalStyle.centeredView}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                setModalVisible(!modalVisible);
                }}
            >
                <View style={ModalStyle.centeredView}>
                    <View style={[ModalStyle.modalView,  styles.AmountViewStyle]}>
                        <Pressable onPress={() => {
                            setAmount('1Kg')
                            setModalVisible(false)
                        }} ><Text style={styles.ModalText}>1Kg</Text></Pressable>
                        <Pressable onPress={() => {
                            setAmount('')
                            setModalVisible(false)
                        }} ><Text style={styles.ModalText}>2Kg</Text></Pressable>
                        <Pressable onPress={() => {
                            setAmount('2Kg')
                            setModalVisible(false)
                        }} ><Text style={styles.ModalText}>2.5Kg</Text></Pressable>
                        <Pressable onPress={() => {
                            setAmount('2.5Kg')
                            setModalVisible(false)
                        }} ><Text style={styles.ModalText}>3Kg</Text></Pressable>
                        <Pressable onPress={() => {
                            setAmount('3Kg')
                            setModalVisible(false)
                        }} ><Text style={styles.ModalText}>5Kg</Text></Pressable>
                    </View> 
                </View>
            </Modal>
            </View>
            </>
        }
    }
/>
  )
}

export default CategoryProductItem;

const styles = StyleSheet.create({
    imageView:{ height: 90, width: 90, borderRadius: 12, marginRight: 12 , justifyContent: 'center', alignItems: 'center', borderColor: Colors.LightGreen, borderWidth: 1.5},
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
    AmountBtn:{ backgroundColor: Colors.LightGreen, padding: 4, borderRadius: 8, alignItems: 'center' },
    AmountViewStyle:{width: 200,},
    ModalText:{fontSize: 20, fontWeight: '500', color: Colors.Black, marginTop: 10, borderColor: Colors.LightGreen, borderWidth: 1, paddingHorizontal: 15, paddingVertical: 5},

})