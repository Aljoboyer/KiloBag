import { View, Text, SafeAreaView, StyleSheet, ScrollView, } from 'react-native'
import React from 'react'
import KiloBagHeader from '../../components/KiloBagHeader'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import Entypo from 'react-native-vector-icons/Entypo'
import { Avatar, Icon, ListItem } from "@rneui/themed";
import Ionicons from 'react-native-vector-icons/Ionicons'
import BottomTab from './../../components/BottomTab';
import { Colors } from '../../Theme/Colors'
import CartItem from '../../components/CartItem/CartItem'
import { Cartstyles } from '../../Styles/CartStyles/CartStyles'

const Cart = () => {
    const [expandedInstant, setExpandedInstant] = React.useState(null);
    const [expandedDaily, setExpandedDaily] = React.useState(null);
    const [expandedMonthly, setExpandedMonthly] = React.useState(null);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <KiloBagHeader title='Cart' backBtn={true}/>
            <ScrollView style={Cartstyles.container}>
                <View style={{ marginBottom: 30 }}>
                    <View style={Cartstyles.InstantCartView}>
                        <ListItem.Accordion
                            content={
                                <>
                                    <ListItem.Content >
                                        <ListItem.Title style={[Cartstyles.CartListTitle, {color: Colors.LightGreen,}]}>Instant Cart <Icon name={'flash'} size={16} type="material-community" color={Colors.LightGreen} /> <Text style={{color: 'black', fontSize: 14}}>(3 items)</Text></ListItem.Title>

                                    </ListItem.Content>
                                </>
                            }
                            isExpanded={expandedInstant}
                            onPress={() => {
                                setExpandedInstant(!expandedInstant);
                            }}
                            // expandIcon={<Icon name={'chevron-right'} size={16} type="material-community" />}
                            icon={<Icon name={'chevron-right'} size={24} type="material-community" color={Colors.LightGreen} />}
                            noRotation
                        >
                        <CartItem bgColor={Colors.LightGreen}/>
                        
                        </ListItem.Accordion>
                    </View>


                    <View style={Cartstyles.DailyCartView}>
                        <ListItem.Accordion
                            content={
                                <>
                                    <ListItem.Content >
                                        <ListItem.Title  style={[Cartstyles.CartListTitle, {color: Colors.LightPink,}]}>Daily Cart <MaterialCommunityIcons name='clock-time-four' style={{ fontSize: 20, alignSelf: 'flex-end', color: Colors.LightPink, }} /> <Text style={{color: 'black', fontSize: 14}}>(3 items)</Text></ListItem.Title>
                                    </ListItem.Content>
                                </>
                            }
                            isExpanded={expandedDaily}
                            onPress={() => {
                                setExpandedDaily(!expandedDaily);
                                setExpandedMonthly(null);
                                setExpandedInstant(null);
                            }}
                            // expandIcon={<Icon name={'chevron-right'} size={16} type="material-community" />}
                            icon={<Icon name={'chevron-right'} size={24} type="material-community" color={Colors.LightPink}/>}
                            noRotation
                        >
                              <CartItem bgColor={Colors.LightPink}/>
                        </ListItem.Accordion>
                    </View>
                    <View style={Cartstyles.MonthlyCartView}>
                        <ListItem.Accordion
                            content={
                                <>
                                    <ListItem.Content >
                                        
                                    <ListItem.Title style={[Cartstyles.CartListTitle, {color: Colors.LightBlue}]}>Monthly Cart <MaterialCommunityIcons name='calendar-range' style={{ fontSize: 20, alignSelf: 'flex-end', color: Colors.LightBlue, }} /> <Text style={{color: 'black', fontSize: 14}}>(3 items)</Text></ListItem.Title>

                                    </ListItem.Content>
                                </>
                            }
                            isExpanded={expandedMonthly}
                            onPress={() => {
                                setExpandedMonthly(!expandedMonthly);

                            }}
                            // expandIcon={<Icon name={'chevron-right'} size={16} type="material-community" />}
                            icon={<Icon name={'chevron-right'} size={24} type="material-community" color={Colors.LightBlue} />}
                            noRotation
                        >
                             <CartItem bgColor={Colors.LightBlue}/>
                        </ListItem.Accordion>
                    </View>
                </View>
            </ScrollView>
            <BottomTab />
        </SafeAreaView>
    )
}


export default Cart