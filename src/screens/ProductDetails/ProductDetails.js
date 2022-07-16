import { View, Text, SafeAreaView, ScrollView, StyleSheet, } from 'react-native'
import React from 'react'
import KiloBagHeader from '../../components/KiloBagHeader';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Carousel from "pinar";
import Entypo from 'react-native-vector-icons/Entypo'
import Octicons from 'react-native-vector-icons/Octicons'

const ProductDetails = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <ScrollView style={styles.container}>
                <KiloBagHeader
                    backBtn={true}
                    search={true}
                    menu={true}
                    title="Fruits"
                />
                <View style={{ height: 350, width: 300, backgroundColor: 'lightgrey', shadowColor: 'black', shadowOffset: { width: -16, height: -12 }, shadowOpacity: 0, shadowRadius: 20, alignSelf: 'center', borderRadius: 8, marginTop: 24 }} >
                    <Carousel showsControls={false} loop={true}>
                        <Text>1</Text>
                        <Text>2</Text>
                        <Text>3</Text>
                    </Carousel>
                </View>
                <View style={{ borderRadius: 12, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12, marginTop: 16 }}>
                    <View style={{ flexDirection: 'row', }}>

                        <View style={{ justifyContent: 'space-between', paddingVertical: 5, }}>
                            <Text>Product Name</Text>
                            <Text style={{ marginVertical: 8 }}>$209 {"   "}<Text style={{ textDecorationLine: 'line-through', marginLeft: 20 }}>$209</Text></Text>
                            <Text>Available Size</Text>
                            <View style={{ backgroundColor: '#C4C4C4', padding: 4, borderRadius: 8, alignItems: 'center', marginTop: 8 }}>
                                <Text>1kg {" "} <Octicons name='chevron-down' style={{ color: 'black', fontSize: 12, }} /></Text>
                            </View>
                        </View>
                    </View>
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
                <View>
                    <Text style={{ fontSize: 16, fontWeight: '500' }}>Description</Text>
                    <Text style={{ marginTop: 12, marginBottom: 24, fontSize: 12, fontWeight: '400', lineHeight: 20 }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eligendi, repudiandae minima pariatur doloremque blanditiis officiis aliquam illum quae quibusdam aut quidem natus molestiae architecto sit, nesciunt explicabo, ipsa quo? Sunt veniam recusandae ut eligendi repellat tempore iusto sed, ea nemo aspernatur, ullam enim fugiat beatae voluptate sapiente accusamus accusantium. Nam repudiandae neque nulla, quos expedita architecto quasi fuga dignissimos velit veritatis laborum quas nobis atque consequatur quaerat pariatur voluptates. Maiores nisi reiciendis obcaecati sit alias laboriosam beatae officia, culpa saepe. Hic doloremque unde quidem beatae repellat est corrupti vel excepturi nihil, voluptatibus maiores porro repudiandae omnis cupiditate ad modi?
                    </Text>
                </View>
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
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        backgroundColor: 'white',
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
});
export default ProductDetails