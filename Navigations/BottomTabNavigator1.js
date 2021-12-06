import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingsScreen from '../Screens/SettingsScreen';
import AboutScreen from '../Screens/AboutScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeScreen from '../Navigations/StackNavigation1';
import GitHubScreen from '../Screens/GitHubScreen';
import ProgramarScreen from '../Navigations/StackNavigation2';
import Contacto1Screen from './TopTapNavigator1';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator1(){
    return(
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor:"#ff0000",
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
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel:"Inicio",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-home"} size={20} color={color}/>
                    )
                }}
            
            />
            <Tab.Screen
                name="GitHub"
                component={GitHubScreen}
                options={{
                    tabBarLabel:"GitHub",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"logo-github"} size={20} color={color}/>
                    )
                }}
            
            />
            <Tab.Screen
                name="Programar"
                component={ProgramarScreen}
                options={{
                    tabBarLabel:"Programar",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"logo-electron"} size={20} color={color}/>
                    )
                }}
            
            />
            <Tab.Screen
                name="Contacto"
                component={Contacto1Screen}
                options={{
                    tabBarLabel:"Contacto",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"person-circle-outline"} size={20} color={color}/>
                    )
                }}
            
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarLabel:"Configuración",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-settings"} size={20} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name="About"
                component={AboutScreen}
                options={{
                    tabBarLabel:"Acerca de",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-help-circle"} size={20} color={color}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}