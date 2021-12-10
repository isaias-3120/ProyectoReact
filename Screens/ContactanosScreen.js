import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Constants from 'expo-constants';
import {Header} from 'react-native-elements';


const ContactanosScreen = () => {
    return (
        <View style={styles.container3}>  
            <Header
                leftComponent={{ icon: 'menu', color: '#fff', onPress: () => navigation.openDrawer() }}
                centerComponent={{ text: 'Contactanos', style: { color: '#fff' } }}
            /> 
            <View style={styles.titulo}>
                <Text style={styles.bold}>Conoce al equipo!</Text>
            </View>
            <View style={styles.container2}>

                <Text style={styles.texto}>Esta aplicacion le dara los datos en tiempo real de las estadisticas del COVID-19. Podra seleccionar entre los datos globales, de Mexico, o entre algun pais de su eleccion{"\n"}</Text>

            </View>
        </View>
    );
}
 
export default ContactanosScreen;

const styles = StyleSheet.create({

    container3: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
    },
    container2: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    titulo: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    images:{
      width: 100, 
      height: 150,
      margin:5,
    },
    texto:{
      color: 'black', 
      textAlign: 'center', 
      fontSize: 15,
      margin: 10,
      fontWeight: 'bold',
      width: '65%',
    },
    bold:{
        textAlign: 'center', 
        fontWeight:'bold',
        fontSize:30,
    },
});