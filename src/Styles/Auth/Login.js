import {  StyleSheet } from 'react-native';

export const ChooseLanguageStyle = StyleSheet.create({
    highlight: {
        fontWeight: '700',
    },
    selectedLanguage: {
        width: 125,
        height: 120,
        borderRadius: 10,
        borderWidth: 5,
        borderColor: '#5CBB5E',
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5
    },
    notSelectedLanguage: {
        width: 125,
        height: 120,
        borderRadius: 10,
        borderColor: '#929292',
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        marginHorizontal: 5
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: "flex-start",
        // borderColor: 'red',
        // borderWidth: 3,
    },
    LanguageContainer:{ 
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
        paddingHorizontal: 30,
        marginTop: 50
    },
    ChooseTitle: { textAlign: 'center', fontSize: 18, color: '#5CBB5E', fontWeight: '600', marginTop: 90 },
    imageContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 80
    }
});