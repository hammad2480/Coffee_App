import React,{useState,useEffect} from 'react';
import { View, Text, Button,FlatList,TouchableOpacity,ScrollView,StyleSheet, Image,Dimensions } from 'react-native';
var x=Dimensions.get('window').width
var y=Dimensions.get('window').height
import Svg from "../assets/SVGS/Group 19.svg"
import Svg1 from "../assets/SVGS/drop.svg"
import Svg2 from "../assets/SVGS/star.svg"
import { useSelector,useDispatch } from 'react-redux';
import quantity from '../utiles/const/favirotes_data';
import { rmFavirote } from '../redux/slice';
import Bottom from '../navigator/bottom';
import Header from '../navigator/header';






const Fav=(props)=>{
  const Favirotes=useSelector((state=>state.qty1.fav))
  const Dispatch=useDispatch()
 
  

      

    const render_func=({item,index})=>{
      if(Favirotes.includes(item?.name)){
        
        return(
            
            
                <View style={{alignItems:'center',justifyContent:'center'}}>
                    <Image
                    style={{width:350,height:400,borderTopLeftRadius:30,borderTopRightRadius:30}}
                    source={{uri:item?.product}}
                    />
                    <View style={{width:350,height:'10%',position:'absolute',bottom:'90%',justifyContent:'center'}}>
                        <TouchableOpacity 
                        onPress={()=>{
                            Dispatch(rmFavirote(item))

                        }}
                        style={{height:'58%',width:'10%',alignSelf:'flex-end',marginRight:10,alignItems:'center',justifyContent:'center',borderRadius:10,backgroundColor:'#141E30'}}>
                            <Image 
                            style={{width:20,height:20}}
                            source={require("../assets/SVGS/heart.png")}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{width:350,height:150,position:'absolute',backgroundColor:'rgba(0,0,0,0.5)',top:'41%',borderTopLeftRadius:30,borderTopRightRadius:30}}>
                        <View style={{flexDirection:'row',width:'100%',height:'40%',marginTop:10,alignItems:'center',justifyContent:'space-around'}}>
                            <Text
                            numberOfLines={2} 
                            style={{color:'white',fontFamily:'arial',fontWeight:'bold',fontSize:25,marginLeft:20}}>{item?.name}</Text>
                            <View style={{flexDirection:'row',width:'45%',height:'100%',alignItems:'center',justifyContent:'space-around'}}>
                                <View style={{width:'40%',height:'100%',backgroundColor:'#141E30',alignItems:'center',justifyContent:'center',borderRadius:10}}>
                                    <Svg width={35} height={35}/>
                                    <Text style={{fontWeight:'bold',fontFamily:'arial'}}>Coffee</Text>
                                </View>
                                <View style={{width:'40%',height:'100%',backgroundColor:'#141E30',alignItems:'center',justifyContent:'center',borderRadius:10}}>
                                <Svg1 width={35} height={35}/>
                                    <Text style={{fontWeight:'bold',fontFamily:'arial'}}>Milk</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{height:'12%',width:'40%',marginLeft:30,bottom:12,alignItems:'center',justifyContent:'center'}}>
                            <Text style={{fontFamily:'arial'}}>With Steamed Milk</Text>
                        </View>
                        <View style={{flexDirection:'row',width:'100%',height:'40%',bottom:8,justifyContent:'space-around',alignItems:'center'}}>
                            <View style={{flexDirection:'row',width:'35%',height:'100%',alignItems:'center'}}>
                                <Svg2 width={25} height={25}/>
                                <Text style={{fontFamily:'arial',fontWeight:'bold',fontSize:15,color:'white',marginLeft:5}}>4.5</Text>
                                <Text style={{marginLeft:10,fontFamily:'arial'}}>(6,879)</Text>
                            </View>
                            <View style={{width:'35%',height:'90%',backgroundColor:'#141E30',borderRadius:10,alignItems:'center',justifyContent:'center'}}>
                                <Text style={{fontFamily:'arial',fontWeight:'700',fontSize:12}}>Medium Roasted</Text>
                            </View>

                        </View>
                    </View>
                    <View style={{width:350,height:220,borderBottomLeftRadius:30,borderBottomRightRadius:30,backgroundColor:'#141E30'}}>
                    <Text style={{marginTop:15,marginLeft:10,fontSize:15,color:'white',fontFamily:'arial',fontWeight:'bold'}}>Description</Text>
                    <Text style={{fontFamily:'arial',lineHeight:23,marginHorizontal:10}}>Arabica beans are by far the most popular type of coffee beans, making up about 60% of the world’s coffee. These tasty beans originated many centuries ago in the highlands of Ethiopia, and may even be the first coffee beans ever consumed!</Text>
                    </View>
                    </View>
                
            
           
            
            
            



        )
      }}

    
    return(
        <View style={{flex:1,backgroundColor:'black'}}>
          <Header navigation={props.navigation} screen={"Favorites"}/>
               

            
            
        <FlatList
        
        data={quantity}
        renderItem={render_func}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={
          <View style={{ height: 20 }} />
        }
      />
      <Bottom navigation={props.navigation}/>
      </View>
        
    )
 }
export default Fav