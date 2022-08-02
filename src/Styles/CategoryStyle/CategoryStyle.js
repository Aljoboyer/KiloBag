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
        height:  64,
        width: 64,
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
        height:  55,
        width: 40,
    },
    DropDownBox: {backgroundColor: 'white', position: 'absolute', left: 10, width: 160, top: 30, zIndex: 2, justifyContent: 'center', alignItems: 'flex-start', paddingVertical: 10, elevation: 2, borderRadius: 10, paddingLeft: 15},
    DropDownText:{
        fontSize: 12,
        fontWeight: '500',
        marginVertical: 10
    },
    DropDownText2:{
        fontSize: 12,
        fontWeight: '500',
        marginVertical: 10,
        color: 'white'
    }
})