import React from 'react'
import { View,Image,TouchableOpacity} from "react-native"

const Bottom=(props)=>{
    checkScreen=(val)=>{
        if(val=="fav"){
            return "fav"
        }
        if(val=="cart")
        {
            return "cart"
        }
        if(val=="oh")
        {
            return "oh"
        }
        if(val=="home")
        {
            return "home"
        }
       
        
       
        

    }

    return(
<View style={{height:props.h?props.h:50,backgroundColor:props.c?props.c:"black",flexDirection:'row',justifyContent:'space-around',paddingTop:10,paddingBottom:10,alignItems:'center'}}>  
    
    <TouchableOpacity
    onPress={()=>{
    props.navigation.navigate('Main')
    }}
    >
    <Image source={checkScreen(props.screen)=="home"?require("../assets/SVGS/home_or.png"):require("../assets/SVGS/home.png")}/>
    
    </TouchableOpacity>



    <TouchableOpacity onPress={()=>{
      props.navigation.navigate('Cart')
      }}
      >
    <Image source={checkScreen(props.screen)=="cart"?require("../assets/SVGS/bag_or.png"):require("../assets/SVGS/bag-2.png")}/>

    </TouchableOpacity>



    <TouchableOpacity
    onPress={()=>{props.navigation.navigate('Favirotes')
    }}
    >
    <Image source={checkScreen(props.screen)=="fav"?require("../assets/SVGS/heart_png.png"):require("../assets/SVGS/hear.png")}/>

    </TouchableOpacity>



    <TouchableOpacity
    onPress={()=>{props.navigation.navigate('Order History')}}>
    <Image source={checkScreen(props.screen)=="oh"?require("../assets/SVGS/notification_or.png"):require("../assets/SVGS/notification.png")}/>
    </TouchableOpacity>
    
</View>
    )

}

export default Bottom