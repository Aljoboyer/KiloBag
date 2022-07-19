import { StyleSheet, Dimensions } from "react-native";
import { Colors } from './../../Theme/Colors';


const {width, height } = Dimensions.get("window");

const mainHeight = height * 0.7 ;

export const ChooseLocationStyle = StyleSheet.create({
    InputView:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderRadius: 10, 
        borderColor: Colors.SectionBorderColor,
        paddingHorizontal: 25,
    },
    CurrentLocationView:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 30,
        paddingLeft: 20
    },
    CurrentTitle: {fontSize: 16, fontWeight: '400', color: '#363636', paddingLeft: 10},
    LocationItemView: {flexDirection:'row', justifyContent: 'center', alignItems: 'center', marginVertical: 10, paddingVertical: 10, },
    SelectedStyle: {borderColor: Colors.SectionBorderColor, borderWidth: 1, borderRadius: 10,},
    AddBtn: {width: 340, borderRadius: 10, alignSelf: 'center' , marginVertical: 20},
    InputLabel:{fontSize: 14, color: 'black', fontWeight: '400', paddingBottom: 10},
    Inputs:{height: 40, borderColor: Colors.SectionBorderColor, borderWidth: 1, borderRadius: 10},
    modalBox:{
        overflow: "scroll",
        alignItems: "center",
        justifyContent: "center",
        height,
        mainHeight,
        backgroundColor: "transparent"
        
    },
    ContentContainer:{      position: "absolute",
    bottom: 0,
    width,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "white",
    paddingHorizontal: 30,
    paddingVertical: 10
    }
});