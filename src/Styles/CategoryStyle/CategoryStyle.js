import { StyleSheet } from "react-native";
import { Colors } from './../../Theme/Colors';


export const CategoryStyle = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 0,
        zIndex: -1
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
      
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 20
    },
    CategoryView:{
        height: 110,
        width: 110,
        backgroundColor: "white",
        borderRadius: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 1,
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 0
    },
    CategoryItemContainer:{
        marginHorizontal: 10,
   
    },
    imageView: {
        height: 80,
        width: 80,
    },
    DropDownBox: {backgroundColor: 'white', position: 'absolute', left: 10, width: 160, top: 30, zIndex: 2, justifyContent: 'center', alignItems: 'center', paddingVertical: 10, elevation: 2, borderRadius: 10},
    DropDownText:{
        fontSize: 15,
        fontWeight: '500',
        marginVertical: 10
    }
})