import React,{useEffect} from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Header from './src/navigator/screen_stack';
import { Provider } from 'react-redux';
import { Persistor,store } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen'

const App=()=>{

useEffect(()=>{
  const timer=setTimeout(()=>{
    
    SplashScreen.hide()

  },2500)
  
  
 },[])
 
 SplashScreen.show()
 
 
return(
  <PersistGate persistor={Persistor}>
  <Provider store={store}>
    
  <Header/>
  </Provider>
  </PersistGate>
  
  

)
}
export default App

