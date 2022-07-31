import { StyleSheet } from 'react-native';
import { Colors } from './../../Theme/Colors';

export const MyOrderStyle = StyleSheet.create({
    MainContainer:{
      marginVertical: 20,
      marginHorizontal: 10,
      borderColor: Colors.SectionBorderColor,
      borderWidt: 0.5,
      borderRadius: 10,
      borderWidth: 3,
      flex: 1
    },
    MainView:{
      padding: 10,
    
    },
    TabContainer:{
      flexDirection: 'row',
      justifyContent: 'center'
    },
    NotSelectedStyle:{
      borderBottomColor: '#BBBBBB',
      borderBottomWidth: 2,
      width: '50%'
    },
    SelectedStyle:{
      borderBottomColor: Colors.LightGreen,
      borderBottomWidth: 2,
      width: '50%'
    },
    SelectedText:{
      fontSize: 16,
      color: Colors.LightGreen,
      fontWeight: '500',
      alignSelf: 'center',
      paddingBottom: 10
    },
    NotSelectedText:{
      fontSize: 16,
      color: '#BBBBBB',
      fontWeight: '500',
      alignSelf: 'center',
      paddingBottom: 10
    },
    MyorderView:{
  
    },
    SubscriptionView:{
  
    },
    NotFoundView:{
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 60
    },
    NotFoundText:{
      color: '#232323',
      fontSize: 16,
      fontWeight: '500',
      paddingTop: 15
    },
    Buttons:{
      height: 35,
      width: 150,
      backgroundColor: Colors.LightGreen,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      marginVertical: 5
    }
  })

 export const MyOrderItemStyle = StyleSheet.create({
    OrderItemView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: Colors.LightGreen,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginVertical: 10
    },
    DeliverBtn:{
        borderWidth: 1,
        borderColor: Colors.LightGreen,
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 5
    },
    ItemText: {fontSize: 13, fontWeight: '500', color: 
    'black'},
    ReorderBtn:{
        backgroundColor: Colors.LightGreen,
        width: '70%',
        padding: 7,
        borderRadius: 5
    },
    CancelBtn:{
        borderWidth: 1,
        borderColor: '#A7A7A7',
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 5
    }
})