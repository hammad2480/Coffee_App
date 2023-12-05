import { configureStore } from "@reduxjs/toolkit";
import MyReducer from './slice'
import { persistReducer,persistStore } from "redux-persist";
import thunk from "redux-thunk";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
    key: 'root',
    storage:AsyncStorage
  }

const persistedReducer=persistReducer(persistConfig,MyReducer)


 export const store=configureStore({
    reducer:{ qty1:persistedReducer},
    middleware:[thunk]
})

export const Persistor=persistStore(store)