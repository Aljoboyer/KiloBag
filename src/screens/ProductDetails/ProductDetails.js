import { View, Text, SafeAreaView, ScrollView, StyleSheet, Pressable, Image, ImageBackground } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Carousel from "pinar";
import Entypo from 'react-native-vector-icons/Entypo'
import Octicons from 'react-native-vector-icons/Octicons'
import { CategoryStyle } from '../../Styles/CategoryStyle/CategoryStyle';
import { Colors } from '../../Theme/Colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { ProductDetailStyle } from './../../Styles/ProductDetailsStyle/ProductDetailStyle';
import KiloBagHeader from './../../components/KiloBagHeader/KiloBagHeader';

const ProductDetails = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <KiloBagHeader backbtn={true} search={true} image={true}/>
            <ScrollView style={ProductDetailStyle.container}>
              
                <View style={{height: 80, width: 80, alignSelf: 'flex-end'}}>
                    <Image style={{width: '100%', height: '100%'}}  source={require('../../../assets/discount.png')} />
                    <Text style={[ProductDetailStyle.DiscountText, { top: 20 }]}>19%</Text>
                    <Text style={[ProductDetailStyle.DiscountText, { top: 40 }]}>OFF</Text>
                </View>
               
                <View style={ProductDetailStyle.CarouselView}>
                    <Carousel showsControls={false} loop={true}>
                        <Image style={{width: '100%',}} source={require('../../../assets/apple.png')}/>
                        <Image style={{width: '100%',}} source={require('../../../assets/apple.png')}/>
                        <Image style={{width: '100%',}} source={require('../../../assets/apple.png')}/>

                    </Carousel>
                </View>

                <View style={ProductDetailStyle.AmountView}>
                    <View style={{ flexDirection: 'row', }}>

                        <View style={{ justifyContent: 'space-between', paddingBottom: 5, }}>
                            <Text style={{fontSize: 17, fontWeight: '700', color: 'black'}}>Product Name</Text>
                            <Text style={{ marginVertical: 10, color: Colors.Black,fontWeight: '700',  }}>$209 {"   "}<Text style={{ textDecorationLine: 'line-through', marginLeft: 20, color: Colors.LightGray }}>$209</Text></Text>

                            <Text  style={{ marginVertical: 5, color: Colors.LightGreen,fontWeight: '700',  }}>1kg {" "} <Octicons name='chevron-down' style={{ color: Colors.LightGreen, fontSize: 12, }} /></Text>

                            <View style={ProductDetailStyle.SubscribeBtn}>
                                <Text style={{color: Colors.LightGreen, fontSize: 12}}>Subscribe @20</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'flex-end', padding: 2 }}>
                  
                        <View style={{ flexDirection: 'row' }}>
                            <View style={ProductDetailStyle.AmountBtn}>
                                <Entypo name='minus' style={{ color: 'white', fontSize: 16, fontWeight: '600' }} />
                            </View>
                            <Text style={{ marginHorizontal: 12, color: 'black' }}>2</Text>
                            <View style={ProductDetailStyle.AmountBtn}>
                                <Entypo name='plus' style={{ color: 'white', fontSize: 16, fontWeight: '600', }} />
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{marginTop: 15}}>
                    <Text style={{ fontSize: 17, fontWeight: '500' , color: 'black'}}>Description</Text>
                    <Text style={ProductDetailStyle.DescriptionText}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eligendi, repudiandae minima pariatur doloremque blanditiis officiis aliquam illum quae quibusdam aut quidem natus molestiae architecto sit, nesciunt explicabo, ipsa quo? Sunt veniam recusandae ut eligendi repellat tempore iusto sed, ea nemo aspernatur, ullam enim fugiat beatae voluptate sapiente accusamus accusantium. Nam repudiandae neque nulla, quos expedita architecto quasi fuga dignissimos velit veritatis laborum quas nobis atque consequatur quaerat pariatur voluptates. Maiores nisi reiciendis obcaecati sit alias laboriosam beatae officia, culpa saepe. Hic doloremque unde quidem beatae repellat est corrupti vel excepturi nihil, voluptatibus maiores porro repudiandae omnis cupiditate ad modi?
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}


export default ProductDetails