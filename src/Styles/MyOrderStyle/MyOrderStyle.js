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
        paddingVertical: 5
    },
    ItemText: {fontSize: 13, fontWeight: '500', color: 
    'black', textAlign: 'right'},
    ReorderBtn:{
        backgroundColor: Colors.LightGreen,
        width: '70%',
        padding: 7,
        borderRadius: 5
    },
    CancelBtn:{
        paddingVertical: 5
    }
})

export const OrderDetailStyle = StyleSheet.create({
  MainView:{
    borderColor: Colors.SectionBorderColor,
    borderWidth: 1,
    borderRadius: 10,
    margin: 12,
    padding: 15,
    flex: 1
  },
  DescripView:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  CircleView:{
    height: 20,
    width: 20,
    borderRadius: 100
  },
  ProductView:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 12
  },
  CalculationView:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopColor: '#D6D6D6',
    borderTopWidth: 2
  },
  CalText:{fontSize: 12, color: '#828282' , fontWeight: '500', paddingVertical: 5},
  TotalText:{fontSize: 15, color: 'black' , fontWeight: '600', marginVertical: 8},
  LocationText: {
    fontSize: 13, fontWeight: '500', color: 
    'black', 
  },

  PayTitle:{
    fontSize: 14,
    fontWeight: '400',
    color: 'black'
  },
  PayAnytimeView:{
    borderColor: Colors.SectionBorderColor,
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 12,
    paddingTop: 15,
    paddingHorizontal: 15,
    marginTop: 15
  }
})