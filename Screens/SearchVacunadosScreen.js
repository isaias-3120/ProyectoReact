import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native'
import {Header} from 'react-native-elements';
import {Picker} from '@react-native-picker/picker';


export default function SearchVacunadosScreen({navigation}) {
    const [Llamada, setLllamada]= useState([]);
    const [wait, setWait]= useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [PaisSelec, setPaisSelec] = useState("");
    const [DatosPais, setDatosPais] = useState([]);
    const [Bandera, setBandera]= useState([]);



    async function fetchFunction() {
        try{
          const response = await fetch(`https://disease.sh/v3/covid-19/countries`);
          const json1 = await response.json();
          setLllamada(json1);
        }
        catch(err) {
          throw err;
        }
    }

    async function fetchFlag(pais) {
        try{
          const response = await fetch(`https://disease.sh/v3/covid-19/countries/${pais}?strict=true`);
          const json1 = await response.json();
          setBandera(json1);
          setWait(true);
        }
        catch(err) {
          throw err;
        }
    }

    async function fetchFunctionPais(pais) {
        try{
          const response = await fetch(`https://disease.sh/v3/covid-19/vaccine/coverage/countries/${pais}?lastdays=3&fullData=true`);
          const json1 = await response.json();
          setDatosPais(json1);
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
                    PaisSelec
                        ?
                        <View style={styles.container2}>
                            <Picker
                                selectedValue={selectedLanguage}
                                style={{ width: 200 }}
                                onValueChange={(itemValue, itemIndex) => {
                                    setSelectedLanguage(itemValue);
                                    fetchFunctionPais(itemValue);
                                    fetchFlag(itemValue);
                                }
                                }

                            >
                                {
                                    Llamada.map((item, index) => {
                                        return <Picker.Item value={item.country} label={item.country} key={index} />
                                    })
                                }
                            </Picker>
                            {
                                wait
                                    ?
                                    <View style={styles.container2}>
                                        <Image source={{ uri: Bandera.countryInfo.flag }}
                                            style={styles.poster} 
                                        />
                                        <Text>Vacunados totales: {DatosPais.timeline[0].total}</Text>
                                        <Text>Poblacion vacunada el dia de hoy: {DatosPais.timeline[0].daily}</Text>
                                    </View>
                                    :
                                    <Text>Cargando... (Porfavor elige otro valor)</Text>
                            }

                        </View>
                        :
                        <View style={styles.container2}>
                            <Picker
                                selectedValue={selectedLanguage}
                                style={{ width: 200 }}
                                onValueChange={(itemValue, itemIndex) => {
                                    setSelectedLanguage(itemValue);
                                    setPaisSelec(itemValue);
                                    fetchFunctionPais(itemValue);
                                }
                                }

                            >
                                {
                                    Llamada.map((item, index) => {
                                        return <Picker.Item value={item.country} label={item.country} key={index} />
                                    })
                                }
                            </Picker>
                            <Text>Seleccion</Text>
                        </View>
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
        borderColor: 'green', 
        borderWidth:1,
    },
});