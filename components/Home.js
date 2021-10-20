import React from 'react';
import { useEffect,useState } from 'react';
import { Button, StyleSheet, Text, View, Alert, StatusBar, ScrollView, PlatformColor, Platform } from 'react-native';
import { HomeNews } from './HomeNews';




export const Home = ({navigation}) => {

    return (
      <View style = {styles.container}>
        <Text style={{fontWeight:'bold',fontSize:30,textAlign:'center'}}>Breaking News</Text>
        <HomeNews country='in' category='' query=''/>
     
        </View>
    );
 


  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:StatusBar.currentHeight-20,
    backgroundColor:'white'
  }
});