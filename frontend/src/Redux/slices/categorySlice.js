import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () =>{
    const response = await axios.get('http://127.0.0.1:8000/store/api/categories/')
    console.log('fetchCategories response', response.data)
    return response.data
})

const initialState = {
    categories: [],
    status: "idle",
    error: ""
}

const categorySlice = createSlice({
    name: 'categories',
    initialState: initialState,

    reducers: {},

   extraReducers: (builder) => {
        builder
          .addCase(fetchCategories.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchCategories.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.categories = action.payload;
          })
          .addCase(fetchCategories.rejected, (state, action) => {
            state.status = 'failed';
            console.error('Error fetching categories:', action.error);
          });
      },

})

export default categorySlice.reducer