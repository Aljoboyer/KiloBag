import { View, Text, StyleSheet, Image, Pressable , TouchableHighlight} from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Colors } from '../../Theme/Colors';
import Octicons from 'react-native-vector-icons/Octicons'
import Entypo from 'react-native-vector-icons/Octicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { CategoryStyle } from './../../Styles/CategoryStyle/CategoryStyle';
import { useNavigation } from '@react-navigation/native';

const KiloBagHeader = ({ category,setCategory, location, title, search, image, backbtn, show, setShow, cross}) => {
    const navigation = useNavigation();
  return (
   <View style={styles.HeaderContainer}>
     <View style={styles.deliverLocation}>

        {
            location && <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <MaterialIcons name='location-on' style={{ fontSize: 32, color: Colors.White }} />
                <View >
                    <Text style={styles.deliverTo}>Deliver To <AntDesign name='caretdown' style={{fontSize: 15 , color: 'white'}} /></Text>
                    <Text style={styles.location}>BTM  Layout, Bengaluru, Karnataka</Text>
                </View>
            </View>
        }

        {
            category &&  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Pressable onPress={() => navigation.goBack()}>
                <Octicons name='chevron-left' style={{fontSize: 25 , color: Colors.White}} />
            </Pressable>
            <View>
                <Pressable onPress={() => setShow(!show)}>
                    <Text style={{ fontSize: 18, marginLeft: 15, fontWeight: '500', color: Colors.White}}>{category} <AntDesign name='caretdown' style={{fontSize: 18 , color: 'white'}} /></Text>
                </Pressable>
                {show &&  <View style={CategoryStyle.DropDownBox}>
                    <TouchableHighlight
                      activeOpacity={0.1}
                      underlayColor= {Colors.LightGreen}
                      style={{paddingHorizontal: 5, borderRadius: 5,}}
                    onPress={() => setCategory('Pooja Needs')}>
                        <Text style={CategoryStyle.DropDownText}>Pooja Needs</Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                      activeOpacity={0.1}
                      underlayColor= {Colors.LightGreen}
                        onPress={() => {
                            setCategory('Fruit & Vegetable')
                            setShow(false)
                        }}>
                        <Text style={CategoryStyle.DropDownText}>Dairy & Breakfas</Text>
                    </TouchableHighlight>
                    <Pressable onPress={() => setCategory('New CateGory')}>
                        <Text style={CategoryStyle.DropDownText}>Snacks & Confectionary</Text></Pressable>
                    <Pressable onPress={() => setCategory('New CateGory')}>
                        <Text style={CategoryStyle.DropDownText}>Meat, Fish & Egg</Text></Pressable>
                    <Pressable onPress={() => setCategory('New CateGory')}>
                        <Text style={CategoryStyle.DropDownText}>Food & Oil</Text></Pressable>
                </View>}
            </View>
            
        </View>
        }
            
        {
            title &&  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Pressable onPress={() => navigation.goBack()}>
                <Octicons name='chevron-left' style={{fontSize: 25 , color: Colors.White}} />
            </Pressable>
            <Text style={{ fontSize: 18, marginLeft: 15, fontWeight: '500', color: Colors.White}}>{title}</Text>
            </View>
        }

        {
            backbtn &&   <Pressable onPress={() => navigation.goBack()}>
            <Octicons name='chevron-left' style={{fontSize: 25 , color: Colors.White}} />
        </Pressable>
        }
        {
            cross &&  <Pressable >
            <AntDesign name='close' style={{fontSize: 30 , color: 'white'}} />
            </Pressable>
        }
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {
                search &&   <Pressable onPress={() => navigation.navigate('SearchProduct')}>
                    <FontAwesome name='search' style={{ fontSize: 19, color: Colors.White, marginRight: 18}} />
                </Pressable> 
            }
           {
            image &&  <Pressable onPress={() => navigation.navigate('Menu')}>
                <Image style={{height: 35, width: 35}} source={require('../../../assets/Profileimg.png')} />
            </Pressable>
           }
        </View>
     </View>
   </View>


  )
}

export default KiloBagHeader;

const styles = StyleSheet.create({
    deliverLocation: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    deliverTo: {
        fontSize: 13,
        fontWeight: 'bold',
        color: Colors.White
    },
    location: {
        fontSize: 10,
        // fontWeight: 'bold',
        color: Colors.White
    },
    HeaderContainer:{backgroundColor: Colors.LightGreen, height: 90, justifyContent: 'center', paddingRight: 15, paddingLeft: 10}
})