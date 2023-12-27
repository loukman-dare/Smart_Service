import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    loged: false
}
const logedSlice = createSlice({
    name:'loged',
    initialState,
    reducers:{
        login:state=>{
            state.loged=true
        },
        logout:state=>{
            state.loged =false
        }
    }
})
export default logedSlice.reducer
export const { login, logout } = logedSlice.actions