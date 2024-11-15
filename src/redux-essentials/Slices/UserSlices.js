import { createSlice } from "@reduxjs/toolkit";

const initialState=[];

const userSlice=createSlice({
    name:'users',
    initialState,
    reducers:{
        userAdded(state,action){
       state.push(action.payload)
      console.log(state); 
        }
    }
})

export const { userAdded } = userSlice.actions;
export default userSlice.reducer