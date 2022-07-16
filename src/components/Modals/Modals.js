import React from "react";
import { Modal, Text, View, Image } from "react-native";
import CustomButton from './../CustomButton';
import { ModalStyle } from './../../Styles/ModalStyle/ModalStyle';
import Icon from 'react-native-vector-icons/AntDesign'
import { Colors } from './../../Theme/Colors';


const Modals = ({modalVisible, setModalVisible, loading}) => {
   
  return (
    <View style={ModalStyle.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={ModalStyle.centeredView}>
          <View style={ModalStyle.modalView}>
            {
              loading ? <><Image
              source={require('../../../assets/LoadingImg.png')}
          />
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>Loading...</Text>
          </> : <> <Icon name="warning" size={80} color={Colors.LightGreen} />
          <Text style={ModalStyle.modalText}>Please select language</Text>
            </>
            }
            <CustomButton customStyles={ModalStyle.buttons} title='OK' onPress={() => setModalVisible(!modalVisible)}/>
          </View> 
        </View>
      </Modal>
    </View>
  );
};

export default Modals;
