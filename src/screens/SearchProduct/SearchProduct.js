import { View, Text, SafeAreaView, TextInput, StyleSheet, Image, ScrollView, FlatList, Dimensions } from 'react-native'
import React , {useState} from 'react'
import { Colors } from './../../Theme/Colors';
import Octicons from 'react-native-vector-icons/Octicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import { Pressable } from 'react-native';
import CategoryProductItem from './../../components/CategoryProductItem/CategoryProductItem';

import CustomButton from './../../components/CustomButton';
import BottomModal from '../../components/BottomModal/BottomModal';
const {width, height } = Dimensions.get("window");

export default function SearchProduct() {
    const TopSearchItem = ["Milk", "Cookies", "Apple", "Watermelon", "Mustard Oil", "Flour"];
    const topsearch = false;
    const searchResult = false;
    const result =  true;
    
    const SearchData = [
        {product:  "Milk Powder", subsciption:"in Instant"},
        {product:  "Milk Bottle (1L)", subsciption:"in Instant"},
        {product:  "Milk Chocolate", subsciption:"in Instant"},
        {product:  "Milk Mug", subsciption:"in Instant"},
        {product:  " Milkmaid", subsciption:"in Instant"},
        {product:  "Milk Powder", subsciption:"in Instant"},
        {product:   "Milkshake", subsciption:"in Instant"},
        {product:  "Milk Powder", subsciption:"in Instant"},
        {product:  "Milk Powder", subsciption:"in Instant"},
        {product:   "Milkshake", subsciption:"in Instant"},
        {product:  "Milk Powder", subsciption:"in Instant"},
        
        ]
    const SearchItem = ({item}) => (
        <View style={SearchStyles.SearchItemView}>
            <View>
                <Text style={{fontSize: 14, fontWeight: '400', color: 'black'}}>{item.product}</Text>
                <Text style={{fontSize: 10, fontWeight: '500', color: Colors.LightGreen}}>{item.subsciption}</Text>
            </View>
            <Feather name='arrow-up-left' style={{ fontSize: 18, color: 'black'}} />
        </View>
    )

    const [bottomModalVisible, setBottomModalVisible] = useState(false);

  return (
    <SafeAreaView style={{flex: 1}}>
        <View style={SearchStyles.SearchHeader}>
                    
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Pressable onPress={() => navigation.goBack()}>
                    <Octicons name='chevron-left' style={{fontSize: 30 , color: Colors.White}} />
                </Pressable>
                <View style={SearchStyles.InputView}>
                    <TextInput placeholder='What are you looking for?' style={SearchStyles.Inputs} />
                    <FontAwesome name='search' style={{ fontSize: 18, color: Colors.LightGreen, marginRight: 25}} />
                </View>
            </View>

            <Image style={{height: 50, width: 50}} source={require('../../../assets/Profileimg.png')} />
        </View>

        <ScrollView style={{paddingVertical: 25, paddingHorizontal: 15}}>

            {
                topsearch && <View>
                <Text style={{fontSize: 15, color: 'black'}}>Top Searches this Week</Text>
                <View style={SearchStyles.TopSearchView}>
                    {
                        TopSearchItem.map((item) => {
                        return (
                            <View style={SearchStyles.TopSearchItem}>
                                <Text style={{fontSize: 13, color: 'black', fontWeight: '400'}}>{item}</Text>
                            </View>
                        )
                        })
                    }
                </View>
                </View>
            }

           {
                searchResult && <View>
                <Text style={{fontSize: 13, color: 'black'}}>Showing results for <Text style={{fontWeight: '500'}}>“Milk”</Text></Text>
                <CategoryProductItem bottomModalVisible={bottomModalVisible} setBottomModalVisible={setBottomModalVisible} />
                </View>
           }

        </ScrollView>
        
        {
            result && <ScrollView style={{paddingHorizontal: 10}}>
            <FlatList
                data={SearchData}
                renderItem={SearchItem} 
                keyExtractor={item => item.index}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                />
            </ScrollView>
        }
        <BottomModal bottomModalVisible={bottomModalVisible} setBottomModalVisible={setBottomModalVisible} />
    </SafeAreaView>
  )
}


const SearchStyles = StyleSheet.create({
    SearchHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.LightGreen, paddingTop: 40, paddingLeft: 7, paddingRight: 10, paddingBottom: 20
    },
    InputView:{
        width: 260,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15
    },
    Inputs:{
        width: 240,
        height: 40,
        paddingLeft: 20
    },
    TopSearchItem:{
        borderWidth: 1,
        borderRadius: 5,
        borderColor: Colors.LightGreen,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 15,
        marginTop: 15
    },
    TopSearchView:{flexDirection: 'row', flexWrap: 'wrap'},
    SearchItemView: {flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: '#E4E4E4', borderBottomWidth: 1, paddingVertical: 20, paddingHorizontal: 20},


      modalBox: {
        overflow: "scroll",
        alignItems: "center",
        justifyContent: "center",
        height,
        width,
        backgroundColor: "transparent"
      },
      content: {
        position: "absolute",
        bottom: 0,
        width,
        height: 400,
        borderTopLeftRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        borderTopRightRadius: 20,
        backgroundColor: "white"
      },
      textStyle: {
        fontSize: 22
      }
    
})