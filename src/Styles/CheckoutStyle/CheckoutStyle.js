import { StyleSheet } from "react-native";
import { Colors } from './../../Theme/Colors';


export const CheckoutStyle = StyleSheet.create({
    LocationView:{borderColor: Colors.LightGreen, borderWidth: 1, borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' , height: 80, paddingHorizontal: 10},
    LocationIconBox:{width: 60, height: 60, backgroundColor: Colors.LightGreen, borderRadius: 10, justifyContent: 'center', alignItems: 'center',},
    CardIconBox:{width: 70, height: 40, backgroundColor: Colors.LightGreen, borderRadius: 10, justifyContent: 'center', alignItems: 'center',},
    InstructionText:{fontSize: 14, fontWeight: '400', marginLeft: 8, color: 'black'},
    CheckBoxView:{flexDirection: 'row'},
    DeliveryContainer: {borderWidth: 1, borderColor: Colors.LightGreen, marginTop: 30, borderRadius: 10},
    radioContent:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
      },
      outerCircle:{
        height: 20,
        width: 20,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: Colors.DarkGray,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center'
      },
      innerCircle:{
        height: 10,
        width: 10,
        borderRadius: 7.5,
        borderWidth: 1,
        borderColor: 'white',
      },
      selectedOuterCircle: {
        borderColor:Colors.DarkGray,
      },
      selectedInnerCircle: {
        backgroundColor: Colors.LightGreen,
        borderColor: Colors.LightGreen,
      },
      PlaceOrderBtn:{
        width: 150
      },
    PlaceOrderView:{flexDirection: 'row', justifyContent: 'space-between',  paddingHorizontal: 18, paddingVertical: 20, borderTopColor: Colors.LightGray, borderTopWidth: 1},
    PlaceOrderContainer: {flex: 1, justifyContent: 'flex-end', paddingTop: 100}
});