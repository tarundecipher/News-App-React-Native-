import React from 'react';
import { useEffect,useState } from 'react';
import { Button, StyleSheet, Text, View, Alert, SafeAreaView, Image, TouchableHighlightBase, Linking, TouchableHighlight, TouchableOpacity } from 'react-native';

const handleClick = (url)=>{
  Linking.canOpenURL(url).then(supported=>{
    if(supported){
      Linking.openURL(url);
    }
    else{
      console.log('Dont know how to open url')
    }
  });
}

export const NewsComponent = (props) => {
    return (
      <TouchableOpacity onPress={()=>{handleClick(props.article.url)}}>
      <View style={styles.container}>
      <Image style={{width:100,height:100,borderRadius:10}} source={{uri:props.article.urlToImage}}/>
      <View style={styles.textContainer}>
      <Text style={{fontWeight:"bold",fontSize:16,alignItems:"center",textAlign:'left'}}>{props.article.title}</Text>
      <Text>{getHours(props.article.publishedAt)}</Text>
      </View>
      </View>
      </TouchableOpacity>
     
    );
  }

  const getHours = (date) => {
    date =  date.split("T");
   date[1] = date[1].slice(0,date[1].length-1);
  
   date = date[0]+" "+date[1]
 
   return date
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      padding:20,
      flexDirection:'row'
    },
    textContainer:{
      flex: 1,
      alignItems: "center",
      paddingLeft:20,
      justifyContent:"center"
    }
});