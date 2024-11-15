import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './Slices/CartSlices'
import UserSlices from './Slices/UserSlices'
export default configureStore({
    reducer: {
        posts: postsReducer,
        users:UserSlices
      }
})