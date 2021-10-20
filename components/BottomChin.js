import React from 'react';
import { useEffect,useState } from 'react';
import { Button, StyleSheet, Text, View,Image } from 'react-native';
import { Home } from './Home';
import { Discover } from './Discover';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

export const BottomChin = () => {

    return (
        <Tab.Navigator barStyle={{backgroundColor:'white'}}>
            <Tab.Screen name='Home' component = {Home} options={{
          tabBarLabel: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={40} style={{position:'absolute' ,marginRight:-30}}/>
          ),
        }}/>
            <Tab.Screen name='Search' component={Discover} options={{
          tabBarLabel: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="select-search" color={color} size={40} style={{position:'absolute' ,marginRight:-30}} />
          ),
        }}/> 
        </Tab.Navigator>
    );
 


  
};

