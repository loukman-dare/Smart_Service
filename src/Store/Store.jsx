import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "../Slices/LoginSlice";
const store = configureStore({
    reducer:{
        login:LoginReducer
    }
})
export default store