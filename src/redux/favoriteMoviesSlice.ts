import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("favorites") || "[]"),
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const movie = action.payload;
      const index = state.items.findIndex((m: any) => m.id === movie.id);

      if (index !== -1) {
        state.items.splice(index, 1);
      } else {
        state.items.push(movie);
      }

      localStorage.setItem("favorites", JSON.stringify(state.items));
    },
  },
});

export const { toggleFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
