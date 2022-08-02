import { StyleSheet } from "react-native";
import { Colors } from "../../Theme/Colors";


export const Cartstyles = StyleSheet.create({
    container: {
        padding: 25,
    },
    cartIcon: {
        fontSize: 16,
        color: 'black',
    },
    CartView: {borderWidth: 1,borderColor: '#F9F9F9', paddingHorizontal: 16, borderRadius: 10, marginTop: 0,},
    CartListTitle: { fontSize: 17, fontWeight: '500'},

});

export const CartItemstyles = StyleSheet.create({
    imageView: { height: 90, width: 90,  borderRadius: 12, marginRight: 12, justifyContent: 'center', alignItems: 'flex-start' },
    AmountIcon: { backgroundColor: Colors.LightGreen, padding: 2, borderRadius: 2, },
    ButtonStyle:{borderTopLeftRadius: 0, borderBottomLeftRadius: 0, height: 40, width: 93},
    InputStyle:{borderWidth: 1 , width: 210,borderTopLeftRadius: 10, borderBottomLeftRadius: 10, paddingLeft: 10, height: 40 },

    PromoView:{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingBottom: 15},

    OrderInfoView:{paddingBottom: 20},

    AmountView:{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 20},

    ProductView:{ paddingHorizontal: 4, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10 },
    
    DiscountCodeView: { borderBottomColor: Colors.LightGreen, borderBottomWidth: 2,   borderTopColor: Colors.LightGreen, borderTopWidth: 2, marginVertical: 30}
});