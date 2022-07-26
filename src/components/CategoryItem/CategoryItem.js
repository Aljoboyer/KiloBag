import { View, Text, Pressable, Image, StyleSheet , FlatList} from 'react-native'
import React from 'react'
import { Colors } from './../../Theme/Colors';

const CategoryItem = ({categories}) => {
    const CategoryItem =  ({item}) => (
      
            <Pressable style={{ marginVertical: 16,  marginHorizontal: 10}}  onPress={() => navigation.navigate('Category')}>
                <View style={CategoryStyle.categories}>
                    <Image style={{width: 70, height: 53}} source={require('../../../assets/vegetable.png')}/>
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