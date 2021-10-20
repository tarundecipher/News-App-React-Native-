import React from 'react';
import { useEffect,useState } from 'react';
import { ActivityIndicator, Text, View, Alert, SafeAreaView, ScrollView, FlatList } from 'react-native';
import { NewsComponent } from './NewsComponent';

const getNews = async (country,category,page,query)=>{
    try{
     url = "http://newsapi.org/v2/top-headlines?country=";
     url+= country;
     if(category!=''){
       url+='&category='+category;
     }
     if(query!=''){
      url+='&q='+query;
    }
     if(page!=''){
       url+='&page='+ page.toString();
     }
  
     url+= "&apiKey=2b3e79fec9644215831d27eaa21a78ff";
     console.log(url);
     let result = await fetch(url)
     result  = await result.json();
     return result;
    }
    catch{
         console.log('unable to fetch')
    }
}

const renderItem = (element) => {
  return <NewsComponent article={element.item}/>;
}

export const HomeNews = (props) => {

    const [news,setNews] = useState([]);
    const [loading,setLoading] = useState(false);
    const [page,setPage] = useState(0);

    useEffect(()=>{setLoading(true); getNews(props.country,props.category,'',props.query).then((result)=>{
        if(result.articles!=undefined){
        setNews(result.articles);
        setLoading(false);
        }
    })},[props.category,props.country]);

    const loadMore = () => {
      setPage(page+1);
      getNews(props.country,props.category,page.toString(),props.query).then((result)=>{
        setNews(news => [...news, ...result.articles]);
    });
    }
   
    return (
  
        loading==false?
        (news.length>0?
        <FlatList data = {news}  renderItem={renderItem} onEndReached={loadMore}/>:
        <Text>No Results</Text>):(
        <View style={{flex:1,justifyContent:'center'}}>
        <ActivityIndicator color="#0000ff" size='large'/>
        </View>)
  
    );
    

  };

const styles = {
  text:{
    fontSize:22,
    paddingRight:18,
    color:"lightgray",
    fontWeight:'bold'
  }
}