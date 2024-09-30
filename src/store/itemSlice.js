import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    itemsArr: []
}

export const itemSlice = createSlice({
    name : 'items',
    initialState,
    reducers:{
        addItem: (state, action) => {
            const item = {
                id: nanoid(),
                website: action.payload.website,
                email: action.payload.email,
                password: action.payload.password
            }
            state.itemsArr.push(item)
        },
        removeItem: (state, action) => {
            state.itemsArr = state.itemsArr.filter((item) => { 
                
                return item.id !== action.payload })
            
        }
    }
})

export const {addItem, removeItem} = itemSlice.actions

export default itemSlice.reducer