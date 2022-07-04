import React from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, SafeAreaView, Image, Pressable, } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Octicons from 'react-native-vector-icons/Octicons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Carousel from "pinar";
import KiloBagNavBar from '../../components/KiloBagNavBar'

const Home = ({ navigation }) => {
    const categories = ["Dairy and Egg", 'Bread & Bakery', 'Snacks', 'Frozen', 'Meat & Seafood', 'Beverages', 'Deli', 'Juice', 'Fresh Produce']

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }} >
            <ScrollView style={styles.container} >
                <View style={styles.deliverLocation}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Entypo name='location-pin' style={{ fontSize: 48, color: 'black' }} />
                        <View >
                            <Text style={styles.deliverTo}>Deliver To</Text>
                            <Text style={styles.location}>BTM  Layout, Bengaluru, Karnataka</Text>
                        </View>
                    </View>
                    <MaterialIcons name='account-circle' style={{ fontSize: 48, color: 'black' }} />
                </View>
                <Text style={{ fontSize: 28, fontWeight: '700', marginVertical: 20 }}>It’s all here under one roof!</Text>
                <View style={styles.searchInput}>
                    <TextInput
                        autoCorrect={false}
                        style={styles.search}
                        placeholder='What are you looking for?'
                    />
                    <FontAwesome name='search' style={{ fontSize: 24, color: '#8B8B8B' }} />
                </View>
                <View style={styles.slideShow}>
                    {/* <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'black' }}>SLIDESHOW</Text> */}
                    <Carousel
                        autoplayInterval={3000}
                        loop={true}
                        autoplay
                        showsControls={false}
                    >
                        <View style={styles.slide1}>
                            <Text style={styles.text}>1</Text>
                        </View>
                        <View style={styles.slide2}>
                            <Text style={styles.text}>2</Text>
                        </View>
                        <View style={styles.slide3}>
                            <Text style={styles.text}>3</Text>
                        </View>
                    </Carousel>
                </View>
                <View>
                    <Text style={styles.sectionTitle}>Shop by Category</Text>
                    <View style={styles.categoryContainer}>
                        {
                            categories.map((cat) => {
                                return <Pressable key={cat} onPress={() => navigation.navigate('Category')}>
                                    <View key={cat} style={{ marginVertical: 16 }}>
                                        <View style={styles.categories}>
                                            <Text style={{ textAlign: "center", }}>Image</Text>
                                        </View>
                                        <Text style={styles.categoryTitle}>{cat}</Text>
                                    </View>
                                </Pressable>
                            })
                        }
                    </View>
                    <View style={styles.viewAll}>
                        <Text style={{ fontSize: 20, fontWeight: '500' }}>View all</Text>
                        <Octicons name='chevron-right' style={{ fontSize: 20, marginLeft: 10 }} />
                    </View>
                </View>
                <View style={{ marginTop: 50 }} >
                    <Text style={styles.sectionTitle}>Instant Cart <MaterialCommunityIcons name='flash' style={[styles.stickyIcon, { fontSize: 16 }]} /></Text>
                    <View style={styles.categoryContainer}>
                        {
                            categories.map((cat, i) => {
                                if (i > 5) {
                                    return <View key={cat} style={{ marginVertical: 16 }}>
                                        <View style={styles.categories}>
                                            <Text style={{ textAlign: "center", }}>Image</Text>
                                        </View>
                                        <Text style={styles.categoryTitle}>{cat}</Text>
                                    </View>
                                }
                            })
                        }
                    </View>
                    <View style={styles.viewAll}>
                        <Text style={{ fontSize: 20, fontWeight: '500' }}>View all</Text>
                        <Octicons name='chevron-right' style={{ fontSize: 20, marginLeft: 10 }} />
                    </View>
                </View>
                <View style={{ marginTop: 50 }} >
                    <Text style={styles.sectionTitle}>Daily Cart  <Ionicons name='timer' style={[styles.stickyIcon, { fontSize: 16 }]} /></Text>
                    <View style={styles.categoryContainer}>
                        {
                            categories.map((cat, i) => {
                                if (i > 5) {
                                    return <View key={cat} style={{ marginVertical: 16 }}>
                                        <View style={styles.categories}>
                                            <Text style={{ textAlign: "center", }}>Image</Text>
                                        </View>
                                        <Text style={styles.categoryTitle}>{cat}</Text>
                                    </View>
                                }
                            })
                        }
                    </View>
                    <View style={styles.viewAll}>
                        <Text style={{ fontSize: 20, fontWeight: '500' }}>View all</Text>
                        <Octicons name='chevron-right' style={{ fontSize: 20, marginLeft: 10 }} />
                    </View>
                </View>
                <View style={{ marginTop: 50 }} >
                    <Text style={styles.sectionTitle}>Monthly Cart  <Ionicons name='calendar' style={[styles.stickyIcon, { fontSize: 16 }]} /></Text>
                    <View style={styles.categoryContainer}>
                        {
                            categories.map((cat, i) => {
                                if (i > 5) {
                                    return <View key={cat} style={{ marginVertical: 16 }}>
                                        <View style={styles.categories}>
                                            <Text style={{ textAlign: "center", }}>Image</Text>
                                        </View>
                                        <Text style={styles.categoryTitle}>{cat}</Text>
                                    </View>
                                }
                            })
                        }
                    </View>
                    <View style={styles.viewAll}>
                        <Text style={{ fontSize: 20, fontWeight: '500' }}>View all</Text>
                        <Octicons name='chevron-right' style={{ fontSize: 20, marginLeft: 10 }} />
                    </View>
                </View>
                <View style={{ marginTop: 50 }} >
                    <Text style={styles.sectionTitle}>Today's Offers <MaterialCommunityIcons name='brightness-percent' style={[styles.stickyIcon, { fontSize: 16 }]} /></Text>
                    <ScrollView horizontal={true} style={styles.offerContainer}>
                        {
                            categories.map((cat, i) => {
                                if (i > 5) {
                                    return <View key={cat} style={{ marginVertical: 16 }}>
                                        <View style={styles.offer}>
                                            <Text style={{ textAlign: "center", }}>Image</Text>
                                        </View>

                                    </View>
                                }
                            })
                        }
                    </ScrollView>
                    <View style={styles.viewAll}>
                        <Text style={{ fontSize: 20, fontWeight: '500' }}>View all</Text>
                        <Octicons name='chevron-right' style={{ fontSize: 20, marginLeft: 10 }} />
                    </View>
                </View>
                <View style={{ marginVertical: 50 }} >
                    <Text style={styles.sectionTitle}>Fresh Finds</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 25 }}>
                        <View style={{ height: 200, width: 180, backgroundColor: '#F4F3F3', borderRadius: 8, justifyContent: 'flex-end', }}>
                            <View style={{ backgroundColor: '#D1D0D0', height: 60, borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }} >
                                <Text style={{ alignSelf: 'center', fontSize: 16, color: '#000' }}>Product details</Text>
                            </View>
                        </View>
                        <View style={{ height: 200, width: 180, backgroundColor: '#F4F3F3', borderRadius: 8, justifyContent: 'flex-end', }}>
                            <View style={{ backgroundColor: '#D1D0D0', height: 60, borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }} >
                                <Text style={{ alignSelf: 'center', fontSize: 16, color: '#000' }}>Product details</Text>
                            </View>
                        </View>
                    </View>

                </View>
            </ScrollView>
            <KiloBagNavBar />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        backgroundColor: 'white',
    },
    deliverLocation: {
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
        // fontWeight: 'bold',
        color: 'black'
    },
    searchInput: {
        height: 56,
        // borderWidth: 1,
        paddingHorizontal: 20,
        backgroundColor: '#F5F3F3',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    search: {
        flex: 1,
        color: '#616060',
        fontSize: 16,
    },
    slideShow: {
        height: 160,
        backgroundColor: '#F5F3F3',
        marginVertical: 28,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    categoryContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginVertical: 12,
    },
    categories: {
        backgroundColor: '#F4F3F3',
        height: 100,
        width: 100,
        borderRadius: 8,
    },
    categoryTitle: {
        color: '#000',
        textAlign: 'center',
        fontWeight: '500',
        marginTop: 5,
    },
    viewAll: {
        flexDirection: 'row',
        // marginBottom: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    offerContainer: {
        flexDirection: 'row',
        // flexWrap: 'wrap',
        // justifyContent: 'space-between',

        marginVertical: 12,
    },
    offer: {
        backgroundColor: '#F4F3F3',
        height: 200,
        width: 200,
        borderRadius: 8,
        marginRight: 24,
    },
    sectionTitle: { fontSize: 16, color: '#000', fontWeight: '500' },
    //dummy slider design
    slide1: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5F3F3",
        borderRadius: 8,
    },
    slide2: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5F1F9",
        borderRadius: 8,
    },
    slide3: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F1F5F3",
        borderRadius: 8,
    },
    text: {
        color: "#1f2d3d",
        opacity: 0.7,
        fontSize: 48,
        fontWeight: "bold"
    }
    //dummy slider design end
})


export default Home