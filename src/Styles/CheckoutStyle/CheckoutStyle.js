import { StyleSheet } from "react-native";
import { Colors } from './../../Theme/Colors';


export const CheckoutStyle = StyleSheet.create({
    LocationView:{borderColor: Colors.LightGreen, borderWidth: 1, borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' , height: 80, paddingHorizontal: 10},
    LocationIconBox:{width: 60, height: 60, backgroundColor: Colors.LightGreen, borderRadius: 10, justifyContent: 'center', alignItems: 'center',},
    CardIconBox:{width: 70, height: 40, backgroundColor: Colors.LightGreen, borderRadius: 10, justifyContent: 'center', alignItems: 'center',},
    InstructionText:{fontSize: 14, fontWeight: '400', marginLeft: 8, color: 'black'},
    CheckBoxView:{flexDirection: 'row'},
    DeliveryContainer: {borderWidth: 1, borderColor: Colors.LightGreen, marginTop: 30, borderRadius: 10}
});