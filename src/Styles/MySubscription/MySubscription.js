
import { StyleSheet } from 'react-native';
import { Colors } from './../../Theme/Colors';

export const MysubscriptionStyle = StyleSheet.create({
    ProductMainView:{
        borderColor: Colors.SectionBorderColor,
        borderWidth: 1,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        marginTop: 10,
    },
    ProductView:{

        padding: 10
    },
    DescriptionView:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    ButtonStyle:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 26,
        width: 85,
        borderRadius: 25,
        marginRight: 8
    },
    BtnView:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingTop: 5
    },
    ImgView:{
        justifyContent: 'center', alignItems: 'center', height: 88, width: 88
    },
    TextView:{
        paddingLeft: 10,
        paddingVertical: 10,
        borderBottomColor: Colors.SectionBorderColor,
        borderBottomWidth: 1
    }
})