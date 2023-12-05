import React ,{useState,useEffect} from 'react'
import { View, Text,FlatList,Pressable, StyleSheet, Dimensions, Image,ScrollView,TextInput,TouchableOpacity } from "react-native"
var x=Dimensions.get('window').width
var y=Dimensions.get('window').height
import Svg from "../assets/SVGS/Group 19.svg"
import Svg1 from "../assets/SVGS/drop.svg"
import Svg2 from "../assets/SVGS/star.svg"
import { useSelector,useDispatch } from 'react-redux'
import { cartCounter } from '../redux/slice'
import { addFavirote } from '../redux/slice'
import { rmFavirote } from '../redux/slice'
import { AddCart } from '../redux/slice'
import Bottom from '../navigator/bottom'


function DetailsScreen3({navigation,route}) {
  const my_params=route.params
  console.log(my_params.ind)
  const item_array=useSelector((state=>state.qty1.Cart))
  console.log(item_array)
  const [cartData,setCartData]=useState(item_array)
  const counter=useSelector((state=>state.qty1.cart_counter))
  const favi=useSelector((state=>state.qty1.fav))
  const dispatch=useDispatch()
  const [state,setState]=useState(my_params.sm)
  const [size,setSize]=useState('S')
  const [colr,setColr]=useState('transparent')
  const [colr1,setColr1]=useState('transparent')
  const [colr2,setColr2]=useState('transparent')

  const saveToStore=async(val)=>{
    dispatch(AddCart(val))
   }
    
  
   const addValueToCart=async(obj)=>{
    let updatedCart=[...cartData]
    updatedCart.push(obj)
    setCartData([...updatedCart])
    await saveToStore([...updatedCart])}
  
  const updateValueToCart=async(obj,id)=>{
    let updatedCart= [...cartData]
    updatedCart[id]=obj
    setCartData([...updatedCart])
    await saveToStore([...updatedCart])
  
  
  }
 

    return (
      <View style={{flex:1}}>
      <ScrollView style={styles.container}>
      <Image style={styles.imgStyle}
       source={{uri:my_params.img}}
       />
       <View style={{flexDirection:'row',backgroundColor:'rgba(0,0,0,0)',height:50,bottom:400,justifyContent:'space-around',alignItems:'center'}}>
        <TouchableOpacity 
        onPress={()=>{
          navigation.goBack()
        }}
        style={{backgroundColor:'#141E30',height:'80%',width:'11%',alignItems:'center',justifyContent:'center',borderRadius:15}}>
          <Image source={require("../assets/SVGS/arrow-left.png")}/>        

          </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>{

          if(favi.includes(my_params.name)){
            dispatch(rmFavirote(my_params.name))

          }
          else{
          dispatch(addFavirote(my_params.name))
          }


        }}
        style={{backgroundColor:'#141E30',height:'80%',width:'11%',alignItems:'center',justifyContent:'center',borderRadius:15,marginLeft:200}}>
          <Image source={require("../assets/SVGS/heart.png")}/>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>{navigation.navigate('Cart')}}
        style={{backgroundColor:'#141E30',height:'80%',width:'11%',alignItems:'center',justifyContent:'center',borderRadius:15}}>
          <Text style={{fontFamily:'arial',fontWeight:'bold',color:'white'}}>{counter}</Text>
        </TouchableOpacity>
        
        
       </View>
       <View style={{width:'100%',height:'15%',backgroundColor:'rgba(0,0,0,0.5)',position:'absolute',top:'32.8%',borderTopLeftRadius:40,borderTopRightRadius:40,}}>
        <View style={{flexDirection:'row',height:'50%',alignItems:'center',justifyContent:'space-around'}}>
        <Text style={{fontFamily:'arial',fontWeight:'bold',fontSize:20,color:'white'}}>{my_params.name}</Text>
        <View style={{width:55,height:55,backgroundColor:'#141E30',marginLeft:30,borderRadius:10,alignItems:'center',justifyContent:'center'}}>
          <Svg width={40} height={40}/>  
          <Text style={{fontSize:10,fontWeight:'bold',fontFamily:'arial'}}>Coffee</Text>   
          </View>
        <View style={{width:55,height:55,backgroundColor:'#141E30',marginRight:20,borderRadius:10,alignItems:'center',alignContent:'center'}}>
           <Svg1 width={40} height={40}/>
           <Text style={{fontSize:10,fontWeight:'bold',fontFamily:'arial'}}>Milk</Text> 
        </View>
        
       </View>
       <View style={{width:'32%',position:'absolute',top:'35%',left:'6%'}}>
        <Text style={{fontFamily:'arial'}}>With Steamed milk</Text>
        </View>
        <View style={{flexDirection:'row',height:'50%',justifyContent:'space-around',alignItems:'center'}}>
          <View style={{flexDirection:'row',width:'40%',height:'80%',alignItems:'center'}}>
            <Svg2 width={30} height={30} />
            <Text style={{fontSize:15,fontFamily:'arial',fontWeight:'bold'}}>  4.5</Text>
            <Text style={{fontSize:10,fontFamily:'arial'}}>    (6,879)</Text>
          </View>
          <View style={{width:'36%',marginRight:x-385,height:'80%',borderRadius:10,backgroundColor:'#141E30',alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontWeight:'bold',fontSize:11,fontFamily:'arial'}}>Medium Roasted</Text>
          </View>

        </View>
       </View>
      <View style={[styles.row,{height:y/2,paddingLeft:30,paddingRight:50}]}>
        <View>
             <Text style={styles.heading}>Description</Text>
            <Text style={styles.description}>{my_params.desc}</Text>
          <Text style={styles.heading}>Size</Text>
        
          
          <View  style={[styles.row,{height:'10%',justifyContent:'space-between',paddingHorizontal:30,marginBottom:30}]}>
          
          <TouchableOpacity style={[{borderWidth:1,borderColor:colr,width:'25%',borderRadius:10,justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0,0,40,0.6)'}]}
          onPress={()=>{
            setSize('S')
            setState(my_params.sm)
              setColr('orange')
              setColr1('transparent')
              setColr2('transparent')

            
          }}
          ><Text style={[{fontFamily:'arial',color:'white'}]}>S</Text></TouchableOpacity>
          
          <TouchableOpacity style={[{borderWidth:1,borderColor:colr1,width:'25%',borderRadius:10,justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0,0,40,0.6)'}]}
          onPress={()=>{
              setSize('M')
              setState(my_params.md)
              setColr('transparent')
              setColr1('orange')
              setColr2('transparent')
             
              
            }}>
          <Text style={[{fontFamily:'arial',color:'white'}]}>M</Text></TouchableOpacity>
          
          <TouchableOpacity style={[{borderWidth:1,borderColor:colr2,width:'25%',borderRadius:10,justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0,0,40,0.6)'}]}
          onPress={()=>{
            
             setSize('L')
             setState(my_params.lg)
             setColr('transparent')
             setColr1('transparent')
             setColr2('orange')
            
             }}>
              
              <Text style={[{fontFamily:'arial',color:'white'}]}>L</Text></TouchableOpacity>
          
          
            
          
            

          
          
          </View>
          <View style={[styles.row,{width:'100%',height:'20%',justifyContent:'space-around',alignItems:'center'}]}>
            <View style={[{width:'20%',height:50,alignItems:'center',alignContent:'center'}]}>
              <Text style={{fontSize:12,fontFamily:'arial'}}>Price</Text>
              <View style={styles.row}>
              <Text style={{fontSize:20,color:'#D17842'}}>$
                   </Text>
                   <Text style={{fontSize:20,color:'white',fontFamily:'arial',fontWeight:'bold'}}>{state}
                   </Text>
              </View>
              </View>
            
            <TouchableOpacity style={[{backgroundColor:'#D17842',width:'60%',height:'60%',borderRadius:20,alignItems:'center',justifyContent:'center'}]}
             onPress={async()=>{
              if(size=='S')
                {
                  const itemIndex=cartData.findIndex((item1)=>item1.id===my_params.ID)
                  
                  if(cartData[itemIndex]){
                    
                    await updateValueToCart({...cartData[itemIndex],small:cartData[itemIndex].small+1,total_p:cartData[itemIndex].total_p+my_params.sm},itemIndex)
                  }
                  else{
                    await addValueToCart({id:my_params.ID,name:my_params.name,small:1,medium:0,large:0,img:my_params.img,small_price:my_params.sm,medium_price:my_params.md,large_price:my_params.lg,total_p:my_params.sm})
                  }
                }
                if(size=='M')
                {
                  const itemIndex=cartData.findIndex((item1)=>item1.id===my_params.ID)
                  if(cartData[itemIndex]){
                   
                    await updateValueToCart({...cartData[itemIndex],medium:cartData[itemIndex].medium+1,total_p:cartData[itemIndex].total_p+my_params.md},itemIndex)
                  }
                  else{
                    await addValueToCart({id:my_params.ID,name:my_params.name,small:0,medium:1,large:0,img:my_params.img,small_price:my_params.sm,medium_price:my_params.md,large_price:my_params.lg,total_p:my_params.md})
                  }
                 
                }
                if(size=='L')
                {
                  const itemIndex=cartData.findIndex((item1)=>item1.id===my_params.ID)

                  if(cartData[itemIndex]){
                    // console.log(item_array[my_params.ind])
                    await updateValueToCart({...cartData[itemIndex],large:cartData[itemIndex].large+1,total_p:cartData[itemIndex].total_p+my_params.lg},itemIndex)
                  }
                  else{
                    await addValueToCart({id:my_params.ID,name:my_params.name,small:0,medium:0,large:1,img:my_params.img,small_price:my_params.sm,medium_price:my_params.md,large_price:my_params.lg,total_p:my_params.lg})
                  }
                

                }
                dispatch(cartCounter())
              
             
             
                
              }}>
                <View style={{width:'100%',height:'100%',borderRadius:20,alignItems:'center',justifyContent:'center',backgroundColor:'#D17842'}}>
                <Text style={{fontFamily:'arial',fontWeight:'bold'}}>Add to Cart
                </Text>
                </View>

                 </TouchableOpacity>
               
              
              
               
              
              
            
             
              
           
          </View>
         

        
       
      </View>
      </View>

      </ScrollView>
      <Bottom navigation={navigation}/>
      </View>
    
    );
  }
  export default DetailsScreen3

  const styles=StyleSheet.create({
container:{
  flex:1,
  width:'100%',
  height:'100%',
  backgroundColor:'#141E30',

  
},
imgStyle:{
  width:'100%',
  height:y/2
},
press:{
  color:'orange'
},
row:{
  // flex:1,
  flexDirection:'row',
  width:'100%',
  
  
},
description:{
  lineHeight:20,
  fontFamily:'arial'
   

},
heading:{
  paddingVertical:10,
  fontFamily:'arial',
  color:'white',
  fontWeight:'bold',
  fontSize:15,
  

}


  })