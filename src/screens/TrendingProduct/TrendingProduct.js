import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryProductItem from '../../components/CategoryProductItem/CategoryProductItem';
import KiloBagHeader from '../../components/KiloBagHeader/KiloBagHeader';
import { CategoryStyle } from '../../Styles/CategoryStyle/CategoryStyle';
import { useIsFocused } from '@react-navigation/native'
import LottieView from 'lottie-react-native';

export default function TrendingProduct() {
  const [skeletonShow, setSkeletonShow] = useState(false);
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
    <SafeAreaView style={{ flex: 1, }}>
    <KiloBagHeader  title='Trending Near You' search={true} image={true}/>
     <ScrollView style={CategoryStyle.container}>
        {
            skeletonShow ? <LottieView style={{height: '100%'}}
            source={require('../../../assets/JsonFiles/Skeleton.json')} autoPlay loop
        /> : <CategoryProductItem subscription={true}/> 
          }
     </ScrollView>
 </SafeAreaView>
  )
}