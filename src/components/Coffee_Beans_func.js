import React,{useState,useEffect} from 'react'
import { View,TouchableOpacity, Text, StyleSheet,Image} from "react-native"
import Pluss from "../assets/SVGS/plus.svg";
import { useSelector,useDispatch } from 'react-redux';
import LinearGradient from "react-native-linear-gradient";
import { AddCart } from '../redux/slice';
import { cartCounter } from '../redux/slice';
import { useIsFocused } from '@react-navigation/native'
const Coffee_beans_func = ({ item,onPress }) => {
  
  const item_array=useSelector((state=>state.qty1.Cart))
  const [cartData,setCartData]=useState(item_array)
  const dispatch=useDispatch()
  const isFocus=useIsFocused()

  
  const saveToStore=async(val)=>{
    dispatch(AddCart(val))
   }
    
   const addValueToCart=async(obj)=>{
    let updatedCart=[...cartData]
    updatedCart.push(obj)
    setCartData([...updatedCart])
    await saveToStore([...updatedCart])
  }
  
  const updateValueToCart=async(obj,id)=>{
    let updatedCart= [...cartData]
    updatedCart[id]=obj
    setCartData([...updatedCart])
    await saveToStore([...updatedCart])
  }

  useEffect(()=>{
   setCartData(item_array)
  },[isFocus,item_array])


  return (
    
    <TouchableOpacity 
    onPress={onPress}
    style={styles.container}>
     
    <LinearGradient style={{borderRadius:30,paddingBottom:20}} colors={['#141E30', '#243B55']}>

      <Image
        source={{ uri: item.imgUrl1 }}
        style={[styles.image]}
      />
      
      <Text style={[{color:'white',textAlign:'center',fontWeight:'bold',fontSize:20,fontFamily:'arial',marginTop:10}]}>
        {item.titl1}
      </Text>

      <Text style={[{color:'white',textAlign:'center',marginBottom:10, marginTop:5}]}>
        {item.body1}
      </Text>

      <View style={{width:'100%',paddingHorizontal:10,flexDirection:'row',justifyContent:'space-between'}}>

          <View style={{width:'72%'}}>

              <Text 
              style={{color:'white',fontFamily:'arial',fontWeight:'bold'}}
              numberOfLines={1}>
              <Text style={{color:'#D17842'}}>$</Text>
              {item.b_price}
              </Text>

          </View>
            
        <View style={{width:'3%'}}></View>

        <TouchableOpacity
        onPress={()=>{
          const itemIndex=cartData.findIndex((item1)=>item1.id===item.id_b)
          if(item_array[itemIndex]&&itemIndex!==-1&&cartData.length>0){
             updateValueToCart({...cartData[itemIndex],small:cartData[itemIndex].small+1,total_p:cartData[itemIndex].total_p+item.small_p_b},itemIndex)
          }
          else{
            
             addValueToCart({id:item.id_b,name:item.titl1,small:1,medium:0,large:0,img:item.imgUrl1,small_price:item.small_p_b,medium_price:item.medium_p_b,large_price:item.large_p_b,total_p:item.small_p_b})
          }

          dispatch(cartCounter())
        
        }} 
        style={{width:'25%',height:28,borderRadius:9,backgroundColor:'#D17842',alignItems:'center',justifyContent:'center'}}>
        <Pluss/>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  
  </TouchableOpacity>
    
  )}
  const styles = StyleSheet.create({
    container: {
      
    
      borderRadius: 30,
      width: 160,
      minHeight:148,
      borderWidth:5,
      marginTop:30
      
    },
    image: {
        alignSelf:'center',
        borderRadius:30,
        marginTop:10,
        width: 130,
        height: 130,
        
      },
      header: {
        color: "#222",
        fontSize: 28,
        fontWeight: "bold",
        paddingLeft: 20,
        paddingTop: 20
      },
      body: {
        color: "#222",
        fontSize: 18,
        paddingLeft: 20,
        paddingRight: 20
      }
})
  export default Coffee_beans_func