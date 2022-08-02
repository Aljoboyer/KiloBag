import { View, Text, Pressable, Image, StyleSheet , FlatList} from 'react-native'
import React from 'react'
import { Colors } from './../../Theme/Colors';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

const CategoryItem = ({categories, skeletonShow}) => {
    const navigation = useNavigation();

    const CategoryItem =  ({item}) => (
      
            <Pressable onPress={() => navigation.navigate('CategoryProduct')} style={{ marginVertical: 16,  marginHorizontal: 10}} >
                <View style={CategoryStyle.categories}>
                {
                    skeletonShow ?  <LottieView style={{height: 55, width: 70}}
                    source={require('../../../assets/JsonFiles/skeleton-loader-rectangle.json')} autoPlay loop/> : <Image style={{width: 70, height: 53}} source={require('../../../assets/vegetable.png')}/>
                }
                </View>
                <Text style={CategoryStyle.categoryTitle}>{item}</Text>
            </Pressable>
    )
  return (
    
        <FlatList
        numColumns={4}
        data={categories}
        renderItem={CategoryItem}  
        keyExtractor={item => item.index}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        />
  )
}


export default CategoryItem;

const CategoryStyle = StyleSheet.create({

    categories: {
        backgroundColor: 'white',
        height: 72,
        width: 72,
        justifyContent: 'center',
        alignItems: 'center'
    },
    categoryTitle: {
        color: Colors.Black,
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 10
    },
    categoryContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',

        marginVertical: 12,
    },
})