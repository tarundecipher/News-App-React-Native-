import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, Alert, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { BottomChin } from './components/BottomChin';




export default function App() {
  return (
    <NavigationContainer>
      <BottomChin/>
    </NavigationContainer>
   
  );
} 

// c796fd65a31644f8af183a081aed5361