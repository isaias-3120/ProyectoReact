import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native'
import {Header} from 'react-native-elements';


export default function GlobalCasosScreen({navigation}) {
    const [Llamada, setLllamada]= useState([]);

    useEffect(()=>{
        const api_url = `https://disease.sh/v3/covid-19/all`;
        fetch(api_url)
          .then(data => {
            return data.json();
        })
          .then(resultado => {
            //console.log(resultado);
            setLllamada(resultado); 
        });
    }, [])

    return (
        <View style={styles.container3}> 

            <View style={styles.container2}>
                <Text>Poblacion: {casosGlobales.population}</Text>
                <Text>Casos totales: {casosGlobales.cases}</Text>
                <Text>Casos del dia de hoy: {casosGlobales.todayCases}</Text>
                <Text>Casos activos: {casosGlobales.active}</Text>
                <Text>Casos criticos: {casosGlobales.critical}</Text>
                <Text>Pruebas aplicadas: {casosGlobales.tests}</Text>
                <Text>Decesos totales: {casosGlobales.deaths}</Text>
                <Text>Decesos del dia de hoy: {casosGlobales.todayDeaths}</Text>

            </View>
        </View>
    )
}

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
        justifyContent: 'space-around',
    },
});