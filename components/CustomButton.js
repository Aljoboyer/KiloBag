import React from 'react';
import { TouchableOpacity, Text, } from 'react-native';
const CustomButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity activeOpacity={0.6}
            onPress={onPress}
            style={{
                backgroundColor: '#c4c4c4',
                // marginHorizontal: 50,
                borderRadius: 10,
            }}>
            <Text
                style={{
                    color: '#2A2A2A',
                    fontSize: 16,
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
