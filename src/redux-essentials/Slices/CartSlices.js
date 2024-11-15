import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state=initialState, action) {
      if((state.length!==0)&&(state.find(p=>p.p.id===action.payload.id))){
        for(let i=0;i<state.length;i++){
          if(state[i].id===action.payload.id){
            state[i].pc=(state[i].pc+action.payload.pc);
            return
          }
        }
      }else{
        state.push(action.payload)
      }
      
      
      
    },
    postRemove(state=initialState,action){
    //  return{
    //   ...state,
    //   state:state.filter(p=>p.id!==action.payload)
    //  } 
    return state.filter(p=>p.id!==action.payload)
    }

  }
})

export const { postAdded,postRemove } = postsSlice.actions;

export default postsSlice.reducer