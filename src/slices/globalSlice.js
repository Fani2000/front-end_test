import { createSlice } from "@reduxjs/toolkit";

export const globalSlice = createSlice({
  name: "GlobalSlice",
  initialState: {
    isMobileMenuOpen: false,
    carouselData: [],
  },
  reducers: {
    toggleMobileMenu: (state, action) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
    updateCarouselData: (state, action) => {
      state.carouselData = action.payload;
    },
  },
});

export const { toggleMobileMenu, updateCarouselData } = globalSlice.actions;
export default globalSlice.reducer;
