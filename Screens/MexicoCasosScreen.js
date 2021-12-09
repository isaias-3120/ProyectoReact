import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native'
import {Header} from 'react-native-elements';



export default function MexicoCasosScreen({navigation}) {
    const [Llamada, setLllamada]= useState([]);
    const [wait, setWait]= useState(false);

    async function fetchFunction() {
        try{
          const response = await fetch(`https://disease.sh/v3/covid-19/countries/Mexico?strict=true`);
          const json1 = await response.json();
          console.log(json1);
          setLllamada(json1);
          setWait(true);
        }
        catch(err) {
          throw err;
        }
    }

    useEffect(()=>{
        fetchFunction();
    }, [])

    return (
        <View style={styles.container3}>  

            <View style={styles.container2}>
                {
                    wait
                    ?
                        <View style={styles.container2}>
                            <Image source={{ uri: Llamada.countryInfo.flag }}
                                style={styles.poster} />
                            <Text>Poblacion: {Llamada.population}</Text>
                            <Text>Casos en Mexico: {Llamada.cases}</Text>
                            <Text>Casos del dia de hoy: {Llamada.todayCases}</Text>
                            <Text>Casos activos: {Llamada.active}</Text>
                            <Text>Casos criticos: {Llamada.critical}</Text>
                            <Text>Pruebas aplicadas: {Llamada.tests}</Text>
                            <Text>Decesos totales: {Llamada.deaths}</Text>
                            <Text>Decesos del dia de hoy: {Llamada.todayDeaths}</Text>
                        </View>
                    :
                    <Text>Nadita</Text>


                }


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
    poster: {
        minWidth: 250, 
        minHeight: 143,
    },
});