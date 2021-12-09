import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native'
import {Header} from 'react-native-elements';


export default function MexicoVacunadosScreen({navigation}) {
    const [Llamada, setLllamada]= useState([]);
    const [wait, setWait]= useState(false);
    //este wait funciona porque los datos cargan de una manera rara asi que con operadores ternarios evitamos que rompa
    const [Bandera, setBandera]= useState([]);
    const [MensajeD, setMensajeD]= useState("");
    //Uso de states para guardar distintos mensajes y arreglos

    async function fetchFunction() {
        try {
            //son dos llamadas api porque en una no estaba la imagen de la bandera
            //Uso setBandera para de ahi agarrar la imagen de la bandera
            //Se aplica el if al json2 para determinar si se tiene datos de las vacunas aplicadas hoy o no
            
            const response = await fetch(`https://disease.sh/v3/covid-19/countries/Mexico?strict=true`);
            const response2 = await fetch(`https://disease.sh/v3/covid-19/vaccine/coverage/countries/Mexico?lastdays=3&fullData=true`);
            const json1 = await response.json();
            const json2 = await response2.json();
            setLllamada(json2);
            setBandera(json1);
            setWait(true);
            if (json2.timeline[0].daily === 0) {
                setMensajeD("No contamos con los datos");
            } else {
                setMensajeD(json2.timeline[0].daily);
            }
        }
        catch (err) {
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
                            <Image source={{ uri: Bandera.countryInfo.flag }}
                                style={styles.poster} />
                            <Text>Poblacion vacunada: {Llamada.timeline[0].total}</Text>
                            <Text>Poblacion vacunada el dia de hoy: {MensajeD}</Text>

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