import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    products: [],
    status: "idle",
    error: ""
}

export const getProducts = createAsyncThunk("products/getProducts", async () => {
    const response = await axios.get("http://127.0.0.1:8000/store/api/products/")
    console.log('Fetched Products:', response.data); // Debugging
    return response.data;
})


const productSlice = createSlice({
    name :'products',
    initialState: initialState,

    reducers : {
      filterProduct : (state, action) => {
        console.log('current category', action.payload.products)
        const filteredData = action.payload.products.filter(eachProduct=> {
            return eachProduct.category == action.payload.category.id
        })
        state.products = filteredData
      },


    },

    extraReducers: (builder) => {
        builder
          .addCase(getProducts.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(getProducts.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.products = action.payload;
          })
          .addCase(getProducts.rejected, (state, action) => {
            state.status = 'failed';
            console.error('Error fetching products:', action.error);
          });
      },
})

export const {filterProduct} = productSlice.actions
export default productSlice.reducer