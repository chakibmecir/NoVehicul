import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';



export default class App extends React.Component {
  
    render() {
      return (
        <View style={styles.contain}>
        <View style={styles.container}>
            <View style={styles.cnx}>
            <Image
                style={styles.tinyLogo}
                source={require('./assets/missing-car.png')}
                />
                <Text style={styles.title}>Vous n’avez pas de véhicule</Text>
                <Text style={styles.smalltext}>Choisissez un véhicule pour pouvoir vous mettre en service.</Text>
                <View style={styles.BtnVehiculeContainer}>

                  <Text style={styles.TextVehiculeDefine}>Choisissez un véhicule</Text>

                </View>
            </View>
            
        </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    contain:{
      flex: 1,
      backgroundColor: '#000',
      justifyContent: 'center',
      alignItems:'center',
    },
    container: {
      marginTop: 0,
      alignItems:'center',
      justifyContent: 'center',
      flex: 0.6,
      
    },
    bottom: {
        flex: 0.2,
        width: 332,
        backgroundColor: '#f1f1f1',
    },
    cnx :{
        flex: 0.6,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        justifyContent:'space-evenly',
        alignItems:'center',
        marginHorizontal: 30,
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
      },
      smalltext:{
        textAlign:'center',
        fontSize: 16,
        paddingHorizontal: 35,
    },
    BtnVehiculeContainer:{
      justifyContent: "center", 
      alignItems: 'center', 
      width: 300, 
      height: 60 , 
      backgroundColor: 'lightgray', 
      borderRadius: 8,
      marginVertical: 20,
    },
    TextVehiculeDefine:{
      fontSize: 18, 
      color: 'gray',
    },
  });