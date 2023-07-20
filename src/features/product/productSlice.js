import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllProduct, fetchProductsByFilters } from './productAPI';

const initialState = {
  products: [],
  status: 'idle',
};

export const fetchAllProductAsync = createAsyncThunk(
  'product/fetchAllProduct',
  async () => {
    const response = await fetchAllProduct();
    return response.data;
  }
);

// fetchProductsByFilters
export const fetchProductsByFiltersAsync = createAsyncThunk(
  'product/fetchProductsByFilters',
  async (filter) => {
    const response = await fetchProductsByFilters(filter);
    // console.log("res data",response.data);
    return response.data;
  }
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProductAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      })

      .addCase(fetchProductsByFiltersAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductsByFiltersAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      });
      
      
  },
});

export const { increment } = productSlice.actions;
export const selectAllProducts = (state) => state.product.products;

export default productSlice.reducer;