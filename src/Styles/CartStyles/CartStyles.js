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
    InstantCartView: {borderWidth: 2, borderColor: Colors.LightGreen, paddingHorizontal: 16, borderRadius: 12, marginTop: 20,},
    CartListTitle: { fontSize: 17, fontWeight: '500'},
    DailyCartView:{ borderWidth: 2, borderColor: Colors.LightPink, paddingHorizontal: 16, borderRadius: 12, marginTop: 30, },
    MonthlyCartView:{ borderWidth: 2, borderColor: Colors.LightBlue, paddingHorizontal: 16, borderRadius: 12, marginTop: 30, }
});