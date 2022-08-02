import React from "react";
import { Modal, Text, View, Image, Pressable, SafeAreaView } from "react-native";
import CustomButton from './../CustomButton';
import { ModalStyle } from './../../Styles/ModalStyle/ModalStyle';
import Icon from 'react-native-vector-icons/AntDesign'
import { Colors } from './../../Theme/Colors';
import CustomButtonTwo from './../CustomButtonTwo/CustomButtonTwo';
import { useNavigation } from "@react-navigation/native";
import { Backdrop } from "react-native-backdrop";
import LottieView from 'lottie-react-native';

const Modals = ({modalVisible, setModalVisible, loading, lang, option, isdeleted, isModifyed, isPaused}) => {
   const navigation = useNavigation()
  return (
    <>
          <Backdrop
        visible={modalVisible}
        // handleOpen={handleOpen}
        // handleClose={handleClose}
        onClose={() => {}}
        swipeConfig={{
          velocityThreshold: 0.3,
          directionalOffsetThreshold: 80,
        }}
        animationConfig={{
          speed: 14,
          bounciness: 4,
        }}
        overlayColor="rgba(0,0,0,0.32)"
        backdropStyle={{
          backgroundColor: '#fff',
        }}>
        <View style={ModalStyle.centeredView}>
          <Modal
          animationType="fade"
          transparent
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={ModalStyle.centeredView}>
            <View style={ModalStyle.modalView}>
                {
                  loading && <><LottieView
                  source={require('../../../assets/JsonFiles/loader.json')} autoPlay loop
              />
              </>  } 
              { lang &&  <> 
                    <Icon name="warning" size={80} color={Colors.LightGreen} />
                  <Text style={ModalStyle.modalText}>Please select language</Text>
                  <CustomButton customStyles={ModalStyle.buttons} title='OK' onPress={() => setModalVisible(!modalVisible)}/>
                    </>
                }
                {
                  option == 'delete' && <View style={{alignItems: 'center'}}>
                    <Image source={require('../../../assets/deleteimg.png')} />
                    <Text style={{fontSize: 16, fontWeight: '500', color: '#3D3D3D'}}>Are you sure you want to delete?</Text>
                    <Text style={{color: '#747474',fontSize: 11, fontWeight: '400', paddingVertical: 15}}>Instead pause your subscription, 
                      take a break and resume your subscription 
                      when you’re back</Text>
                      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                          <Pressable onPress={() => {
                           navigation.navigate('DeleteSubscription')
                           setModalVisible(false)
                          }} style={ [ModalStyle.ButtonsCommonStyle, {backgroundColor: 'white', borderColor: Colors.LightGreen,  width: 118, height: 35, borderWidth: 1}]} >
                            <Text style={{fontSize: 13, fontWeight: '600', color: Colors.LightGreen}}>DELETE</Text>
                          </Pressable>

                          <Pressable onPress={() => {
                           navigation.navigate('PauseSubscription')
                           setModalVisible(false)
                          }} style={ [ModalStyle.ButtonsCommonStyle, { width: 118, height: 35, marginLeft: 10}]} >
                            <Text style={{fontSize: 13, fontWeight: '600', color: 'white'}}>PAUSE</Text>
                          </Pressable>
                      </View>
                  </View>
                }

                { isdeleted && <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 16, fontWeight: '500', color: '#3D3D3D'}}>Subscription Deleted</Text>
                    <Text style={{color: '#747474',fontSize: 11, fontWeight: '400', paddingVertical: 20}}>Your subscription will be stopped
                    from tomorrow. Scheduled order for
                    today will be delivered. </Text>
                  </View>
                }

                {
                  option == 'modify'  && <View style={{alignItems: 'center', paddingTop: 100}}>
                
                    <Text style={{fontSize: 16, fontWeight: '500', color: '#3D3D3D'}}>Modify Subscription</Text>
            
                      <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
                          <Pressable onPress={() =>{
                              navigation.navigate('PermanentModify')
                              setModalVisible(false)
                          }} style={ [ModalStyle.ButtonsCommonStyle, {backgroundColor: 'white', borderColor: Colors.LightGreen,  width: 245, height: 35, borderWidth: 1}]} >
                            <Text style={{fontSize: 13, fontWeight: '600', color: Colors.LightGreen}}>Modify Permanently</Text>
                          </Pressable>

                          <Pressable onPress={() => {navigation.navigate('ModifyTemporary')
                          setModalVisible(false)}} style={ [ModalStyle.ButtonsCommonStyle, { width: 245, height: 35, marginTop: 10}]} >
                            <Text style={{fontSize: 13, fontWeight: '600', color: 'white'}}>Modify Temporarily</Text>
                          </Pressable>
                      </View>
                  </View>
                }
              
              
              { isModifyed && <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 16, fontWeight: '500', color: '#3D3D3D'}}>Subscription Modifyed</Text>
                      <Text style={{color: '#747474',fontSize: 11, fontWeight: '400', paddingVertical: 20}}>Your subscription will resume 
                      on 12/04/2022 </Text>
                  </View>
                }

              { isPaused && <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 16, fontWeight: '500', color: '#3D3D3D'}}>Subscription Paused</Text>
                      <Text style={{color: '#747474',fontSize: 11, fontWeight: '400', paddingVertical: 20}}>Your subscription will resume 
                      on 12/04/2022 </Text>
                  </View>
                }

            </View> 
          </View>
          </Modal>
        </View>
      </Backdrop>
    </>
     
  );
};

export default Modals;

