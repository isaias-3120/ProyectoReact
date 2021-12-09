import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native'
import {Header} from 'react-native-elements';


export default function GlobalVacunadosScreen({navigation}) {
    const [Llamada, setLllamada]= useState([]);
    const [wait, setWait]= useState(false);

    async function fetchFunction() {
        try{
          const response = await fetch(`https://disease.sh/v3/covid-19/vaccine/coverage?lastdays=3&fullData=true`);
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
                    <Text>
                        Vacunas aplicadas al dia de hoy: {Llamada[0].total} {"\n"}
                        {"\n"}
                        {"\n"}{"\n"}
                        Vacunas aplicadas el dia de hoy: {Llamada[0].daily} {"\n"}
                    
                    </Text>
                    
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
        height: '60%'
    },
});