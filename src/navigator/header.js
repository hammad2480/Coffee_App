import React from 'react'
import { View, Text,Image,TouchableOpacity } from "react-native"

const Header=(props)=>{
return(
    <View 
    style={[{flexDirection:'row', height: '5%', backgroundColor: 'black', alignItems: 'center', justifyContent: 'space-around', marginVertical: 20 }]}
    >

        <TouchableOpacity style={{width:50,height:50}}
         onPress={()=>{
             return(
                props.navigation.openDrawer()
                   )
                }}>

        <Image
          style={{ width: '90%', height: '90%' }}
          source={require("../assets/SVGS/menu.png")}
        />

        </TouchableOpacity>


        <Text style={{ fontWeight: 'bold', fontFamily: 'arial', color: 'white', fontSize: 16 }}>
            {props.screen}
            </Text>


        <Image
          style={{ width: '8%', height: '85%', borderRadius: 10 }}
          source={require("../assets/SVGS/f0b67a25e4700db72549080f48c2ce83.png")}
        />
        
      </View>
)
}
export default Header