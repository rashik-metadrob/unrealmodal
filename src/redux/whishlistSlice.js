// src/redux/wishlistSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  collections: [],
  likedProducts: [],
  liked: false
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addCollection: (state, action) => {
      state.collections.push(action.payload);
    },

    removeCollection: (state, action) => {
      state.collections = state.collections.filter(
        (item) => item.id !== action.payload.id
      );
    },
    addItem: (state, action) => {
      state.likedProducts.push(action.payload)
    },

    removeItem: (state, action) => {
      state.likedProducts = state.collections.filter(
        (item) => item.id !== action.payload.id
      );
    },

    setLiked: (state,action) => {
      state.liked = action.payload || !state.liked
    }


  },
});

export const { addCollection, removeCollection, addItem, removeItem,setLiked } = wishlistSlice.actions;
export default wishlistSlice.reducer;