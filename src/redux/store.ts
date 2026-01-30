import { configureStore } from "@reduxjs/toolkit";
import { moviesApi } from "./moviesApi";
import themeReducer from "./themeSlice";
import { useSelector, type TypedUseSelectorHook } from "react-redux";
export const store = configureStore({
  reducer: {
    theme: themeReducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefault) => getDefault().concat(moviesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
