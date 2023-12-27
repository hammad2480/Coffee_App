import React from 'react'
import { View, Text,Image,TouchableOpacity } from "react-native"

const Header=(props)=>{
return(
    <View 
    style={[{flexDirection:'row', height: '5%', backgroundColor: '#0C0F14', alignItems: 'center', justifyContent: 'space-between', marginVertical: 20,marginHorizontal:'6%' }]}
    >

        <TouchableOpacity style={{width:'9%',height:'80%',backgroundColor:'#21262E',alignItems:'center',justifyContent:'center',borderRadius:10,}}
         onPress={()=>{
             return(
                props.navigation.openDrawer()
                   )
                }}>

        <Image
          style={{ width: '50%', height: '50%' }}
          source={require("../assets/SVGS/home_button.png")}
        />

        </TouchableOpacity>


        <Text style={{ fontWeight: 'bold', fontFamily: 'arial', color: 'white', fontSize: 16 }}>
            {props.screen}
            </Text>


        <Image
          style={{ width: '8%', height: '78%', borderRadius: 10 }}
          source={require("../assets/SVGS/f0b67a25e4700db72549080f48c2ce83.png")}
        />
        
      </View>
)
}
export default Header