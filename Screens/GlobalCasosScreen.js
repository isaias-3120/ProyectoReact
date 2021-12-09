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
                <Text>Poblacion: {Llamada.population}</Text>
                <Text>Casos totales: {Llamada.cases}</Text>
                <Text>Casos del dia de hoy: {Llamada.todayCases}</Text>
                <Text>Casos activos: {Llamada.active}</Text>
                <Text>Casos criticos: {Llamada.critical}</Text>
                <Text>Pruebas aplicadas: {Llamada.tests}</Text>
                <Text>Decesos totales: {Llamada.deaths}</Text>
                <Text>Decesos del dia de hoy: {Llamada.todayDeaths}</Text>

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