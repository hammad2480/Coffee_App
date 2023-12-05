import React from 'react'
import { View,Image,TouchableOpacity} from "react-native"

const Bottom=({navigation})=>{

    return(
<View style={{backgroundColor:'black',flexDirection:'row',justifyContent:'space-around',paddingTop:15,paddingBottom:10,alignItems:'center'}}>  
    
    <TouchableOpacity
    onPress={()=>{
    navigation.navigate('Main')
    }}
    >
    <Image source={require("../assets/SVGS/home.png")}/>
    
    </TouchableOpacity>



    <TouchableOpacity onPress={()=>{
      navigation.navigate('Cart')
      }}
      >
    <Image source={require("../assets/SVGS/bag-2.png")}/>

    </TouchableOpacity>



    <TouchableOpacity
    onPress={()=>{navigation.navigate('Favirotes')
    }}
    >
    <Image source={require("../assets/SVGS/hear.png")}/>

    </TouchableOpacity>



    <TouchableOpacity
    onPress={()=>{navigation.navigate('Order History')}}>
    <Image source={require("../assets/SVGS/notification.png")}/>
    </TouchableOpacity>
    
</View>
    )

}

export default Bottom