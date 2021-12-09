import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import GlobalCasosScreen from './GlobalTop';
import MexicoCasosScreen from './MexicoTop';
import SearchCasosScreen from './SearchTop';


const Tab = createBottomTabNavigator();

export default function BottomTabNavigator1(){
    return(
        <Tab.Navigator
            initialRouteName="Global"
            tabBarOptions={{
                activeTintColor:"#ff6600",
                inactiveTintColor:"#060606",
                showLabel:true,
                labelStyle:{
                    fontSize:12
                },
                style:{
                    paddingBottom:5,
                    backgroundColor:"#f3f3f1"
                }

            }}
        > 
           
            <Tab.Screen
                name="Global"
                component={GlobalCasosScreen}
                options={{
                    tabBarLabel:"Global",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"globe"} size={20} color={color}/>
                    )
                }}
            
            />
            <Tab.Screen
                name="Mexico"
                component={MexicoCasosScreen}
                options={{
                    tabBarLabel:"Mexico",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"flag"} size={20} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchCasosScreen}
                options={{
                    tabBarLabel:"Otro pais",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"search"} size={20} color={color}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}