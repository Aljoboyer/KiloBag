import { View, Text, SafeAreaView, ScrollView, Pressable, FlatList,Dimensions , Image} from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useRef } from 'react';
import { CategoryStyle } from '../../Styles/CategoryStyle/CategoryStyle';
import { Colors } from '../../Theme/Colors';
import { categories } from '../../components/CategoryItem/CategoryData';
import BottomTab from '../../components/BottomTab';
import CategoryProductItem from '../../components/CategoryProductItem/CategoryProductItem'


const InstantCategory = ({ navigation }) => {
    var screenWidth = Dimensions.get('window').width;
    const scrollRef = useRef();

        const onPressTouch = (item) => {
            scrollRef.scrollToItem({
            item: item,
            animated: true,
            viewPosition: 5
        });
        }
        // ref={scrollRef}
        const BackScroll = () => {
            scrollRef.current?.scrollTo({
            x:  10,
            animated: true,
            });
        }

        const CateGoryItem = ({item}) => (
            <View style={CategoryStyle.CategoryItemContainer}>
                <View  style={CategoryStyle.CategoryView}>
                    <View style={CategoryStyle.imageView}>
                        <Image style={{height: '100%', width: '100%'}} source={require('../../../assets/vegetable.png')} />
                    </View>
                </View>
                <Text style={{alignSelf: 'center', color: 'black', fontSize: 17, fontWeight: '500'}}>{item}</Text>
            </View>        )

    return (
        <SafeAreaView style={{ flex: 1, }}>
             <View style={[CategoryStyle.header, { backgroundColor: Colors.LightGreen}]}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Pressable onPress={() => navigation.goBack()}>
                        <Octicons name='chevron-left' style={{fontSize: 27 , color: Colors.White}} />
                    </Pressable>
                    <Text style={{ fontSize: 22, marginLeft: 30, fontWeight: '700', color: Colors.White}}>Fruit</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <FontAwesome name='search' style={{ fontSize: 24, color: Colors.White, marginRight: 25}} />
                   <Image style={{height: 50, width: 50}} source={require('../../../assets/Profileimg.png')} />
                </View>
             </View>
            <ScrollView style={CategoryStyle.container}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 24, }}>
                     <Pressable onPress={BackScroll} style={{paddingRight: 15}}>
                         <Text>
                            <Octicons name='chevron-left' style={{ color: Colors.LightGray, fontSize: 30,}} />
                         </Text>
                    </Pressable>
                    <FlatList
                        data={categories}
                        renderItem={CateGoryItem}
                        keyExtractor={item => item.index}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        />
                    <Pressable onPress={() => onPressTouch(5)} style={{paddingLeft: 15}}>
                         <Text>
                            <Octicons name='chevron-right' style={{ color: Colors.LightGray, fontSize: 30}} />
                         </Text>
                    </Pressable>
                </View>

               <CategoryProductItem subscription={'instant'}/>
            </ScrollView>
            <BottomTab/>
        </SafeAreaView>
    )
}


export default InstantCategory