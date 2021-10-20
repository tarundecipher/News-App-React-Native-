import React from 'react';
import { Button, StyleSheet, Text, View, Alert, TextInput,ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import { HomeNews } from './HomeNews';




export const Discover = ({ navigation}) => {
  const [index,setIndex] = useState(0);
  const [category,setCategory] = useState('business');
  const [search,setSearch] = useState('');
  const [issearching,setIssearching] = useState(false);

  function changeIndex(val){
    setIndex(val);
    switch(val){
      case 0:
        setCategory('business');
        break;
      case 1:
        setCategory('entertainment');
        break;
      case 2:
        setCategory('health');
        break;
      case 3:
        setCategory('sports');
        break;
      case 4:
        setCategory('technology');
        break;
    }
  }

  

  return (
    <View style = {styles.container}>
      <Text style={{fontWeight:'bold',fontSize:30,textAlign:'left'}}>Discover</Text>
      <Text style={{color:'gray'}}>News that you want specifically</Text>
      <TextInput
        style={styles.input}
        placeholder='Search'
        onSubmitEditing = {(event)=>{setSearch(event.nativeEvent.text); setIssearching(true)}}
        onChangeText = {(text)=>{if(text.length==0){setIssearching(false);}}}
      />
      {
        issearching==false?
      <ScrollView horizontal={true} contentContainerStyle={styles.menu} showsHorizontalScrollIndicator={false}>
        <Text onPress={()=>{changeIndex(0)}} style={index==0?styles.textSelected:styles.text}>Business</Text>
        <Text onPress={()=>{changeIndex(1)}} style={index==1?styles.textSelected:styles.text}>Entertainment</Text>
        <Text onPress={()=>{changeIndex(2)}} style={index==2?styles.textSelected:styles.text}>Health</Text>
        <Text onPress={()=>{changeIndex(3)}} style={index==3?styles.textSelected:styles.text}>Sports</Text>
        <Text onPress={()=>{changeIndex(4)}} style={index==4?styles.textSelected:styles.text}>Technology</Text>
      </ScrollView>:
      <View style={{marginTop:20}}>
      <Text style={styles.textSelected}>Search</Text>
      </View>
      }

      {
      issearching==false?
      <HomeNews country='in' category={category} query=''/>:
      <HomeNews country='in' category='' query={search}/>
      }
   
      </View>
  );
  };
  


  const styles = {
    container: {
      flex: 1,
      paddingTop:80,
      paddingLeft:20,
      backgroundColor:'white'
    },
    input: {
      height: 60,
      marginTop:30,
      marginRight:20,
      borderWidth: 0.25,
      borderRadius:10,
      color:'black',
      fontSize:18,
      paddingLeft:20

    },
    menu:{
      flexGrow:1,
      overflow:'scroll',
      justifyContent:'space-evenly',
      marginTop:20,
      height:80,
    },
    text:{
      fontSize:22,
      paddingRight:20,
      color:"lightgray",
      fontWeight:'bold'
    },
    textSelected:{
      fontSize:22,
      paddingRight:20,
      color:"black",
      fontWeight:'bold'
    }
  };