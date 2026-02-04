import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  CastRoot,
  DetailDto,
  Genres,
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
    getPopularMovies: builder.query<MoviesResponseDto, number>({
      query: (page: number = 1) => `/movie/popular?page=${page}`,
    }),
    getTopRatedMovies: builder.query<MoviesResponseDto, number>({
      query: (page: number = 1) => `/movie/top_rated?page=${page}`,
    }),
    getUpcomingMovies: builder.query<MoviesResponseDto, number>({
      query: (page: number = 1) => `/movie/upcoming?page=${page}`,
    }),
    getNowPlayingMovies: builder.query<MoviesResponseDto, number>({
      query: (page: number = 1) => `/movie/now_playing?page=${page}`,
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
    getAllGenres: builder.query<Genres, void>({
      query: () => "/genre/movie/list",
    }),
    getSortedMovies: builder.query({
      query: ({ selectedGenres, rating, sort, page }) => {
        const params = {
          with_genres:
            selectedGenres && selectedGenres.length > 0
              ? selectedGenres.join(",")
              : undefined,
          sort_by: sort,

          "vote_average.gte": rating[0],
          "vote_average.lte": rating[1],
          page: page,
        };

        return {
          url: "/discover/movie",
          params: params,
        };
      },
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
  useGetAllGenresQuery,
  useGetSortedMoviesQuery,
} = moviesApi;
