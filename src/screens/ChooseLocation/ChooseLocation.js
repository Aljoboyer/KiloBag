import { View, Text, SafeAreaView, ScrollView, StyleSheet, FlatList, Pressable , Dimensions} from 'react-native'
import React from 'react'
import KiloBagHeader from './../../components/KiloBagHeader/KiloBagHeader';
import { TextInput } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Colors } from './../../Theme/Colors';
import { Image } from 'react-native';
import { useState } from 'react';
import CustomButton from '../../components/CustomButton';
import Modal from "react-native-modalbox";
import Entypo from 'react-native-vector-icons/Entypo';
import { ChooseLocationStyle } from './../../Styles/ChooseLocationStyle/ChooseLocationStyle';

export default function ChooseLocation() {
    const [isSelected, setIsSelected] = useState(false);
    const [bottomModalVisible, setBottomModalVisible] = useState(false);
    const show = true
    const showtwo = false
    const come = false

    const data = [
        {id: 'd',name: 'Home', address: 'Nelamangala - Majestic Service Rd, Manjunatha Nagar, Bengaluru, Karnataka 560073'},
        {id: 'sd',name: 'Office', address: 'Nelamangala - Majestic Service Rd, Manjunatha Nagar, Bengaluru, Karnataka 560073'},
        {id: 'dh',name: 'Home', address: 'Nelamangala - Majestic Service Rd, Manjunatha Nagar, Bengaluru, Karnataka 560073'},
        {id: 'dee',name: 'Office', address: 'Nelamangala - Majestic Service Rd, Manjunatha Nagar, Bengaluru, Karnataka 560073'}
    ]
    
    const LocationItem = ({item}) => (
        <Pressable onPress={() => setIsSelected(!isSelected) } style={[ChooseLocationStyle.LocationItemView, isSelected && ChooseLocationStyle.SelectedStyle]}>
          
            {
                item.name == 'Home' ? <Image  source={require('../../../assets/locationHome.png')} /> : <Image  source={require('../../../assets/officeLocation.png')} /> 
            }

            <View style={{paddingLeft: 10}}>
                <Text style={{fontSize: 14, color: '#363636', fontWeight: '300', paddingBottom: 10}}>{item.name}</Text>
                <Text style={{fontSize: 12, color: '#505050'}}>{item.address}</Text>
            </View>
        </Pressable>
    )
    
    const SearchItem = ({item}) => (
        <Pressable >
            <View style={{flexDirection: 'row', alignItems: 'center', paddingTop: 15}}>
                <Image source={require('../../../assets/LocationIcon2.png')} />
                <View style={{paddingLeft: 10}}>
                    <Text style={{fontSize: 15, fontWeight: '500', color: '#363636', paddingBottom: 5}}>Bangalore</Text>
                    <Text style={{fontSize: 13, fontWeight: '400'}}>Bangalore, Karnataka, India</Text>
                </View>
            </View>
        </Pressable>
    )
  return (
    <SafeAreaView style={{flex: 1}}>
        <KiloBagHeader  title='Choose Location'/>
        <ScrollView style={{padding: 25}}>
            {
                showtwo &&  <View style={ChooseLocationStyle.InputView}>
                <TextInput style={{height: 55}} placeholder='Choose your location' />
                <FontAwesome name='search' style={{ fontSize: 18, color: Colors.LightGreen }} />
            </View>
            }

            {
                show &&   <View style={ChooseLocationStyle.CurrentLocationView}>
                <Image source={require('../../../assets/currentLocation.png')} />
                <Text style={ChooseLocationStyle.CurrentTitle}>Use Current Location</Text>
            </View>
            }
         
           {
            show &&  <View style={{paddingBottom: 30}}>
            <Text style={[ChooseLocationStyle.CurrentTitle, {fontWeight: '500', paddingBottom: 10}]}>Saved Address</Text>
            <FlatList
            data={data}
            renderItem={LocationItem}
            keyExtractor={item => item.id}
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            />
        </View>
           }

         {
            showtwo &&    <FlatList
            data={[1,2,3,4,5]}
            renderItem={SearchItem}
            keyExtractor={item => item}
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            />
         }

        {
            come && <View style={ChooseLocationStyle.ComingView}>
            <Image source={require('../../../assets/commingSoon.png')} />
            <Text style={ChooseLocationStyle.ComingTitle}>COMING SOON...</Text>
            <CustomButton title="Request Delivery" customStyles={{alignSelf: 'center', width:  180, borderRadius: 10}}/>
        </View>
        }

        </ScrollView>
        
        <Modal
            entry="bottom"
            backdropPressToClose={true}
            isOpen={bottomModalVisible}
            style={ChooseLocationStyle.modalBox}
            onClosed={() => setBottomModalVisible(false)}
            >
            <View style={ChooseLocationStyle.ContentContainer}>
                <Pressable style={{alignItems: 'flex-end'}} onPress={() => setBottomModalVisible(false)}>
                    <Entypo name='cross' style={{fontSize: 30 , color: Colors.LightGreen}} />
                </Pressable>
                <View style={{marginTop: 10}}>
                    <Text style={[ChooseLocationStyle.InputLabel, {color: Colors.LightGreen}]}>Add Title</Text>
                    <TextInput style={ChooseLocationStyle.Inputs} />
                </View>
                <View style={{marginTop: 10}}>
                    <Text style={ChooseLocationStyle.InputLabel}>Name</Text>
                    <TextInput style={ChooseLocationStyle.Inputs} />
                </View>
                <View style={{marginTop: 10}}>
                    <Text style={ChooseLocationStyle.InputLabel}>Flat No./House No.</Text>
                    <TextInput style={ChooseLocationStyle.Inputs} />
                </View>
                <View style={{marginTop: 10}}>
                    <Text style={ChooseLocationStyle.InputLabel}>Street Name</Text>
                    <TextInput multiline={true} style={ChooseLocationStyle.Inputs} />
                </View>
                <View style={{marginTop: 10}}>
                    <Text style={ChooseLocationStyle.InputLabel}>City</Text>
                    <TextInput style={ChooseLocationStyle.Inputs} />
                </View>
                <View style={{marginTop: 10}}>
                    <Text style={ChooseLocationStyle.InputLabel}>Pincode</Text>
                    <TextInput style={ChooseLocationStyle.Inputs} />
                </View>
                <View style={{marginTop: 10}}>
                    <Text style={ChooseLocationStyle.InputLabel}>Landmark</Text>
                    <TextInput style={ChooseLocationStyle.Inputs} />
                </View>

                <CustomButton onPress={() => setBottomModalVisible(false)}title="SAVE ADDRESS" customStyles={[ChooseLocationStyle.AddBtn, {marginVertical: 15}]} />
            </View>
        </Modal>

        {
            show && <CustomButton onPress={() => setBottomModalVisible(true)}title="+ ADD ADDRESS" customStyles={ChooseLocationStyle.AddBtn} />
        }

  
    </SafeAreaView>
  )
}

