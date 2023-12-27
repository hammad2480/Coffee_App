import React ,{useState,useEffect} from 'react'
import { View, Text,FlatList, StyleSheet, Dimensions, Image,ScrollView,TextInput, TouchableOpacity, Button } from "react-native"
import Coffee from '../utiles/const/Coffee';
import Coffee_func from '../components/Coffee_func';
import Coffee_beans_func from '../components/Coffee_Beans_func';
import SVGImg from '../assets/SVGS/search.svg';
import Bottom from '../navigator/bottom';
import Header from '../navigator/header';
import quantity from '../utiles/const/favirotes_data';











const Main = (props) => {
  const [color,setColor]=useState("white")
  const [dot,setDot]=useState("Cappuccino")


  
  return (
    <View style={{flex:1,backgroundColor:'#0C0F14'}}>
      <Header navigation={props.navigation} screen={""}/>
      
  <ScrollView style={{backgroundColor:'#0C0F14'}}>
  
        <Text style={styles.Heading}>
    Find The Best Coffee For You
    </Text>
    <View style={styles.searchSection}>
      <View style={{marginLeft:'5%'}}>
    <SVGImg  width={25} height={25} /> 
    </View> 
   
  <TextInput 
  style={styles.text_input}
  
  placeholder="Find Your Coffee"
  ></TextInput>
 
  </View>
 
    <View style={{flex:1}}>
    <FlatList
  data={quantity}
  contentContainerStyle={{paddingHorizontal:'5.5%',marginTop:'6%',height:'60%',justifyContent:'center'}}
  horizontal
  ItemSeparatorComponent={<View style={{width:50}}/>}
  showsHorizontalScrollIndicator={false}
  renderItem={({item,index})=>{
    
      const isPressed = item.name === dot;
  
      const pressedItem = () => {
        setDot(item.name);
      }
    
    
    return(
      <>
      
      <TouchableOpacity style={{}} onPress={pressedItem}>
      <Text style={{fontFamily:'Poppins-SemiBold',fontSize:14,color:isPressed?'orange':'rgba(82, 85, 90, 1)'}}>{item.name}</Text>
      <Text style={{color:'white',fontSize:50,alignSelf:'center',top:'15%'}}>{isPressed?<View style={{width:10,height:10,backgroundColor:'orange',borderRadius:10,alignSelf:'center'}}></View>:""}</Text>
      </TouchableOpacity>
      </>
    )
  }}/>
    
       
      
    
    <FlatList
    contentContainerStyle={{paddingHorizontal:'5.5%',bottom:'5%'}}
    
        data={Coffee}
        horizontal
        renderItem={({item,index})=>{
            return(
                <Coffee_func item={item} index={index} onPress={()=>props.navigation.navigate('Details',{img:item.imgUrl,name:item.title,ind:index,ID:item.id,desc:item.description,sm:item.small_p,md:item.medium_p,lg:item.large_p,Total:item.total,s_sm:item.size_C_S,s_md:item.size_C_M,s_lg:item.size_C_L})}/>
            )
          
        }}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={
          <View style={{width:20}} />
        }
      />

   
    
  
      
    </View>
    
    <View style={{flex:1,marginTop:30}}>
    <Text style={[styles.Heading,{fontSize:20,bottom:'5%'}]}>Coffee Beans</Text>
    <FlatList
        contentContainerStyle={{paddingHorizontal:'5.5%',bottom:'10%'}}
        data={Coffee}
        horizontal
        renderItem={({item,index,navigation})=>{
          return(
          <Coffee_beans_func item={item} index={index} onPress={()=>props.navigation.navigate("Details3",{name:item.titl1,ID:item.id_b,img:item.imgUrl1,ind:index,desc:item.description_b,sm:item.small_p_b,md:item.medium_p_b,lg:item.large_p_b,Total:item.total,s_sm:item.size_B_S,s_md:item.size_B_M,s_lg:item.size_B_L})}/>
          )
  
        }}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={
          <View style={{width:20}} />
        }
      />
     
    </View>
    

    </ScrollView>
    <Bottom navigation={props.navigation} screen={"home"}/>
    
    
    </View>
  )
}


export default Main

const styles = StyleSheet.create({
  searchSection: {
    backgroundColor:'#21262E',
    flexDirection: 'row',
    
    alignItems: 'center',
    alignSelf:'center',
    borderRadius:20,
    width:'90%',
    
  
   marginTop:'6%'

},

  Heading:{
  color:'white',
  fontSize:28,
  textAlign:"left",
  marginRight:120,
  marginStart:'5.5%',
  // marginTop:20,
  fontFamily:'Poppins-SemiBold',
  lineHeight:40
  
  
},
text_input:{
  backgroundColor:'#21262E',
  width:220,
  marginLeft:'5%'

},

 search:{

  

 },
  row:{
    flex:1,
    flexDirection:'row'
  },
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},

})
