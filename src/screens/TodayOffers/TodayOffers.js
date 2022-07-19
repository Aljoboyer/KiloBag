import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import CategoryProductItem from '../../components/CategoryProductItem/CategoryProductItem';
import KiloBagHeader from '../../components/KiloBagHeader/KiloBagHeader';
import { CategoryStyle } from '../../Styles/CategoryStyle/CategoryStyle';
import BottomTab from './../../components/BottomTab';

export default function TodayOffers() {
  return (
    <SafeAreaView style={{ flex: 1, }}>
    <KiloBagHeader  title='Today’s Offers' search={true} image={true}/>
     <ScrollView style={CategoryStyle.container}>

        <CategoryProductItem subscription={true}/>

     </ScrollView>
     <BottomTab/>
 </SafeAreaView>
  )
}