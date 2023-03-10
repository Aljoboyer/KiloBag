import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, Pressable, FlatList, ActivityIndicator, ScrollView, Animated } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import KiloBagHeader from '../../components/KiloBagHeader/KiloBagHeader'
import { Colors } from './../../Theme/Colors';
import { ModalStyle } from '../../Styles/ModalStyle/ModalStyle';
import { Avatar, Icon, ListItem } from "@rneui/themed";
import AntDesign from 'react-native-vector-icons/AntDesign'
import ErrorText from '../../components/ErrorText/ErrorText';
import * as Animatable from 'react-native-animatable';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';

export default function Wallet() {
  const [expanded, setExpanded] = useState(null);
  const [loader, setLoader] = useState(false);
  const [errors, setErrors] = useState(null);
  const [focused, setFocused] = useState(1)
  const isVisible = useIsFocused();

  const data = [{title: 'Amount Credited', cf: 'UPI'},
  {title: 'Amount Credited', cf: 'Netbanking'},
  {title: 'Amount Debited', cf: 'Subscrption Order'},
  {title: 'Amount Debited', cf: 'Buy Once Order'},
  {title: 'Amount Credited', cf: 'Refund'},
  {title: 'Cash Failure', cf: 'Buy Once Order'}
]

  const OnChangeHandler = (text) => {
      if(isNaN(text)){
        setErrors('Please enter number')
      }
      else{   
        setErrors(null)
      }
  }

  const TransitationItem = ({item}) => (
    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            { item.title == "Amount Credited" && <Image source={require('../../../assets/amountCredit.png')} />}
            { item.title == "Amount Debited" && <Image source={require('../../../assets/amountDebit.png')} />}
            { item.title == "Cash Failure" && <Image source={require('../../../assets/cashFail.png')} />}
            <View style={{paddingLeft: 10}}>
              <Text style={{fontSize: 13, fontWeight: '500', color: '#2E2E2E'}}>{item.title}</Text>
              <Text style={{fontSize: 12, fontWeight: '500', color: Colors.LightGreen,  marginTop: 5}}> <Image source={require('../../../assets/rupiIcon.png')} /> 1000</Text>
            </View>
        </View>
        <View>
            <Text style={{fontSize: 13, fontWeight: '500', color: '#949494', alignSelf: 'flex-end'}}>Credited from</Text>
            <Text style={{fontSize: 12, fontWeight: '500', color: Colors.LightGreen, alignSelf: 'flex-end', marginTop: 5}}>{item.cf}</Text>
        </View>
    </View>
  )

  useEffect(() => {;
  if (isVisible) {
    setFocused(2)
    console.log('fuccesd')
  }
  },[isVisible])

  return (
    <SafeAreaView style={{flex: 1}}>
      <KiloBagHeader  title='Wallet' search={true} image={true}/>
        <ScrollView   style={{padding: 20, flex: 1}}>
          <Animatable.View  animation="fadeIn" duration={1000} easing="ease-in-out">
              <View style={WalletStyle.WalletView}>
                  <View>
                      <Text style={WalletStyle.WalletText}>Wallet Balance</Text>
                      <Text style={{fontWeight: '600', fontSize: 16, color: Colors.LightGreen, marginTop: 5}}> <Image source={require('../../../assets/rupiIcon.png')} /> 500.00</Text>
                  </View>
                  <Image source={require('../../../assets/mainWallet.png')} />
              </View>

              <View style={WalletStyle.TopUpView}>
                  <Text style={[WalletStyle.WalletText, {marginLeft: 5}]}>Topup Wallet</Text>
                  <TextInput placeholder='Enter amount' keyboardType='number-pad' onChangeText={(text) => OnChangeHandler(text)}  style={WalletStyle.Inputs} />

                  {errors && <ErrorText errors={errors} />}

                  <View style={WalletStyle.RecomandView}>
                      <View style={WalletStyle.MoneyView}><Text>100</Text></View>
                      <View style={WalletStyle.MoneyView}><Text>500</Text></View>
                      <View style={WalletStyle.MoneyView}><Text>1000</Text></View>
                      <View style={WalletStyle.MoneyView}><Text>2000</Text></View>
                  </View>
                  <Pressable onPress={() => setLoader(!loader)} style={[ModalStyle.ButtonsCommonStyle, WalletStyle.Buttons]}>
                  {
                      loader ? <ActivityIndicator color='white' size="small" /> : <Text style={{fontWeight: '500', fontSize: 14, color: 'white'}}>Add Money</Text>
                  }
                  </Pressable> 
              </View>

              <View style={{flex: 1, paddingBottom: 20, marginTop: 10, }}>
                <ListItem.Accordion
                style={{borderColor: Colors.SectionBorderColor, borderWidth: 1, borderRadius: 5}}
                      content={
                      <>
                        <ListItem.Content >
                            <ListItem.Title style={{color: '#2E2E2E', fontSize: 14, fontWeight: '500' }}>Transaction History</ListItem.Title>
                        </ListItem.Content>
                      </>
                  }
                  isExpanded={expanded}
                  onPress={() => {
                      setExpanded(!expanded);
                  }}
                  icon={ <AntDesign name={ expanded ? 'up' : 'down'} style={{fontSize: 20 , color: Colors.LightGreen}} />}
                  noRotation
                  >
                      <ListItem>
                        <FlatList
                        data={data}
                        renderItem={TransitationItem}
                        keyExtractor={item => item.index}
                        horizontal={false}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        />
                      </ListItem>
                  </ListItem.Accordion>
              </View>
            </Animatable.View>
          </ScrollView>
    </SafeAreaView>
  )
}

const WalletStyle = StyleSheet.create({
  WalletView:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.SectionBorderColor,
    padding: 20,
    borderRadius: 10
  },
  WalletText: {fontWeight: '500', fontSize: 14, color: '#2E2E2E'},
  TopUpView:{marginTop: 15,     borderWidth: 1,
    borderColor: Colors.SectionBorderColor, paddingHorizontal: 10,  borderRadius: 10, paddingVertical: 20},
  Inputs:{
    height: 36,
    borderRadius: 5,
    borderColor: Colors.LightGreen,
    borderWidth: 1,
    marginVertical: 10,
    marginLeft: 5,
    paddingLeft: 15
  },
  MoneyView:{
    width: 65,
    height: 27,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.LightGreen,
    borderWidth: 1,
    borderRadius: 5,
  },
  RecomandView:{
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 10
  },
  Buttons: {height: 40, width: 140, alignSelf: 'center', marginTop: 20}
})