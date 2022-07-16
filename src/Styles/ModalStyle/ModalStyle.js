import {  StyleSheet } from 'react-native';

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