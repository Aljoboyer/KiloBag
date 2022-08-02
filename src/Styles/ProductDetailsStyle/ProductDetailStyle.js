import { StyleSheet } from "react-native";
import { Colors } from './../../Theme/Colors';


export const ProductDetailStyle = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
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
    CarouselView:{ height: 250, width: 300, backgroundColor: 'white', shadowColor: 'black', shadowOffset: { width: -16, height: -12 }, shadowOpacity: 0, shadowRadius: 20, alignSelf: 'center', borderRadius: 8, marginTop: 24 },
    DiscountText:{position:'absolute', color :'white' , left: 30, fontWeight: '700'},
    SubscribeBtn: { borderRadius: 8, alignItems: 'center', marginTop: 8, borderColor: Colors.LightGreen, borderWidth: 1, width: 106, height: 28, justifyContent: 
'center', alignItems: 'center' },
    AmountView:{ borderRadius: 12, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12, marginTop: 16 },
    AmountBtn:{ backgroundColor: Colors.LightGreen, padding: 2, borderRadius: 2 },
    DescriptionText:{ marginTop: 12, marginBottom: 24, fontSize: 12, fontWeight: '400', lineHeight: 20 , color: '#525252'}
});