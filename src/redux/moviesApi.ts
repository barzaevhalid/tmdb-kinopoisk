import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { MoviesResponseDto } from "./movies.dto";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",
    prepareHeaders: (headers) => {
      const token = import.meta.env.VITE_TMDB_TOKEN;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPopularMovies: builder.query<MoviesResponseDto, void>({
      query: () => "/movie/popular?page=1",
    }),
    getTopRatedMovies: builder.query<MoviesResponseDto, void>({
      query: () => "/movie/top_rated?page=1",
    }),
    getUpcomingMovies: builder.query<MoviesResponseDto, void>({
      query: () => "/movie/upcoming?page=1",
    }),
    getNowPlayingMovies: builder.query<MoviesResponseDto, void>({
      query: () => "/movie/now_playing?page=1",
    }),
  }),
});
export const {
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetUpcomingMoviesQuery,
  useGetNowPlayingMoviesQuery,
} = moviesApi;
