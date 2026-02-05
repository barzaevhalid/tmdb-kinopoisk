import { configureStore } from "@reduxjs/toolkit";
import { moviesApi } from "./moviesApi";
import themeReducer from "./themeSlice";
import searchReducer from "./searchSlice";
import favoriteMovies from "./favoriteMoviesSlice";
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";
export const store = configureStore({
  reducer: {
    theme: themeReducer,
    search: searchReducer,
    favorites: favoriteMovies,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefault) => getDefault().concat(moviesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
