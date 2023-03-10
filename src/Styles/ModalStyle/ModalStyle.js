import {  StyleSheet, Dimensions } from 'react-native';
import { Colors } from './../../Theme/Colors';
const {width, height } = Dimensions.get("window");

export const ModalStyle = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
      height: 500,
      backgroundColor: "transparent"
    },

    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 2,
      height: 300,
      width: 350,
      justifyContent: 'center',
     
    },
    buttons: {
      borderRadius: 10,
      elevation: 2,
      marginVertical: 20
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
      fontSize: 18,
      marginTop: 10,
      fontWeight: 'bold'
    },

    ButtonsCommonStyle: {
      justifyContent: 'center',
      alignItems: "center",
      borderRadius: 5,
      backgroundColor: Colors.LightGreen,
    }
  });


 export const BottomModalStyle = StyleSheet.create({

    modalBox: {
      overflow: "scroll",
      alignItems: "center",
      justifyContent: "center",
      height,
      width,
      backgroundColor: "transparent"
    },
    ContentContainer: {
      position: "absolute",
      bottom: 0,
      width,
      height: 400,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      backgroundColor: "white",
      paddingHorizontal: 15,
      paddingVertical: 15
    },
    textStyle: {
      fontSize: 22
    },
    AmountBtn:{ borderColor: Colors.LightGreen, borderRadius: 5, alignItems: 'center', borderWidth: 1 , width: 88, height: 27, justifyContent: 'center', alignItems: 'center'},
    ContentView: {paddingHorizontal: 10, paddingVertical: 10, marginTop: 15, borderColor: Colors.SectionBorderColor, borderWidth: 1, borderRadius: 10},

    BuyNowbtn:{backgroundColor: Colors.LightGreen,borderRadius: 5, height: 27, width: 95, justifyContent: 'center', alignItems: 'center'},
})