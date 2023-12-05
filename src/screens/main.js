import React ,{useState,useEffect} from 'react'
import { View, Text,FlatList, StyleSheet, Dimensions, Image,ScrollView,TextInput, TouchableOpacity, Button } from "react-native"
import Coffee from '../utiles/const/Coffee';
import Coffee_func from '../components/Coffee_func';
import Coffee_beans_func from '../components/Coffee_Beans_func';
import SVGImg from '../assets/SVGS/search.svg';
import Bottom from '../navigator/bottom';
import Header from '../navigator/header';











const Main = (props) => {


  
  return (
    <View style={{flex:1,backgroundColor:'black'}}>
      <Header navigation={props.navigation} screen={""}/>
      
  <ScrollView style={{backgroundColor:'black'}}>
  
        <Text style={styles.Heading}>
    Find The Best Coffee For You
    </Text>
    <View style={styles.searchSection}>
    <SVGImg style={styles.search} width={25} height={25} />  
   
  <TextInput 
  style={styles.text_input}
  
  placeholder="Find Your Coffee"
  ></TextInput>
 
  </View>
 
    <View style={{flex:1}}>
    <FlatList
  data={Coffee}
  contentContainerStyle={{paddingHorizontal:50,marginTop:25}}
  horizontal
  ItemSeparatorComponent={<View style={{width:50}}/>}
  showsHorizontalScrollIndicator={false}
  renderItem={({item,index})=>{
    return(
      <>
      <Text style={{fontFamily:'arial',fontWeight:'700'}}>{item.title}</Text>
      <View style={{width:40}}/>
      <Text style={{fontFamily:'arial',fontWeight:'700'}}>{item.titl1}</Text>
      </>
    )
  }}/>
    
       
      
    
    <FlatList
    contentContainerStyle={{paddingHorizontal:50,}}
    
        data={Coffee}
        horizontal
        renderItem={({item,index})=>{
            return(
                <Coffee_func item={item} index={index} onPress={()=>props.navigation.navigate('Details',{img:item.imgUrl,name:item.title,ind:index,ID:item.id,desc:item.description,sm:item.small_p,md:item.medium_p,lg:item.large_p,Total:item.total})}/>
            )
          
        }}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={
          <View style={{width:10}} />
        }
      />

   
    
  
      
    </View>
    
    <View style={{flex:1,marginTop:30}}>
    <Text style={[styles.Heading,{fontSize:20,marginTop:0}]}>Coffee Beans</Text>
    <FlatList
        contentContainerStyle={{paddingHorizontal:50}}
        data={Coffee}
        horizontal
        renderItem={({item,index,navigation})=>{
          return(
          <Coffee_beans_func item={item} index={index} onPress={()=>props.navigation.navigate("Details3",{name:item.titl1,ID:item.id_b,img:item.imgUrl1,ind:index,desc:item.description_b,sm:item.small_p_b,md:item.medium_p_b,lg:item.large_p_b,Total:item.total})}/>
          )
  
        }}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={
          <View style={{width:10}} />
        }
      />
     
    </View>
    

    </ScrollView>
    <Bottom navigation={props.navigation}/>
    
    
    </View>
  )
}


export default Main

const styles = StyleSheet.create({
  searchSection: {
    backgroundColor:'#141E30',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'flex-start',
    borderRadius:20,
    width:320,
   marginLeft:40,
   marginTop:25

},

  Heading:{fontWeight:'bold',
  color:'white',
  fontSize:30,
  textAlign:"left",
  marginRight:120,
  marginStart:50,
  marginTop:20,
  fontFamily:'arial',
  
},
text_input:{
  backgroundColor:'#141E30',
  width:220,
  marginLeft:20

},

 search:{

  

 },
  row:{
    flex:1,
    flexDirection:'row'
  },
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},

})
