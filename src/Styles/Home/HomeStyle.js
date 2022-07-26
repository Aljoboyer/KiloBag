import {  StyleSheet } from 'react-native';
import { Colors } from './../../Theme/Colors';

export const Homestyles = StyleSheet.create({
    Homecontainer: {
        flex: 1,
       
        backgroundColor: 'white',
        paddingHorizontal: 15
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
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#F5F5F5',
        borderWidth: 1,
        marginTop: 20
    },
    search: {
        flex: 1,
        color: '#616060',
        fontSize: 16,
    },
    slideShow: {
        height: 160,
        marginVertical: 28,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },

    viewAll: {
        flexDirection: 'row',
        // marginBottom: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
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
    sectionTitle: { fontSize: 15, color: Colors.Black, fontWeight: '500' },
    //dummy slider design
    slide1: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
    },
    slide2: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
    },
    slide3: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
    },
    text: {
        color: "#1f2d3d",
        opacity: 0.7,
        fontSize: 48,
        fontWeight: "bold"
    },
    SearchBoxTitle:{ fontSize: 22, 
        fontWeight: 'bold', 
        marginLeft: 30, 
        color: Colors.Black,
        marginVertical: 20
    },
    ViewText: { fontSize: 14, fontWeight: '500', color: Colors.Black,  },

})