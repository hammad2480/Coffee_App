import React from 'react'
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from '../screens/coffeeScreen';
import DetailsScreen3 from '../screens/coffeeBeansScreen';
import Main from '../screens/main';
import Cart from '../screens/cart';
import Fav from '../screens/fav';
import My_Checkout from '../screens/checkout';
import { createDrawerNavigator } from '@react-navigation/drawer';
import OrderHis from '../screens/orderHistory';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


const Drawer_nav=()=>{
  return(
    <Drawer.Navigator  screenOptions={{drawerActiveBackgroundColor:'rgba(255,255,255,0.4)',drawerLabelStyle:{color:'white',fontFamily:'arial',fontSize:20,fontWeight:'bold'},headerShown:false,drawerStyle:{backgroundColor:'black'}}}>
      <Drawer.Screen name="Main" component={Main}/>
      <Drawer.Screen  name="Favirotes" component={Fav}/>
      <Drawer.Screen name="Cart" component={Cart}/>
      <Drawer.Screen name='Order History' component={OrderHis}/>
    </Drawer.Navigator>
  )
}


const Header=()=>{
    return(
    
      <NavigationContainer>
         
        <Stack.Navigator 
        initialRouteName="Main" 
        screenOptions={{
        headerShown:false
              }} >

          <Stack.Screen name="Abc" component={Drawer_nav}/>
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Details3" component={DetailsScreen3} />
          <Stack.Screen name='Checkout' component={My_Checkout}/>
        
        </Stack.Navigator>

      </NavigationContainer>
    
    )
}
export default Header