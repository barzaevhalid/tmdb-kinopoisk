import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  CastRoot,
  DetailDto,
  MovieDto,
  MoviesResponseDto,
} from "./movies.dto";

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
    getMovieById: builder.query<DetailDto, number>({
      query: (id) => `/movie/${id}`,
    }),
    getCreditsByMovieId: builder.query<CastRoot, number>({
      query: (id) => `/movie/${id}/credits`,
    }),
    getSimilarMoviesById: builder.query<MoviesResponseDto, number>({
      query: (id) => `/movie/${id}/similar`,
    }),
  }),
});
export const {
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetUpcomingMoviesQuery,
  useGetNowPlayingMoviesQuery,
  useGetMovieByIdQuery,
  useGetCreditsByMovieIdQuery,
  useGetSimilarMoviesByIdQuery,
} = moviesApi;
