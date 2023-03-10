import React, {useEffect, useState} from 'react'
import { View, Text, TextInput, ScrollView, SafeAreaView, Image, Pressable, FlatList, } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Octicons from 'react-native-vector-icons/Octicons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Carousel from "pinar";
import { Homestyles } from '../../Styles/Home/HomeStyle';
import { Colors } from '../../Theme/Colors';
import CategoryItem from '../../components/CategoryItem/CategoryItem'
import { BigDeals, categories, FreshItems } from '../../components/CategoryItem/CategoryData'
import FreshFindItem from '../../components/FreshFindItem/FreshFindItem'
import KiloBagHeader from './../../components/KiloBagHeader/KiloBagHeader';
import BottomModal from './../../components/BottomModal/BottomModal';
import { useIsFocused } from '@react-navigation/native'

const Home = ({ navigation }) => {
    const [allCategory, setAllCategory] = useState(categories.slice(0, 9));
    const [topCat, setTopCat] = useState(BigDeals.slice(0, 4))
    const [bottomModalVisible, setBottomModalVisible] = useState(false);
    const [skeletonShow, setSkeletonShow] = useState(false)
    const isVisible = useIsFocused();

    useEffect(() => {;
      if (isVisible) {
          setSkeletonShow(true)
      setTimeout(() => {
          setSkeletonShow(false)
      }, 2000);
      }
      },[isVisible])

    return (
        <SafeAreaView style={{ flex: 1, }} >
            <KiloBagHeader location={true} image={true}/>
            <ScrollView style={Homestyles.Homecontainer} >
                <View style={Homestyles.searchInput}>
                    <TextInput
                        autoCorrect={false}
                        style={Homestyles.search}
                        placeholder='What are you looking for?'
                    />
                    <FontAwesome name='search' style={{ fontSize: 20, color: Colors.LightGreen }} />
                </View>
                <View style={Homestyles.slideShow}>
                    <Carousel
                        autoplayInterval={3000}
                        loop={true}
                        autoplay
                        showsControls={false}
                    >
                        <View style={Homestyles.slide1}>
                             <Image style={{width: '100%'}} source={require('../../../assets/SliderImg.png')}/>
                        </View>
                        <View style={Homestyles.slide2}>
                            <Image style={{width: '100%'}} source={require('../../../assets/SliderImg.png')}/>
                        </View>
                        <View style={Homestyles.slide3}>
                             <Image style={{width: '100%'}} source={require('../../../assets/SliderImg.png')}/>
                        </View>
                    </Carousel>
                </View>
                <View>
                    <Text style={Homestyles.sectionTitle}>Shop by Category</Text>
                    <CategoryItem skeletonShow={skeletonShow} categories={allCategory} />
                    <Pressable onPress={() => setAllCategory(categories)} style={Homestyles.viewAll}>
                        <Text style={Homestyles.ViewText}>View all</Text>
                        <Octicons name='chevron-right' style={{ fontSize: 20, marginLeft: 10 , color: Colors.Black, }} />
                    </Pressable>
                </View>
                <View style={{ marginTop: 50 }}>
                    <Text style={Homestyles.sectionTitle}>Trending Near You <Image source={require('../../../assets/neartoyou.png')}/></Text>
                    <FreshFindItem setBottomModalVisible={setBottomModalVisible}  items={FreshItems} />
                    <Pressable onPress={() => navigation.navigate('TrendingProduct')} style={Homestyles.viewAll}>
                        <Text style={Homestyles.ViewText}>View all</Text>
                        <Octicons name='chevron-right' style={{ fontSize: 18, marginLeft: 7 , }} />
                    </Pressable>
                </View>
      
                <View style={{ marginTop: 30 }} >
                    <Text style={Homestyles.sectionTitle}>Top Categories <Image source={require('../../../assets/topcat.png')}/></Text>

                    <CategoryItem skeletonShow={skeletonShow} categories={topCat} />
                    
                    <Pressable onPress={() => setTopCat(BigDeals)} style={Homestyles.viewAll}>
                        <Text style={Homestyles.ViewText}>View all</Text>
                        <Octicons name='chevron-right' style={{ fontSize: 18, marginLeft: 7 , }} />
                    </Pressable>
                </View>
                <View style={{ marginTop: 30 }} >
                    <Text style={Homestyles.sectionTitle}>Today's Offers<Image source={require('../../../assets/parcentageIcon.png')}/></Text>
                    <View style={Homestyles.slideShow}>
                    <Carousel
                        autoplayInterval={3000}
                        loop={true}
                        autoplay
                        showsControls={false}
                    >
                        <View style={Homestyles.slide1}>
                             <Image style={{width: '100%', borderRadius: 45}} source={require('../../../assets/todayOffer.png')}/>
                        </View>
                        <View style={Homestyles.slide2}>
                            <Image style={{width: '100%', borderRadius: 45 }} source={require('../../../assets/todayOffer.png')}/>
                        </View>
                        <View style={Homestyles.slide3}>
                             <Image style={{width: '100%',borderRadius: 45 }} source={require('../../../assets/todayOffer.png')}/>
                        </View>
                    </Carousel>
                </View>
                   
                </View>
                <View style={{ marginTop: 0 , paddingBottom: 20}} >
                    <Text style={Homestyles.sectionTitle}>New Arrivals<Image source={require('../../../assets/neartoyou.png')}/></Text>
                    <FreshFindItem setBottomModalVisible={setBottomModalVisible}  items={FreshItems} />
                </View>
            </ScrollView>
            <BottomModal bottomModalVisible={bottomModalVisible} setBottomModalVisible={setBottomModalVisible} />
        </SafeAreaView>
    )
}

export default Home