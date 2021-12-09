import React from 'react';
import {Text, View} from 'react-native'
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import HomeScreen from '../Screens/HomeScreen';
import TrackingScreen from '../Navigations/BottomTabNavigator1';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator1(){
    return(
        <Drawer.Navigator
            initialRouteName="Home"
            drawerStyle={{
                backgroundColor:'#ffff',
                width:'80%'
            }}
            drawerContentOptions={{
                activeTintColor:"#ff6600",
                inactiveTintColor:"#060606"
            }}
            drawerContent={(props)=>
                <DrawerContentScrollView {...props}>
                    <DrawerItemList {...props}/>
                </DrawerContentScrollView>
            }
        
        >
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    drawerLabel:"Inicio",
                    drawerIcon:({color})=>(
                        <Ionicons name={"ios-home"} size={20} color={color}/>
                    )
                }}
            
            />

            <Drawer.Screen
                name="Tracking"
                component={TrackingScreen}
                options={{
                    drawerLabel:"Tracking",
                    drawerIcon:({color})=>(
                        <Ionicons name={"ios-settings"} size={20} color={color}/>
                    )
                }}
            />

        </Drawer.Navigator>
    )
}