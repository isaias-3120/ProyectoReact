import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchCasosScreen from '../Screens/SearchCasosScreen';
import SearchVacunadosScreen from '../Screens/SearchVacunadosScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Constants from 'expo-constants';

const Tab =  createMaterialTopTabNavigator();

export default function SearchTop(){
    return(
        <Tab.Navigator
            initialRouteName="Settings"
            tabBarOptions={{
                activeTintColor:"#ff6600",
                inactiveTintColor:"#060606",
                showIcon:true,
                showLabel:true,
                labelStyle:{
                    fontSize:11
                },
                style:{
                    paddingTop:Constants.statusBarHeight,
                    backgroundColor:"#f3f3f1"
                }

            }}
        > 
           
           <Tab.Screen
                name="Casos"
                component={SearchCasosScreen}
                options={{
                    tabBarLabel:"Casos",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"nuclear"} size={20} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name="Vacunados"
                component={SearchVacunadosScreen}
                options={{
                    tabBarLabel:"Vacunados",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"body"} size={20} color={color}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}