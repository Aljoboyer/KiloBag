import { View, Text, SafeAreaView, StyleSheet, ScrollView, } from 'react-native'
import React from 'react'
import KiloBagHeader from '../../components/KiloBagHeader'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import Entypo from 'react-native-vector-icons/Entypo'
import { Avatar, Icon, ListItem } from "@rneui/themed";
import KiloBagNavBar from '../../components/KiloBagNavBar'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Cart = () => {
    const [expandedInstant, setExpandedInstant] = React.useState(null);
    const [expandedDaily, setExpandedDaily] = React.useState(null);
    const [expandedMonthly, setExpandedMonthly] = React.useState(null);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <ScrollView style={styles.container}>
                <KiloBagHeader
                    title='Cart'
                    backBtn={true}
                />
                <View style={{ marginBottom: 30 }}>
                    <View style={{ borderWidth: 2, borderColor: 'lightgrey', paddingHorizontal: 16, borderRadius: 12, marginTop: 20, }}>
                        <ListItem.Accordion
                            content={
                                <>
                                    <ListItem.Content >
                                        <ListItem.Title>Instant Cart <Icon name={'flash'} size={16} type="material-community" /> (3 items)</ListItem.Title>

                                    </ListItem.Content>
                                </>
                            }
                            isExpanded={expandedInstant}
                            onPress={() => {
                                setExpandedInstant(!expandedInstant);
                            }}
                            // expandIcon={<Icon name={'chevron-right'} size={16} type="material-community" />}
                            icon={<Icon name={'chevron-right'} size={24} type="material-community" />}
                            noRotation
                        >
                            <View style={{ borderBottomColor: 'lightgrey', borderBottomWidth: 2, borderTopColor: 'lightgrey', borderTopWidth: 2 }}>
                                {[1, 2, 3,].map((l, i) => (
                                    <ListItem key={i}
                                        containerStyle={{ paddingHorizontal: 4, flexDirection: 'row', justifyContent: 'space-around', }}
                                    >
                                        <View style={{ flexDirection: 'row' }}>
                                            <View style={{ height: 90, width: 90, backgroundColor: '#DCDBDB', borderRadius: 12, marginRight: 12 }}></View>
                                            <View style={{ justifyContent: 'space-between', paddingVertical: 5, }}>
                                                <Text>Watermelon</Text>
                                                <Text>$21</Text>
                                                <Text>You Saved $1</Text>
                                            </View>
                                        </View>
                                        <View style={{ justifyContent: 'space-between', padding: 2, alignSelf: 'flex-end' }}>
                                            <View></View>
                                            <View style={{ flexDirection: 'row' }}>
                                                <View style={{ backgroundColor: '#E6E5E5', padding: 2, borderRadius: 2 }}>
                                                    <Entypo name='minus' style={{ color: 'black', fontSize: 16, fontWeight: '600' }} />
                                                </View>
                                                <Text style={{ marginHorizontal: 12, color: 'black' }}>2</Text>
                                                <View style={{ backgroundColor: '#E6E5E5', padding: 2, borderRadius: 2 }}>
                                                    <Entypo name='plus' style={{ color: 'black', fontSize: 16, fontWeight: '600', }} />
                                                </View>
                                            </View>
                                        </View>
                                    </ListItem>
                                ))}
                            </View>
                            <Text style={{ fontSize: 16, fontWeight: '500', marginVertical: 12 }}><MaterialCommunityIcons style={{ fontSize: 16 }} name='label-percent' /> Apply Discount Code</Text>

                        </ListItem.Accordion>
                    </View>
                    <View style={{ borderWidth: 2, borderColor: 'lightgrey', paddingHorizontal: 16, borderRadius: 12, marginTop: 30, }}>
                        <ListItem.Accordion
                            content={
                                <>
                                    <ListItem.Content >
                                        <ListItem.Title>Daily Cart <Ionicons name='timer' style={styles.cartIcon} />  (3 items)</ListItem.Title>
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
                            icon={<Icon name={'chevron-right'} size={24} type="material-community" />}
                            noRotation
                        >
                            {[1, 2, 3,].map((l, i) => (
                                <ListItem key={i}
                                    containerStyle={{ paddingHorizontal: 4, flexDirection: 'row', justifyContent: 'space-around' }}
                                >
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ height: 90, width: 90, backgroundColor: '#DCDBDB', borderRadius: 12, marginRight: 12 }}></View>
                                        <View style={{ justifyContent: 'space-between', paddingVertical: 5, }}>
                                            <Text>Watermelon</Text>
                                            <Text>$21</Text>
                                            <Text>You Saved $1</Text>
                                        </View>
                                    </View>
                                    <View style={{ justifyContent: 'space-between', padding: 2, alignSelf: 'flex-end' }}>
                                        <View></View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <View style={{ backgroundColor: '#E6E5E5', padding: 2, borderRadius: 2 }}>
                                                <Entypo name='minus' style={{ color: 'black', fontSize: 16, fontWeight: '600' }} />
                                            </View>
                                            <Text style={{ marginHorizontal: 12, color: 'black' }}>2</Text>
                                            <View style={{ backgroundColor: '#E6E5E5', padding: 2, borderRadius: 2 }}>
                                                <Entypo name='plus' style={{ color: 'black', fontSize: 16, fontWeight: '600', }} />
                                            </View>
                                        </View>
                                    </View>
                                </ListItem>
                            ))}
                        </ListItem.Accordion>
                    </View>
                    <View style={{ borderWidth: 2, borderColor: 'lightgrey', paddingHorizontal: 16, borderRadius: 12, marginTop: 30, }}>
                        <ListItem.Accordion
                            content={
                                <>
                                    <ListItem.Content >
                                        <ListItem.Title>Monthly Cart <Ionicons name='calendar' style={styles.cartIcon} /> (3 items)</ListItem.Title>

                                    </ListItem.Content>
                                </>
                            }
                            isExpanded={expandedMonthly}
                            onPress={() => {
                                setExpandedMonthly(!expandedMonthly);

                            }}
                            // expandIcon={<Icon name={'chevron-right'} size={16} type="material-community" />}
                            icon={<Icon name={'chevron-right'} size={24} type="material-community" />}
                            noRotation
                        >
                            {[1, 2, 3,].map((l, i) => (
                                <ListItem key={i}
                                    containerStyle={{ paddingHorizontal: 4, flexDirection: 'row', justifyContent: 'space-around' }}
                                >
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ height: 90, width: 90, backgroundColor: '#DCDBDB', borderRadius: 12, marginRight: 12 }}></View>
                                        <View style={{ justifyContent: 'space-between', paddingVertical: 5, }}>
                                            <Text>Watermelon</Text>
                                            <Text>$21</Text>
                                            <Text>You Saved $1</Text>
                                        </View>
                                    </View>
                                    <View style={{ justifyContent: 'space-between', padding: 2, alignSelf: 'flex-end' }}>
                                        <View></View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <View style={{ backgroundColor: '#E6E5E5', padding: 2, borderRadius: 2 }}>
                                                <Entypo name='minus' style={{ color: 'black', fontSize: 16, fontWeight: '600' }} />
                                            </View>
                                            <Text style={{ marginHorizontal: 12, color: 'black' }}>2</Text>
                                            <View style={{ backgroundColor: '#E6E5E5', padding: 2, borderRadius: 2 }}>
                                                <Entypo name='plus' style={{ color: 'black', fontSize: 16, fontWeight: '600', }} />
                                            </View>
                                        </View>
                                    </View>
                                </ListItem>
                            ))}
                        </ListItem.Accordion>
                    </View>
                </View>


            </ScrollView>
            <KiloBagNavBar />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 25,
    },
    cartIcon: {
        fontSize: 16,
        color: 'black',
    },
});

export default Cart