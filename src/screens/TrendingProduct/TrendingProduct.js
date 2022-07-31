import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import CategoryProductItem from '../../components/CategoryProductItem/CategoryProductItem';
import KiloBagHeader from '../../components/KiloBagHeader/KiloBagHeader';
import { CategoryStyle } from '../../Styles/CategoryStyle/CategoryStyle';

export default function TrendingProduct() {
  return (
    <SafeAreaView style={{ flex: 1, }}>
    <KiloBagHeader  title='Trending Near You' search={true} image={true}/>
     <ScrollView style={CategoryStyle.container}>

        <CategoryProductItem/>

     </ScrollView>
 </SafeAreaView>
  )
}