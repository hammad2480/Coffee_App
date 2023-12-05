import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Dimensions, Image, ScrollView,FlatList } from "react-native"
import { useSelector,useDispatch } from 'react-redux'
import { AddCart } from '../redux/slice'
import Bottom from '../navigator/bottom'
import Header from '../navigator/header'
import { useIsFocused } from '@react-navigation/native'
import prices from '../utiles/const/prices'


var x = Dimensions.get('window').width
var y = Dimensions.get('window').height


const Cart = (props) => {

  const item_array=useSelector((state=>state.qty1.Cart))
  const [cartData,setCartData]=useState(item_array)
  const dispatch=useDispatch()
  const isFocus=useIsFocused()

 
  const saveToStore=(val)=>{
    dispatch(AddCart(val))
   }

   const updateValueToCart=async(obj,id)=>{
    let updatedCart= [...cartData]
    updatedCart[id]=obj
    setCartData([...updatedCart])
    await saveToStore([...updatedCart])
  
  
  }


  useEffect(()=>{
console.log("cart useEffect==--->",item_array)
    setCartData(item_array)
    
  },[isFocus,item_array])


  const remove_item=(index)=>{
      let updatedCart=[...cartData]
      updatedCart.splice(index,1) 
      setCartData([...updatedCart])
      saveToStore([...updatedCart])
  }

 

const checkQty=(val)=>{
  return val>0
    }

  const render_func = ({ item, index }) => {
        
    return (

        checkQty(item?.small || item?.medium || item?.large)&&

        <View 
        style={{ width: x - 500, backgroundColor: '#141E30', borderRadius: 30,paddingBottom:20 }}
        >
         
          <View 
          style={{ flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-around', marginVertical: 20, marginRight: 30 }}
          >

            <Image
              style={{ width: 120, height: 120, borderRadius: 20 }}
              source={{uri:item?.img}}
            />

            <View style={{ flexDirection: 'column', alignSelf: 'center' }}>

              <Text 
              style={{ fontWeight: 'bold', fontFamily: 'arial', color: 'white' }}>
              {item?.name}
              </Text>

              <Text 
              style={{ paddingTop: 5, paddingBottom: 20, fontFamily: 'arial' }}>
              With steamed milk
              </Text>

              <View 
              style={{ backgroundColor: 'rgba(255,255,255,0.2)', width: '97%', height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                
                <Text 
                style={{ color: 'white' }}>
                Medium Roasted
                </Text>

              </View>

            </View>


            <TouchableOpacity 
            style={{ width: 20, height: 20 }}
            onPress={async () => {
            const itemIndex = await item_array.findIndex((item1)=>{return item1.id===item.id})
            console.log(itemIndex)
            remove_item(itemIndex)
                }}
                >

              <Image
                style={{ width: '100%', height: '100%' }}
                source={require("../assets/SVGS/full-trash-512.png")}
              />

            </TouchableOpacity>

          </View>



          <View>

            {checkQty(item?.small)&&

            <View 
            style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>

              <View 
              style={{ width: 72, height: 35, backgroundColor: 'rgba(255,255,255,0.2)', marginLeft: 20, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>

                <Text 
                style={{ fontFamily: 'arial', fontWeight: 'bold', fontSize: 13, color: 'white' }}>
                  S
                </Text>

              </View>
              
              <Text 
              style={{ marginLeft: 25, fontFamily: 'arial', fontWeight: 'bold', fontSize: 13, color: 'white' }}>
                <Text style={{ color: 'orange' }}>$</Text>
                {item?.small_price}
                </Text>


              <View 
              style={{ width: 30, marginLeft: 30 }}>
              </View>


              <TouchableOpacity 
               onPress={()=>{
                const itemIndex=cartData.findIndex((item1)=>item1.id===item.id)
                const selectedItem=prices.filter((item1)=>item1.id===item.id)
                updateValueToCart({...cartData[itemIndex],small:cartData[itemIndex].small-1,total_p:cartData[itemIndex].total_p-selectedItem[0].small},itemIndex)
               }}
              style={{ width: 29, height: 29, backgroundColor: 'orange', borderRadius: 5, borderWidth: 1, borderColor: 'orange',alignItems:'center',justifyContent:'center' }}>
              <Text style={{fontFamily:'arial',fontWeight:'bold',fontSize:15,color:'white'}}>-</Text>

                </TouchableOpacity>


              <View 
              style={{ width: 50, height: 30, backgroundColor: 'rgba(255,255,255,0.2)', marginHorizontal: 10, borderRadius: 5, borderWidth: 1, borderColor: 'orange', alignItems: 'center', justifyContent: 'center' }}>
              <Text 
              style={{ fontFamily: 'arial', fontWeight: 'bold', fontSize: 12, color: 'white' }}>{item?.small}</Text>
              </View>
              <TouchableOpacity
              onPress={()=>{
                const itemIndex=cartData.findIndex((item1)=>item1.id===item.id)
                const selectedItem=prices.filter((item1)=>item1.id===item.id)
                updateValueToCart({...cartData[itemIndex],small:cartData[itemIndex].small+1,total_p:cartData[itemIndex].total_p+selectedItem[0].small},itemIndex)
              }} 
              style={{ width: 29, height: 29, backgroundColor: 'orange', borderRadius: 5, borderWidth: 1, borderColor: 'orange',alignItems:'center',justifyContent:'center' }}><Text style={{fontFamily:'arial',fontWeight:'bold',fontSize:15,color:'white'}}>+</Text></TouchableOpacity>

            </View>}
            {checkQty(item?.medium)&&
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 10 }}>
              <View style={{ width: 72, height: 35, backgroundColor: 'rgba(255,255,255,0.2)', marginLeft: 20, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                <Text style={{ fontFamily: 'arial', fontWeight: 'bold', fontSize: 13, color: 'white' }}>M</Text>
              </View>
              <Text style={{ marginLeft: 25, fontFamily: 'arial', fontWeight: 'bold', fontSize: 13, color: 'white' }}><Text style={{ color: 'orange' }}>$</Text>{item?.medium_price}</Text>
              <View style={{ width: 30, marginLeft: 30 }}></View>
              <TouchableOpacity
              onPress={()=>{
                const itemIndex=cartData.findIndex((item1)=>item1.id===item.id)
                const selectedItem=prices.filter((item1)=>item1.id===item.id)
                updateValueToCart({...cartData[itemIndex],medium:cartData[itemIndex].medium-1,total_p:cartData[itemIndex].total_p-selectedItem[0].medium},itemIndex)
              }}
               style={{ width: 29, height: 29, backgroundColor: 'orange', borderRadius: 5, borderWidth: 1, borderColor: 'orange',alignItems:'center',justifyContent:'center' }}><Text style={{fontFamily:'arial',fontWeight:'bold',fontSize:15,color:'white'}}>-</Text></TouchableOpacity>
              <View style={{ width: 50, height: 30, backgroundColor: 'rgba(255,255,255,0.2)', marginHorizontal: 10, borderRadius: 5, borderWidth: 1, borderColor: 'orange', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontFamily: 'arial', fontWeight: 'bold', fontSize: 12, color: 'white' }}>{item?.medium}</Text>
              </View>
              <TouchableOpacity 
              onPress={()=>{
               const itemIndex=cartData.findIndex((item1)=>item1.id===item.id)
                const selectedItem=prices.filter((item1)=>item1.id===item.id)
                updateValueToCart({...cartData[itemIndex],medium:cartData[itemIndex].medium+1,total_p:cartData[itemIndex].total_p+selectedItem[0].medium},itemIndex)
              }}
              style={{ width: 29, height: 29, backgroundColor: 'orange', borderRadius: 5, borderWidth: 1, borderColor: 'orange',alignItems:'center',justifyContent:'center' }}><Text style={{fontFamily:'arial',fontWeight:'bold',fontSize:15,color:'white'}}>+</Text></TouchableOpacity>

            </View>
    }
            {checkQty(item?.large)&&
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ width: 72, height: 35, backgroundColor: 'rgba(255,255,255,0.2)', marginLeft: 20, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                <Text style={{ fontFamily: 'arial', fontWeight: 'bold', fontSize: 13, color: 'white' }}>L</Text>
              </View>

              <Text style={{ marginLeft: 25, fontFamily: 'arial', fontWeight: 'bold', fontSize: 13, color: 'white' }}><Text style={{ color: 'orange' }}>$</Text>{item?.large_price}</Text>
              <View style={{ width: 30, marginLeft: 30 }}></View>
              <TouchableOpacity
              onPress={()=>{
               const itemIndex=cartData.findIndex((item1)=>item1.id===item.id)
                const selectedItem=prices.filter((item1)=>item1.id===item.id)
                updateValueToCart({...cartData[itemIndex],large:cartData[itemIndex].large-1,total_p:cartData[itemIndex].total_p-selectedItem[0].large},itemIndex)

              }} 
              style={{ width: 29, height: 29, backgroundColor: 'orange', borderRadius: 5, borderWidth: 1, b: 'orange',alignItems:'center',justifyContent:'center' }}><Text style={{fontFamily:'arial',fontWeight:'bold',fontSize:15,color:'white'}}>-</Text></TouchableOpacity>
              <View style={{ width: 50, height: 30, backgroundColor: 'rgba(255,255,255,0.2)', marginHorizontal: 10, borderRadius: 5, borderWidth: 1, borderColor: 'orange', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontFamily: 'arial', fontWeight: 'bold', fontSize: 12, color: 'white' }}>{item?.large}</Text>
              </View>
              <TouchableOpacity
              onPress={()=>{
             const itemIndex=cartData.findIndex((item1)=>item1.id===item.id)
                const selectedItem=prices.filter((item1)=>item1.id===item.id)
                updateValueToCart({...cartData[itemIndex],large:cartData[itemIndex].large+1,total_p:cartData[itemIndex].total_p+selectedItem[0].large},itemIndex)
              }} 
              style={{ width: 29, height: 29, backgroundColor: 'orange', borderRadius: 5, borderWidth: 1, borderColor: 'orange' ,alignItems:'center',justifyContent:'center' }}><Text style={{fontFamily:'arial',fontWeight:'bold',fontSize:15,color:'white'}}>+</Text></TouchableOpacity>

            </View>}

           
            
            </View>
            </View>
      )}
      var check
      for(let i=0 ;i<cartData.length;i++){
        if(cartData[i]){
          if(cartData[i].small>0|| cartData[i].medium>0||cartData[i].large>0){
            check=1
          }
          else{
            check=0
          }
        }
      }
      console.log(check)

      var totalPrice=0
      for(let i=0;i<cartData.length;i++){
        totalPrice=totalPrice+cartData[i].total_p
      }

   
  

  return (
    <View style={{ flex: 1,backgroundColor:'black' }}>
      <Header navigation={props.navigation} screen={"Cart"}/>
    <ScrollView style={[{backgroundColor: 'black' }]}>
      <FlatList
      style={{paddingHorizontal:20}}
        // contentContainerStyle={}
        data={cartData}
        renderItem={render_func}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={
          <View style={{ height: 20 }} />
        }
      />

      {checkQty(check)&&

      <View style={{flexDirection:'row',width:'90%',height:60,alignSelf:'center',marginVertical:50,justifyContent:'space-between'}}>
      
      <View style={{width:'35%',height:'100%',alignItems:'center',justifyContent:'space-around'}}>
        <Text style={{fontFamily:'arial'}}>Total Price</Text>
        <Text style={{fontFamily:'arial',fontWeight:'bold',color:'white',fontSize:15}}><Text style={{color:'#D17842'}}>$</Text>{totalPrice}</Text>
      </View>
      
        <TouchableOpacity
        onPress={()=>{
          props.navigation.navigate('Checkout',{total:totalPrice})
        }} 
        style={{width:'50%',height:'100%',backgroundColor:'#D17842',borderRadius:10,alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontFamily:'arial',fontSize:15,fontWeight:'bold',color:'white'}}>Pay</Text>
        </TouchableOpacity>
        
      </View>}
      
      

    </ScrollView>
    <Bottom navigation={props.navigation}/>
    </View>

  )
}

styles = StyleSheet.create({
  row: {
    flexDirection: 'row'
  }
})








export default Cart