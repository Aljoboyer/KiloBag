
import { StyleSheet } from 'react-native';
import { Colors } from './../../Theme/Colors';

export const ModifySubStyle = StyleSheet.create({
    ProductView:{
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: Colors.SectionBorderColor,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    ImgView:{
        height: 88,
        width: 88,
    },
    Inputs:{
        borderColor: Colors.SectionBorderColor,
        borderWidth: 1,
        height: 116,
        width: '100%',
        borderRadius: 10
    },
    DateView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 1,
        borderColor: Colors.LightGreen,
        paddingHorizontal: 20,
        height: 35,
        marginTop: 10
    },
    DateLabel: {fontSize: 13, fontWeight: '400', color: '#747474', paddingTop: 15}
})
