import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Dimensions, Image, ScrollView, TextInput, FlatList } from "react-native"
import { OrderHistory } from '../redux/slice'
import { AddCart } from '../redux/slice'
import { useSelector,useDispatch } from 'react-redux'

const My_Checkout=(props)=>{
    const my_params=props.route.params
    const orderData=useSelector((state)=>state.qty1.Cart)
    const [cartData,setCartData]=useState(orderData)
    const OH=useSelector((state)=>state.qty1.OrderH)
    const dispatch=useDispatch()
    const currentDateAndTime = new Date();

    const saveToStore=(val)=>{
        dispatch(AddCart(val))
       }

       const remove_item=async(index)=>{
        let updatedCart=[...cartData]
        updatedCart.splice(index,1) 
        saveToStore([...updatedCart])
    }

    return(
        <View style={{flex:1,backgroundColor:'black',paddingTop:20}}>
            <View style={[styles.row,{width:'100%',height:'5%',backgroundColor:'black',alignItems:'center',justifyContent:'space-between',paddingHorizontal:30}]}>
            <TouchableOpacity 
        onPress={()=>{
          props.navigation.goBack()
        }}
        style={{backgroundColor:'#0C0F14',height:'80%',width:'9%',alignItems:'center',justifyContent:'center',borderRadius:10}}>
          <Image source={require("../assets/SVGS/arrow-left.png")}/>        
            </TouchableOpacity >
            <Text style={[styles.text,{color:'white',fontWeight:'bold',fontSize:15}]}>Payment</Text>
            <View style={{width:'15%',height:'1%'}}></View>

              
            </View>
            
            <View style={[{width:350,height:241,backgroundColor:'black',alignSelf:'center',padding:10}]}>
                <View style={{width:'100%',height:'22%',backgroundColor:'black',justifyContent:'center'}}>
                    <Text style={[styles.text,{marginLeft:10,fontWeight:'bold'}]} >Credit Card</Text>
                </View>
                <View style={{width:'100%',height:'78%',backgroundColor:'#262B33',borderRadius:15}}>
                    <View style={[styles.row,{width:'100%',height:'30%',alignItems:'center',justifyContent:'space-between'}]}>
                        <Image 
                        style={{marginLeft:10}}
                        source={require("../assets/SVGS/card_visa.png")}/>
                        <Image
                        style={{marginRight:10}} 
                        source={require("../assets/SVGS/card_sim.png")}/>
                    </View>
                    <View style={{width:'100%',height:'40%',alignItems:'center',justifyContent:'center'}}>
                        <Text style={[styles.text,{fontWeight:'bold',color:'white'}]}>3  8  9  7     8  9  2  3     6  7  4  5     4  6  3  8</Text>
                    </View>
                    <View style={[styles.row,{width:'100%',height:'30%',justifyContent:'space-between',alignItems:'center'}]}>
                        <View style={{justifyContent:'space-around'}}>
                            <Text style={{fontFamily:'arial',marginLeft:10,fontSize:10}}>Card Holder Name</Text>
                            <Text style={[styles.text,{fontWeight:'bold',marginLeft:10,fontSize:17}]}>Robert Evans</Text>
                        </View>
                        <View style={{justifyContent:'space-around'}}>
                            <Text style={{fontFamily:'arial',marginRight:10,fontSize:10}}>Expiry Date</Text>
                            <Text style={[styles.text,{fontWeight:'bold',marginRight:10,fontSize:17}]}>02/30</Text>
                        </View>
                    </View>
                </View>
                <View style={[styles.row,{height:'20%',width:'100%',alignSelf:'center',backgroundColor:'#262B33',borderRadius:20,marginTop:30,alignItems:'center',justifyContent:'space-between'}]}>
                    <View style={[styles.row,{justifyContent:'space-between',alignItems:'center',width:'25%',height:'100%',marginLeft:15}]}>
                        <Image source={require("../assets/SVGS/wallet.png")}/>
                        <Text style={[styles.text,{fontWeight:'bold'}]}>Wallet</Text>

                    </View>
                    <Text style={[styles.text,{marginRight:15}]}>$ 100.50</Text>
                </View>
                <View style={[styles.row,{height:'20%',width:'100%',alignSelf:'center',backgroundColor:'#262B33',borderRadius:20,marginTop:10,alignItems:'center',justifyContent:'flex-start'}]}>
                    <View style={[styles.row,{justifyContent:'space-between',alignItems:'center',width:'35%',height:'100%',marginLeft:15}]}>
                        <Image source={require("../assets/SVGS/Google.png")}/>
                        <Text style={[styles.text,{fontWeight:'bold'}]}>Google Pay</Text>

                    </View>

                </View>
                <View style={[styles.row,{height:'20%',width:'100%',alignSelf:'center',backgroundColor:'#262B33',borderRadius:20,marginTop:10,alignItems:'center',justifyContent:'flex-start'}]}>
                    <View style={[styles.row,{justifyContent:'space-between',alignItems:'center',width:'30%',height:'100%',marginLeft:15}]}>
                        <Image source={require("../assets/SVGS/apple.png")}/>
                        <Text style={[styles.text,{fontWeight:'bold'}]}>Apple Pay</Text>

                    </View>

                </View>
                <View style={[styles.row,{height:'20%',width:'100%',alignSelf:'center',backgroundColor:'#262B33',borderRadius:20,marginTop:10,alignItems:'center',justifyContent:'flex-start'}]}>
                    <View style={[styles.row,{justifyContent:'space-between',alignItems:'center',width:'37%',height:'100%',marginLeft:15}]}>
                        <Image source={require("../assets/SVGS/amazon.png")}/>
                        <Text style={[styles.text,{fontWeight:'bold'}]}>Amazon Pay</Text>

                    </View>

                </View>
                <View style={{backgroundColor:'black',width:'100%',height:'130%',justifyContent:'flex-end'}}>
                    <View style={[styles.row,{width:'100%',height:'25%',justifyContent:'space-between',alignItems:'center'}]}>
                        <View style={{width:'30%',height:'100%',justifyContent:'center',marginBottom:'30%'}}>
                            <Text style={{fontFamily:'arial'}}>price</Text>
                            <Text style={[styles.text,{fontWeight:'bold',fontSize:20}]}><Text style={{color:'#D17842'}}>$</Text>{my_params.total}</Text>
                        </View>
                        <TouchableOpacity
                        onPress={async()=>{
                            let newArray=[]
                            // let emptyArray=[]
                            for(let i=0;i<orderData.length;i++)
                            {
                                
                                
                                newArray.push(orderData[i])

                                
                                
                                
                            }
                            dispatch(OrderHistory(newArray))
                            dispatch(AddCart([]))
                            console.log(OH[0],"..........>>>>>>.")
                            props.navigation.navigate('Main')
                            
                            

                        }}
                        
                        
                        style={{width:'50%',height:'90%',backgroundColor:'#D17842',borderRadius:20,alignItems:'center',justifyContent:'center',marginBottom:'30%'}}>
                            <Text style={[styles.text,{fontWeight:'bold'}]}>Pay from Card</Text>
                        </TouchableOpacity>

                    </View>
                </View>
               
            </View>

        </View>
    )

}
const styles=StyleSheet.create({
    row:{
        flexDirection:'row'
    },
    text:{
        fontFamily:'arial',
        color:'white'
        
    }
})
export default My_Checkout
