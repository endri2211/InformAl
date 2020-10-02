import React from 'react';
import { View, StyleSheet, Text, Image, StatusBar, SafeAreaView, Button, TouchableOpacity } from 'react-native';

import AppButton1 from '../components/AppButton1';
import AppButton2 from '../components/AppButton2';
import Colors from '../utils/colors';



 
const WelcomeScreen = ({ navigation }) => {
  return (
  
      <View style={styles.container}>
        <StatusBar
          backgroundColor="rgb(174, 121, 132)"
          barStyle="light-content"
        /> 
        <View style={styles.button}>
          <TouchableOpacity 
          onPress={() => navigation.navigate('GuestView')}
          style={{ backgroundColor: 'orange',
          padding: 20,
          borderRadius: 20,
          
         alignItems: "center", }}><Text style={styles.buttonText}>Hyrje e shpejte</Text></TouchableOpacity>
    

            
          </View> 
      
        <SafeAreaView style={styles.container}>
         
          <Image
            style={styles.tinyLogo}
            source={require("../assets/flame.png")}
          />
     <View style={styles.buttonContainer}>
      
         
        <AppButton1 title="Hyr"  onPress={() => navigation.navigate('Login')} />
            
                
        <AppButton2
          title="Regjistrohu"
    
          onPress={() => navigation.navigate('Register')}
        />
          </View>
        </SafeAreaView>
      </View>
      );
     }
     export default  WelcomeScreen;


  




const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(174, 121, 132)",
    paddingTop: 20,
    paddingLeft: 0,
    flex: 1
  ,
    justifyContent: "center",
  },
  button: {
    padding: 25,
    alignItems: "center",
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 18,
    borderRadius: 10,
    fontWeight: 'bold',

    textAlign: "center",
    margin: 10,
    color: "rgb(0, 0, 0)",
    backgroundColor: "transparent",
  },

  tinyLogo: {
    flex: 1,
    flexDirection: "row",
    resizeMode: "contain",
    width: '90%',
    paddingRight: 60,

  },
  subtitle: {
    fontSize: 24,
    fontWeight: '600',
    paddingVertical: 20,
    color: Colors.primary
  },
  buttonContainer: {
    paddingBottom: 30,
    flexDirection: "row",
    justifyContent: "center",
  }
});
