import { View, Text, TouchableOpacity, Image, StyleSheet , FlatList, Pressable, Modal} from 'react-native'
import React, {useState} from 'react'
import { Colors } from './../../Theme/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { ModalStyle } from './../../Styles/ModalStyle/ModalStyle';

const FressFindItem = ({items}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [amount, setAmount] = useState(null)
    const freshItem =  ({item}) => (
    
        <View  style={{ marginVertical: 16, }}>
            <View style={FreshItemStyle.categories}>
                <Image style={{width: '80%', height: '80%'}} source={require('../../../assets/Eggpland.png')}/>
            </View>
            <View style={FreshItemStyle.itemFooter}>
                <Text style={FreshItemStyle.categoryTitle}>{item}</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 5}}>
                    <Text style={{color: Colors.White, fontSize: 14, paddingVertical: 20}}>$21</Text>
                    <Pressable onPress={() => setModalVisible(true)}  style={FreshItemStyle.AmountBtn}>
                        <Text  style={{color: Colors.Black}}>1Kg </Text>
                        <MaterialIcons name='keyboard-arrow-down' style={{ fontSize: 20, color: Colors.Black, }} />
                    </Pressable>
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
                        <View style={[ModalStyle.modalView,  FreshItemStyle.AmountViewStyle]}>
                            <Pressable onPress={() => {
                                setAmount('1Kg')
                                setModalVisible(false)
                            }} ><Text style={FreshItemStyle.ModalText}>1Kg</Text></Pressable>
                            <Pressable onPress={() => {
                                setAmount('')
                                setModalVisible(false)
                            }} ><Text style={FreshItemStyle.ModalText}>2Kg</Text></Pressable>
                            <Pressable onPress={() => {
                                setAmount('2Kg')
                                setModalVisible(false)
                            }} ><Text style={FreshItemStyle.ModalText}>2.5Kg</Text></Pressable>
                            <Pressable onPress={() => {
                                setAmount('2.5Kg')
                                setModalVisible(false)
                            }} ><Text style={FreshItemStyle.ModalText}>3Kg</Text></Pressable>
                            <Pressable onPress={() => {
                                setAmount('3Kg')
                                setModalVisible(false)
                            }} ><Text style={FreshItemStyle.ModalText}>5Kg</Text></Pressable>
                        </View> 
                    </View>
                </Modal>
            </View>
        </View>
    )
  return (
    
        <FlatList
        contentContainerStyle={FreshItemStyle.categoryContainer}
        data={items}
        renderItem={freshItem}
        keyExtractor={item => item.index}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        />

  )
}


export default FressFindItem;

const FreshItemStyle = StyleSheet.create({

    categories: {
        height: 100,
        width: 110,
        justifyContent: 'center',
        alignItems: 'center'
    },
    categoryTitle: {
        color: Colors.White,
        fontWeight: '500',
        marginTop: 5,
        fontSize: 16,
        marginLeft: 5
    },
    categoryContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    itemFooter:{
        backgroundColor: Colors.LightGreen,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    AmountBtn:{
        backgroundColor: Colors.White,
        borderRadius: 30,
        width: 60,
        flexDirection: 'row',
        paddingVertical: 5,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    ModalText:{fontSize: 20, fontWeight: '500', color: Colors.Black, marginTop: 10, borderColor: Colors.LightGreen, borderWidth: 1, paddingHorizontal: 15, paddingVertical: 5},
    AmountViewStyle:{width: 200}
})