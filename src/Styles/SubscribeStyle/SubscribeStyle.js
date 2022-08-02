import { StyleSheet } from "react-native";
import { Colors } from './../../Theme/Colors';


export const SubscribeStyle = StyleSheet.create({
    ProductView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20,
        borderColor: Colors.SectionBorderColor,
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    AmountBtn:{ borderColor: Colors.LightGreen, padding: 4, borderRadius: 8, alignItems: 'center', borderWidth: 1 , paddingHorizontal: 10},
    ButNowBtn:{
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: Colors.LightGreen,
        borderRadius: 5,
        
    },
    DeliverySelectView:{
        marginVertical: 20,
        borderColor: Colors.SectionBorderColor,
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    DeliveryEventView: { flexDirection: 'row',
    flexWrap: 'wrap',},

    NotSelectedText:{fontSize: 13, fontWeight: '500', color: 'black'},

    SelectedStyle:{borderColor: Colors.LightGreen, borderWidth: 1, borderRadius: 50, paddingVertical: 5, paddingHorizontal: 15, marginRight: 5, marginTop: 5},

    SelectedText:{fontSize: 13, fontWeight: '500', color: Colors.LightGreen},
    NotSelectedStyle:{  paddingVertical: 5, paddingHorizontal: 15, marginRight: 5,marginTop: 5},

    SubscribeDateView:{flexDirection: 'row', justifyContent: 'space-between', borderColor: Colors.SectionBorderColor, borderWidth: 1 , borderRadius: 10,  paddingVertical: 15, paddingHorizontal: 10},

    PromoView:{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingBottom: 15},

    InputStyle:{borderWidth: 1.5 , width: 230,borderTopLeftRadius: 10, borderBottomLeftRadius: 10, paddingLeft: 10, height: 40 },

    DiscountCodeView: {borderWidth: 1, borderColor: Colors.SectionBorderColor, borderRadius: 10, marginVertical: 20, paddingHorizontal: 0},

    ButtonStyle:{borderTopLeftRadius: 0, borderBottomLeftRadius: 0, backgroundColor: Colors.LightGreen, borderTopRightRadius: 5, borderBottomRightRadius: 5, height: 40, width: 93},
    ApplyCouponText:{ fontSize: 16, fontWeight: '500',  marginLeft: 10, color: Colors.LightGreen, marginVertical: 10 }
})