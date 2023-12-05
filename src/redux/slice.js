import { createSlice, PayloadAction } from "@reduxjs/toolkit"
const MySlice=createSlice({
    name:"data",
    initialState:{
        cart_counter:0,
        fav:[],
        Cart:[],
        OrderH:[]
    },  
    reducers:{
        cartCounter:(state,action)=>{
            
            state.cart_counter++

        },
        addFavirote:(state,action)=>{
              state.fav.push(action.payload)
        },
        rmFavirote:(state,action)=>{
            state.fav.splice(state.fav.indexOf(action.payload),1)
        },
        AddCart:(state,action)=>{
            state.Cart=action.payload
        
        },
        OrderHistory:(state,action)=>{
            state.OrderH=action.payload
        }
        

    }
})
export const OrderHistory=MySlice.actions.OrderHistory
export const rmCart=MySlice.actions.rmCart
export const AddCart=MySlice.actions.AddCart
export const rmFavirote=MySlice.actions.rmFavirote
export const addFavirote=MySlice.actions.addFavirote
export const cartCounter=MySlice.actions.cartCounter
export default MySlice.reducer