import { View, Text, SafeAreaView, ScrollView, Pressable, FlatList,Dimensions , Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useRef } from 'react';
import { CategoryStyle } from '../../Styles/CategoryStyle/CategoryStyle';
import { Colors } from '../../Theme/Colors';
import { categories } from '../../components/CategoryItem/CategoryData';
import CategoryProductItem from '../../components/CategoryProductItem/CategoryProductItem'
import KiloBagHeader from './../../components/KiloBagHeader/KiloBagHeader';
import BottomModal from './../../components/BottomModal/BottomModal';
import { useIsFocused } from '@react-navigation/native'
import LottieView from 'lottie-react-native';

const CategoryProduct = ({ navigation }) => {
    const [show, setShow] = useState(false)
    const [category, setCategory] = useState('Fruit & Vegetable');
    let listViewRef;
    const [scrollIndex, setScrollIndex] = useState(0);
    const [bottomModalVisible, setBottomModalVisible] = useState(false);
    const [skeletonShow, setSkeletonShow] = useState(false);
    const isVisible = useIsFocused();

    const CateGoryItem = ({item}) => (
        <View style={CategoryStyle.CategoryItemContainer}>
            <View  style={CategoryStyle.CategoryView}> 
                <View style={CategoryStyle.imageView}>
                    <Image style={{height: '100%', width: '100%'}} source={require('../../../assets/vegetable.png')} />
                </View>
            </View>
            <Text style={{alignSelf: 'center', color: 'black', fontSize: 12, fontWeight: '500'}}>{item}</Text>
        </View>
        )
    
    const PreviousButton = () => {
        //OnCLick of Up button we scrolled the list to top
        listViewRef.scrollToIndex({ index: scrollIndex, animated: true })
        };
    
    const NextButton = () => {
    //OnCLick of down button we scrolled the list to bottom
    // listViewRef.scrollToEnd({  animated: true });
    listViewRef.scrollToIndex({ index: scrollIndex, animated: true })
    };

    useEffect(() => {;
        if (isVisible) {
            setSkeletonShow(true)
        setTimeout(() => {
            setSkeletonShow(false)
        }, 2000);
        }
        },[isVisible])

    return (
        <SafeAreaView style={{ flex: 1, }}>
           <KiloBagHeader  setCategory={setCategory} category={category} search={true} image={true} show={show} setShow={setShow}/>
            <ScrollView style={CategoryStyle.container}>
                {
                    skeletonShow ? <LottieView style={{height: '100%'}}
                    source={require('../../../assets/JsonFiles/Skeleton.json')} autoPlay loop
                /> : <>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 24, }}>
                    <Pressable onPress={() => {
                       if(scrollIndex > 0){
                           setScrollIndex(scrollIndex - 1)
                       }
                       PreviousButton()}}   style={{paddingRight: 15}}>
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
                       ref={(ref) => {
                           listViewRef = ref;
                         }}
                       />
                   <Pressable onPress={() => { setScrollIndex(scrollIndex + 1), NextButton()}}  style={{paddingLeft: 15}}>
                        <Text>
                           <Octicons name='chevron-right' style={{ color: Colors.LightGray, fontSize: 30}} />
                        </Text>
                   </Pressable>
                    </View>

              <CategoryProductItem setBottomModalVisible={setBottomModalVisible}/>
            </>
                }
            </ScrollView>
            <BottomModal bottomModalVisible={bottomModalVisible}setBottomModalVisible={setBottomModalVisible} />
        </SafeAreaView>
    )
}


export default CategoryProduct