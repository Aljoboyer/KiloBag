import { View, Text, SafeAreaView, StyleSheet, ScrollView, Pressable, FlatList, } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Category = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Pressable onPress={() => navigation.goBack()}>
                            <Octicons name='chevron-left' style={{ color: 'black', fontSize: 30 }} />
                        </Pressable>
                        <Text style={{ fontSize: 16, marginLeft: 10, fontWeight: '500', color: 'black' }}>Fruit</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <FontAwesome name='search' style={{ fontSize: 24, color: '#8B8B8B' }} />
                        <MaterialIcons name='account-circle' style={{ fontSize: 48, color: 'black', marginLeft: 20 }} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 24, }}>
                    <Octicons name='chevron-left' style={{ color: 'black', fontSize: 16, }} />
                    <ScrollView horizontal={true}>
                        <View style={{ height: 80, width: 80, borderRadius: 40, backgroundColor: "#F4F3F3", alignItems: 'center', justifyContent: 'center', marginLeft: 10 }}><Text>Image</Text></View>
                        <View style={{ height: 80, width: 80, borderRadius: 40, backgroundColor: "#F4F3F3", alignItems: 'center', justifyContent: 'center', marginLeft: 10 }}><Text>Image</Text></View>
                        <View style={{ height: 80, width: 80, borderRadius: 40, backgroundColor: "#F4F3F3", alignItems: 'center', justifyContent: 'center', marginLeft: 10 }}><Text>Image</Text></View>
                        <View style={{ height: 80, width: 80, borderRadius: 40, backgroundColor: "#F4F3F3", alignItems: 'center', justifyContent: 'center', marginLeft: 10 }}><Text>Image</Text></View>

                    </ScrollView>
                    <Octicons name='chevron-right' style={{ color: 'black', fontSize: 16, }} />

                </View>
                <FlatList
                    keyExtractor={item => item}
                    data={[1, 2, 3, 4, 5, 6, 7]}
                    renderItem={
                        ({ item, index, separators }) => {
                            return <View key={item} style={{ backgroundColor: '#F7F7F7', padding: 12, borderRadius: 12, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 }}>
                                <Pressable onPress={() => navigation.navigate('ProductDetails')}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ height: 90, width: 90, backgroundColor: '#DCDBDB', borderRadius: 12, marginRight: 12 }}></View>
                                        <View style={{ justifyContent: 'space-between', paddingVertical: 5, }}>
                                            <Text>Watermelon</Text>
                                            <Text>$21</Text>
                                            <View style={{ backgroundColor: '#C4C4C4', padding: 4, borderRadius: 8, alignItems: 'center' }}>
                                                <Text>1kg {" "} <Octicons name='chevron-down' style={{ color: 'black', fontSize: 12, }} /></Text>
                                            </View>
                                        </View>
                                    </View>
                                </Pressable>

                                <View style={{ justifyContent: 'space-between', padding: 2 }}>
                                    <MaterialCommunityIcons name='flash' style={{ fontSize: 20, alignSelf: 'flex-end', color: 'black', }} />
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
                            </View>
                        }
                    }
                />
            </ScrollView>

            <View>
                <View style={styles.stickyNavigation}>
                    <View style={{ alignItems: 'center' }}>
                        <MaterialCommunityIcons name='flash' style={styles.stickyIcon} />
                        <Text style={styles.stickyText}>Instant</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Ionicons name='timer' style={styles.stickyIcon} />
                        <Text style={styles.stickyText}>Daily</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Ionicons name='calendar' style={styles.stickyIcon} />
                        <Text style={styles.stickyText}>Monthly</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <MaterialCommunityIcons name='cart' style={styles.stickyIcon} />
                        <Text style={styles.stickyText}>Cart</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    deliverTo: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
    location: {
        fontSize: 16,
        color: 'black'
    },
    stickyNavigation: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#C4C4C4',
        borderRadius: 16,
        padding: 8,
        margin: 12
    },
    stickyText: {
        fontSize: 16,
        fontWeight: '600',
        color: 'black'
    },
    stickyIcon: {
        fontSize: 36,
        color: 'black',
    },
})

export default Category