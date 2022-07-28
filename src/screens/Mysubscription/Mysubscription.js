import { View, Text, SafeAreaView , FlatList, StyleSheet, Image, Pressable} from 'react-native'
import React, { useState } from 'react'
import KiloBagHeader from '../../components/KiloBagHeader/KiloBagHeader'
import { Colors } from './../../Theme/Colors';
import { MysubscriptionStyle } from './../../Styles/MySubscription/MySubscription';
import Modals from '../../components/Modals/Modals';

const Buttons = ({title, bg, img, OnPress}) => {
    return (
        <Pressable onPress={OnPress} style={[MysubscriptionStyle.ButtonStyle, {backgroundColor: bg}]}>
        <Image source={img} />
        <Text style={{fontSize: 12, fontWeight: '500', color: 'white', marginLeft: 7}}>
            {title}
        </Text>
    </Pressable>
    )
} 
export default function Mysubscription() {
    const [modalVisible, setModalVisible] = useState(false);
    const [option, setOption] = useState('')

    const SubscriptionProduct = ({item}) => (
        <View style={MysubscriptionStyle.ProductMainView}>
            <View style={MysubscriptionStyle.TextView}>
                <Text style={{fontSize: 12, fontWeight: '500', color: '#303030'}}>Subscription Start Date: 12/04/2022</Text>
            </View>
            <View style={MysubscriptionStyle.ProductView}>
                <View style={MysubscriptionStyle.DescriptionView}>
                    <View style={MysubscriptionStyle.ImgView}>
                        <Image style={{height: 69, width: 63}} source={require('../../../assets/Milk.png')} />
                    </View>
                    <View>
                        <Text style={{fontSize: 12, fontWeight: '500', color: '#303030', marginBottom: 4}}>Amul Taaza Milk</Text>
                        <Text style={{fontSize: 13, fontWeight: '500', color: '#454545', marginBottom: 4}}>Subscription: <Text style={{ color: '#2E6CA5'}}>Daily</Text></Text>
                        <Text style={{fontSize: 12, fontWeight: '500', color: 'black'}}>$21 <Text style={{ color: Colors.LightGreen}}>250ml</Text></Text>
                        <Text style={{fontSize: 12, fontWeight: '500', color: 'black', marginTop: 4}}>Qty: 2</Text>
                    </View>
                </View>
                <View style={MysubscriptionStyle.BtnView}>
                    <Buttons OnPress={() => {
                        setModalVisible(true)
                        setOption('delete')
                    }} title="DELETE" bg={Colors.LightGreen} img={require('../../../assets/delete.png')}/>
                    <Buttons   OnPress={() => {
                        setModalVisible(true)
                        setOption('modify')
                    }} title="MODIFY" bg={Colors.LightGreen} img={require('../../../assets/pencil.png')}/>
                    {
                        item == 4 || <Buttons title="PAUSE" bg={Colors.LightGreen} img={require('../../../assets/pause.png')} />
                    }
                    {
                        item == 4 && <Buttons title="RESUME" bg='red'  img={require('../../../assets/resume.png')} />
                    }
                </View>
            </View>
        </View>
    )
  return (
    <SafeAreaView style={{flex: 1}}>
        <KiloBagHeader title="My Subscriptions" search={true} image={true} />
        <View style={{paddingHorizontal: 14, flex: 1, paddingBottom: 20}}>
            <FlatList
            data={[1,2,3,4,5,6,7,8,9, 10]}
            renderItem={SubscriptionProduct}
            keyExtractor={item => item.index}
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            />
             <Modals option={option} modalVisible={modalVisible} setModalVisible={setModalVisible} /> 
        
        </View>

       
    </SafeAreaView>
  )
}

