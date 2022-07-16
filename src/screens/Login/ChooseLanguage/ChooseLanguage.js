import { View, Text, Image, Dimensions, Pressable, Alert } from 'react-native';
import React, { useState } from 'react';
import CustomButton from '../../../components/CustomButton';
import { ChooseLanguageStyle } from '../../../Styles/Auth/Login';
import Modals from './../../../components/Modals/Modals';

const ChooseLanguage = ({ navigation }) => {
    const screen = Dimensions.get("screen");
    const [language, setLanguage] = useState(null)
    const [selected1, setSelected1] = useState(false)
    const [selected2, setSelected2] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={{flex: 1,
                // marginTop: screen.height - 800,
                 padding: 40 }}>
            <View>
                <View style={ChooseLanguageStyle.imageContainer}>
                    <Image
                        source={require('../../../../assets/introimg.png')}
                    />
                </View>

                <Text style={ChooseLanguageStyle.ChooseTitle}>Choose Your Preferred Language</Text>
                <View style={ChooseLanguageStyle.LanguageContainer}>
                    <Pressable onPress={() => {
                        setSelected2(false)
                        setSelected1(true)
                        setLanguage('English')
                    }} style={selected1 ? ChooseLanguageStyle.selectedLanguage : ChooseLanguageStyle.notSelectedLanguage} >
                        <Text style={{ fontSize: 40, color: '#919191' }}>Aa</Text>
                        <Text>English</Text>
                    </Pressable>
                    <Pressable
                        onPress={() => {
                            setSelected2(true)
                            setSelected1(false)
                            setLanguage('Telegu')
                        }}
                        style={selected2 ? ChooseLanguageStyle.selectedLanguage : ChooseLanguageStyle.notSelectedLanguage}>
                        <Text style={{ fontSize: 40, color: '#919191' }}>అఉ</Text>
                        <Text>Telugu</Text>
                    </Pressable>
                </View>
                <View style={{ marginTop: 120 }}>
                    <CustomButton title="Proceed" onPress={() => {
                        if(language){navigation.navigate("SendOTP")}
                        else{
                            setModalVisible(!modalVisible)
                        }
                    }} />
                </View>
                <Modals setModalVisible={setModalVisible} modalVisible={modalVisible} />
            </View>
        </View>
    )
}



export default ChooseLanguage