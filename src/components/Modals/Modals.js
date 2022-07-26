import React from "react";
import { Modal, Text, View, Image, Pressable } from "react-native";
import CustomButton from './../CustomButton';
import { ModalStyle } from './../../Styles/ModalStyle/ModalStyle';
import Icon from 'react-native-vector-icons/AntDesign'
import { Colors } from './../../Theme/Colors';
import CustomButtonTwo from './../CustomButtonTwo/CustomButtonTwo';


const Modals = ({modalVisible, setModalVisible, loading, lang, deletes}) => {
   
  return (
    <Pressable  onPress={() => setModalVisible(false)} >
        <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }} 
      >
        <View style={ModalStyle.centeredView}>
          <View style={ModalStyle.modalView}>
              {
                loading && <><Image
                source={require('../../../assets/LoadingImg.png')}
            />
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>Loading...</Text>
            <CustomButton customStyles={ModalStyle.buttons} title='OK' onPress={() => setModalVisible(!modalVisible)}/>
            </>  } 
            { lang &&  <> 
                  <Icon name="warning" size={80} color={Colors.LightGreen} />
                <Text style={ModalStyle.modalText}>Please select language</Text>
                <CustomButton customStyles={ModalStyle.buttons} title='OK' onPress={() => setModalVisible(!modalVisible)}/>
                  </>
              }
              {
                deletes == 'delete' && <View>
                  <Image source={require('../../../assets/deleteimg.png')} />
                  <Text style={{fontSize: 16, fontWeight: '500', color: '#3D3D3D'}}>Are you sure you want to delete?</Text>
                  <Text style={{color: '#747474',fontSize: 11, fontWeight: '400', paddingVertical: 5}}>Instead pause your subscription, 
                    take a break and resume your subscription 
                    when you’re back</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <CustomButtonTwo onPress={() => setModalVisible(false)} title="DELETE" customStyles={{backgroundColor: 'white', borderColor: Colors.LightGreen, borderWidth: 1,}} customStylesTwo={{fontSize: 13, fontWeight: '600', color: Colors.LightGreen}}/>

                        <CustomButtonTwo onPress={() => setModalVisible(false)} title="PAUSE"  customStylesTwo={{fontSize: 13, fontWeight: '600'}}/>
                    </View>
                </View>
              }
            
          </View> 
        </View>
        </Modal>
    </Pressable>
  );
};

export default Modals;
