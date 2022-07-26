import { StyleSheet } from "react-native";
import { Colors } from './../../Theme/Colors';



export const FreshItemStyle = StyleSheet.create({

    categories: {
        height: 100,
        width: 130,
        justifyContent: 'center',
        alignItems: 'center',
  
    },
    categoryTitle: {
        color: 'black',
        fontWeight: '500',
        fontSize: 16,
        marginLeft: 0
    },

    itemFooter:{
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    AmountBtn:{
        width: 60,
        flexDirection: 'row',
        paddingVertical: 5,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    ModalText:{fontSize: 20, fontWeight: '500', color: Colors.Black, marginTop: 10, borderColor: Colors.LightGreen, borderWidth: 1, paddingHorizontal: 15, paddingVertical: 5},
    AmountViewStyle:{width: 200},
    CategoryItemView: {marginVertical: 16, marginHorizontal: 10, borderColor: Colors.LightGreen, borderWidth: 1, borderRadius: 10, paddingHorizontal: 5, paddingVertical: 5},
    AmountView: {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 0},

    BuyNowbtn:{position: "absolute", backgroundColor: Colors.LightGreen,  borderRadius: 5, top: '93%', left: '20%', height: 26, width: 79, justifyContent: 'center', alignItems: 'center',} ,

    subscribeBtn:{ borderColor: Colors.LightGreen, borderRadius: 5, alignItems: 'center', borderWidth: 1 , width: 98, height: 27, justifyContent: 'center', alignItems: 'center', marginBottom: 17, alignSelf: 'center'},

})