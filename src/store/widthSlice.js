import { createSlice } from '@reduxjs/toolkit';

const widthSlice = createSlice({
    name: "fullWidth",
    initialState: {width : window.innerWidth},
    reducers : {  
        setSize(state){
            state.width = window.innerWidth;
            console.log(state.width)
        },
      }
})


export const widthAction = widthSlice.actions 
export default widthSlice;