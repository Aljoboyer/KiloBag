import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors } from './../Theme/Colors';

const CustomButton = ({ title, onPress , customStyles}) => {
    return (
        <TouchableOpacity activeOpacity={0.6}
            onPress={onPress}
            style={[styles.ButtonStyle, customStyles]}>
            <Text
                style={{
                    color: '#FFFFFF',
                    fontSize: 15,
                    padding: 15,
                    textAlign: 'center',
                    fontWeight: '700',

                }}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default CustomButton;


const styles = StyleSheet.create({
    ButtonStyle:{
        backgroundColor: Colors.LightGreen,
        // marginHorizontal: 50,
        borderRadius: 10,
    }
  });