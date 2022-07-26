import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors } from '../../Theme/Colors';

const CustomButtonTwo = ({ title, onPress , customStyles, customStylesTwo}) => {
    return (
        <TouchableOpacity activeOpacity={0.6}
            onPress={onPress}
            style={[styles.ButtonStyle, customStyles]}>
            <Text
                style={[styles.textStyle, customStylesTwo]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default CustomButtonTwo;


const styles = StyleSheet.create({
    ButtonStyle:{
        backgroundColor: Colors.LightGreen,
        // marginHorizontal: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle:{
        color: '#FFFFFF',
        fontSize: 15,
        padding: 15,
        textAlign: 'center',
        fontWeight: '700',

    }
  });