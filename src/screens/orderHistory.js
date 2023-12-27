import React ,{useState,useEffect} from 'react'
import { View, Text,FlatList, StyleSheet, Dimensions, Image,ScrollView,TextInput, TouchableOpacity, Button } from "react-native"
import Header from '../navigator/header'
import Bottom from '../navigator/bottom'
import { OrderHistory } from '../redux/slice'
import { useSelector,useDispatch } from 'react-redux'
var x = Dimensions.get('window').width
var y = Dimensions.get('window').height

const OrderHis=(props)=>{

    const data=useSelector((state)=>state.qty1.OrderH)
    console.log(data,"........................>>>>>>OH")
    const my_params=props.route.params
   
    const checkQty=(val)=>{
        return val>0
          }

          const render_func = ({ item, index }) => {
        
            return (
        
                checkQty(item?.small || item?.medium || item?.large)&&
        
                <View 
                style={{ width:'100%', backgroundColor: '#21262E', borderRadius: 30,paddingBottom:20,paddingHorizontal:'2%' }}
                >
                 
                  <View 
                  style={{ flexDirection: 'row', alignItems: 'flex-start', marginVertical: 20 }}
                  >
        
                    <Image
                      style={{ width: 50, height: 50, borderRadius: 10,marginLeft:15 }}
                      source={{uri:item?.img}}
                    />
        
                    <View style={{marginLeft:15}}>
        
                      <Text 
                      style={{ fontWeight: 'bold', fontFamily: 'arial', color: 'white' }}>
                      {item?.name}
                      </Text>
        
                      <Text 
                      style={{ paddingTop: 5, fontFamily: 'arial',color:'rgba(174, 174, 174, 1)' }}>
                      With steamed milk
                      </Text>
        
                    </View>
                    <View style={{alignItems:'center',justifyContent:'center',marginLeft:70}}>
                    <Text style={{fontFamily:'arial',fontWeight:'bold',color:'white',fontSize:25}}><Text style={{color:'orange'}}>$</Text>{item?.small*item?.small_price+item?.medium*item?.medium_price+item?.large*item?.large_price}</Text>
                    </View>

        
                  </View>
        
        
        
                  <View>
        
                    {checkQty(item?.small)&&
        
                    <View 
                    style={{ flexDirection: 'row', alignItems: 'center',justifyContent:'space-between' }}>
                      <View style={{flexDirection:'row',marginBottom:10,alignItems:'center'}}>
                      <View 
                      style={{ width: 40, height: 35, backgroundColor: 'rgba(255,255,255,0.2)', marginLeft: 15,marginRight:2, alignItems: 'center', justifyContent: 'center',borderTopLeftRadius:10,borderBottomLeftRadius:10 }}>
        
                        <Text 
                        style={{ fontFamily: 'arial', fontWeight: 'bold', fontSize: 9, color: 'white' }}>
                          {item?.smallSize}
                        </Text>
        
                      </View>

                      <View
                       
                      style={{ width: 60, height: 35, backgroundColor:'rgba(255,255,255,0.2)',borderTopRightRadius:10,borderBottomRightRadius:10,alignItems:'center',justifyContent:'center' }}>
                      <Text style={{fontFamily: 'arial', fontWeight: 'bold', fontSize: 13, color: 'white' }}><Text style={{ color: 'orange' }}>$</Text>{item?.small_price}</Text>
        
                        </View>
                        </View>

        
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                      <View 
                      style={{marginRight:100, width: 50, height: 30, marginHorizontal: 10, alignItems: 'center', justifyContent: 'center' }}>
                      <Text 
                      style={{ fontFamily: 'arial', fontWeight: 'bold', fontSize: 12, color: 'white' }}><Text style={{color:'orange'}}>X</Text>{item?.small}</Text>
                      </View>
                      <View
                       
                      style={{marginRight:20, width: 29, height: 29, backgroundColor: 'transparent',alignItems:'center',justifyContent:'center' }}><Text style={{color:'orange',fontFamily:'arial',fontWeight:'bold',fontSize:15}}>
                        {item?.small_price*item?.small}
                        </Text>
                      </View>
                      </View>
        
                    </View>}
                    {checkQty(item?.medium)&&
                    <View 
                    style={{ flexDirection: 'row', alignItems: 'center',justifyContent:'space-between' }}>
                      <View style={{flexDirection:'row',marginBottom:10}}>
                      <View 
                      style={{ width: 40, height: 35, backgroundColor: 'rgba(255,255,255,0.2)', marginLeft: 15,marginRight:2, alignItems: 'center', justifyContent: 'center',borderTopLeftRadius:10,borderBottomLeftRadius:10 }}>
        
                        <Text 
                        style={{ fontFamily: 'arial', fontWeight: 'bold', fontSize: 9, color: 'white' }}>
                          {item?.mediumSize}
                        </Text>
        
                      </View>

                      <View
                       
                      style={{ width: 60, height: 35, backgroundColor:'rgba(255,255,255,0.2)',borderTopRightRadius:10,borderBottomRightRadius:10,alignItems:'center',justifyContent:'center' }}>
                      <Text style={{fontFamily: 'arial', fontWeight: 'bold', fontSize: 13, color: 'white' }}><Text style={{ color: 'orange' }}>$</Text>{item?.medium_price}</Text>
        
                        </View>
                        </View>

        
                    <View style={{flexDirection:'row',}}>
                      <View 
                      style={{marginRight:100, width: 50, height: 30, marginHorizontal: 10, alignItems: 'center', justifyContent: 'center' }}>
                      <Text 
                      style={{ fontFamily: 'arial', fontWeight: 'bold', fontSize: 12, color: 'white' }}><Text style={{color:'orange'}}>X</Text>{item?.medium}</Text>
                      </View>
                      <View
                       
                      style={{marginRight:20, width: 29, height: 29, backgroundColor: 'transparent',alignItems:'center',justifyContent:'center' }}><Text style={{color:'orange',fontFamily:'arial',fontWeight:'bold',fontSize:15}}>
                        {item?.medium_price*item?.medium}
                        </Text>
                      </View>
                      </View>
        
                    </View>
            }
                    {checkQty(item?.large)&&
                    <View 
                    style={{ flexDirection: 'row', alignItems: 'center',justifyContent:'space-between' }}>
                      <View style={{flexDirection:'row'}}>
                      <View 
                      style={{ width: 40, height: 35, backgroundColor: 'rgba(255,255,255,0.2)', marginLeft: 15,marginRight:2, alignItems: 'center', justifyContent: 'center',borderTopLeftRadius:10,borderBottomLeftRadius:10 }}>
        
                        <Text 
                        style={{ fontFamily: 'arial', fontWeight: 'bold', fontSize: 9, color: 'white' }}>
                          {item?.largeSize}
                        </Text>
        
                      </View>

                      <View
                       
                      style={{ width: 60, height: 35, backgroundColor:'rgba(255,255,255,0.2)',borderTopRightRadius:10,borderBottomRightRadius:10,alignItems:'center',justifyContent:'center' }}>
                      <Text style={{fontFamily: 'arial', fontWeight: 'bold', fontSize: 13, color: 'white' }}><Text style={{ color: 'orange' }}>$</Text>{item?.large_price}</Text>
        
                        </View>
                        </View>

        
                    <View style={{flexDirection:'row',}}>
                      <View 
                      style={{marginRight:100, width: 50, height: 30, marginHorizontal: 10, alignItems: 'center', justifyContent: 'center' }}>
                      <Text 
                      style={{ fontFamily: 'arial', fontWeight: 'bold', fontSize: 12, color: 'white' }}><Text style={{color:'orange'}}>X</Text>{item?.large}</Text>
                      </View>
                      <View
                       
                       style={{marginRight:20, width: 29, height: 29, backgroundColor: 'transparent',alignItems:'center',justifyContent:'center' }}><Text style={{color:'orange',fontFamily:'arial',fontWeight:'bold',fontSize:15}}>
                        {item?.large_price*item?.large}
                        </Text>
                      </View>
                      </View>
        
                    </View>}
        
                   
                    
                    </View>
                    </View>
              )}

              var check
      for(let i=0 ;i<data.length;i++){
        if(data[i]){
          if(data[i].small>0|| data[i].medium>0||data[i].large>0){
            check=1
          }
          else{
            check=0
          }
        }
      }
               var totalPrice=0
              for(let i=0;i<data.length;i++){
                totalPrice=totalPrice+(data[i].small*data[i].small_price+data[i].medium*data[i].medium_price
                +data[i].large*data[i].large_price)
              }

    return(
        <View style={{ flex: 1,backgroundColor:'#0C0F14' }}>
            <Header navigation={props.navigation} screen={"Order History"}/>
            <ScrollView>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <View>
                       
                    </View>
                    {checkQty(check)&&
                    <View style={{alignItems:'center',alignItems:'flex-end',marginRight:40,marginVertical:20}}>
                        <Text style={{fontFamily:'arial',color:'white',fontWeight:'bold',fontSize:15}}>Total Amount</Text>
                    <Text style={{fontFamily:'arial',color:'orange',fontSize:15}}>${totalPrice}</Text>
                    </View>}
                </View>
                
                <FlatList
                contentContainerStyle={{alignSelf:'center',paddingBottom:20}}
                data={data}
                renderItem={render_func}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={<View style={{height:20}}/>}

                
                />
            
            </ScrollView>
            <Bottom navigation={props.navigation} screen={"oh"}/>

        </View>
    )
}
export default OrderHis