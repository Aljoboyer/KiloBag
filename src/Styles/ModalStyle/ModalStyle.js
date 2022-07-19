import {  StyleSheet, Dimensions } from 'react-native';
import { Colors } from './../../Theme/Colors';
const {width, height } = Dimensions.get("window");

export const ModalStyle = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
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
    AmountBtn:{ borderColor: Colors.LightGreen, paddingVertical: 7, paddingHorizontal: 25, borderRadius: 5, alignItems: 'center', borderWidth: 1 , paddingHorizontal: 10},
    ContentView: {paddingHorizontal: 10, paddingVertical: 10, marginTop: 15, borderColor: Colors.SectionBorderColor, borderWidth: 1, borderRadius: 10},

    BuyNowbtn:{backgroundColor: Colors.LightGreen, paddingVertical: 10, paddingHorizontal: 25, borderRadius: 5}
})