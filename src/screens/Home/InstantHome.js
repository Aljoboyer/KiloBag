import React from 'react'
import { View, Text, TextInput, ScrollView, SafeAreaView, Image, Pressable, FlatList, } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Octicons from 'react-native-vector-icons/Octicons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Carousel from "pinar";
import { Homestyles } from './../../Styles/Home/HomeStyle';
import BottomTab from './../../components/BottomTab';
import DisplayHeader from '../../components/DisplayHeader/DisplayHeader'
import { Colors } from './../../Theme/Colors';
import { colors } from './../../../../../../Projects/React-Native/planet-apps/src/theme/colors';
import CategoryItem from '../../components/CategoryItem/CategoryItem'
import { BigDeals, categories, FreshItems } from '../../components/CategoryItem/CategoryData'
import FressFindItem from '../../components/FreshFindItem/FreshFindItem'

const InstantHome = ({ navigation }) => {

   
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }} >
            <DisplayHeader backgroundColor={Colors.LightGreen}/>
            <ScrollView style={Homestyles.Homecontainer} >
                <Text style={Homestyles.SearchBoxTitle}>It’s all here under one roof!</Text>
                <View style={Homestyles.searchInput}>
                    <TextInput
                        autoCorrect={false}
                        style={Homestyles.search}
                        placeholder='What are you looking for?'
                    />
                    <FontAwesome name='search' style={{ fontSize: 24, color: Colors.LightGreen }} />
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
                    <CategoryItem categories={categories} />
                    <View style={Homestyles.viewAll}>
                        <Text style={Homestyles.ViewText}>View all</Text>
                        <Octicons name='chevron-right' style={{ fontSize: 20, marginLeft: 10 , color: Colors.Black, }} />
                    </View>
                </View>
                <View style={{ marginTop: 50 }} >
                    <Text style={Homestyles.sectionTitle}>Big Deals <Image source={require('../../../assets/BigDeal.png')}/></Text>
                    <CategoryItem categories={BigDeals} />
                    <View style={Homestyles.viewAll}>
                        <Text style={Homestyles.ViewText}>View all</Text>
                        <Octicons name='chevron-right' style={{ fontSize: 20, marginLeft: 10 }} />
                    </View>
                </View>  
                <View style={{ marginTop: 50 }} >
                    <Text style={Homestyles.sectionTitle}>The Value Mart  <Image source={require('../../../assets/valueMart.png')}/></Text>
                    <CategoryItem categories={BigDeals} />
                    <View style={Homestyles.viewAll}>
                        <Text style={Homestyles.ViewText}>View all</Text>
                        <Octicons name='chevron-right' style={{ fontSize: 20, marginLeft: 10 }} />
                    </View>
                </View>
                <View style={{ marginTop: 50 }} >
                    <Text style={Homestyles.sectionTitle}>Shop and Save <Image source={require('../../../assets/Shop&Save.png')}/></Text>
                    <CategoryItem categories={BigDeals} />
                    
                    <View style={Homestyles.viewAll}>
                        <Text style={Homestyles.ViewText}>View all</Text>
                        <Octicons name='chevron-right' style={{ fontSize: 20, marginLeft: 10 }} />
                    </View>
                </View>
                <View style={{ marginTop: 50 }} >
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
                    <View style={Homestyles.viewAll}>
                        <Text style={Homestyles.ViewText}>View all</Text>
                        <Octicons name='chevron-right' style={{ fontSize: 20, marginLeft: 10 }} />
                    </View>
                </View>
                <View style={{ marginTop: 50 , paddingBottom: 20}} >
                    <Text style={Homestyles.sectionTitle}>Fresh Finds</Text>
                    <FressFindItem items={FreshItems} />
                    <View style={Homestyles.viewAll}>
                        <Text style={Homestyles.ViewText}>View all</Text>
                        <Octicons name='chevron-right' style={{ fontSize: 20, marginLeft: 10 }} />
                    </View>
                </View>
            </ScrollView>
            <BottomTab />
        </SafeAreaView>
    )
}

export default InstantHome