import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Data } from "../components/Data";

// type of state
export interface stateType {
    movies:
        | {
              Poster: string;
              Title: string;
              Type: string;
              Year: string;
              imdbID: string;
          }[];
    showSidebar: boolean;
    searchMovies: string;
    movieDetails: any;
    loading: boolean;
    initialLoadData: boolean;
}

const initialState: stateType = {
    movies: [
        {
            Title: "The Incredible Hulk",
            Year: "2008",
            imdbID: "tt0800080",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BMTUyNzk3MjA1OF5BMl5BanBnXkFtZTcwMTE1Njg2MQ@@._V1_SX300.jpg",
        },
    ],
    showSidebar: false,
    searchMovies: "",
    movieDetails: {},
    loading: true,
    initialLoadData: true,
};

const stateSlice = createSlice({
    name: "createSlice",
    initialState,
    reducers: {
        handleSidebar: (
            state: stateType,
            action: PayloadAction<{ args: string }>
        ) => {
            state.showSidebar =
                action.payload.args === "show"
                    ? (state.showSidebar = true)
                    : (state.showSidebar = false);
        },

        addMovies: (
            state: stateType,
            action: PayloadAction<{ args: stateType["movies"] }>
        ) => {
            state.movies = action.payload.args;
        },

        addSearchMovies: (
            state: stateType,
            action: PayloadAction<{ args: string }>
        ) => {
            state.searchMovies = action.payload.args;
        },

        addMovieDetails: (
            state: stateType,
            action: PayloadAction<{ args: Object }>
        ) => {
            state.movieDetails = action.payload.args;
        },

        toggleLoading: (
            state: stateType,
            action: PayloadAction<{ args: string }>
        ) => {
            state.loading =
                action.payload.args === "true"
                    ? (state.loading = true)
                    : (state.loading = false);
        },

        toggleInitialLoadData: (
            state: stateType,
            action: PayloadAction<{ args: string }>
        ) => {
            state.initialLoadData =
                action.payload.args === "true"
                    ? (state.initialLoadData = true)
                    : (state.initialLoadData = false);
        },
    },
});

export const {
    addMovies,
    handleSidebar,
    addSearchMovies,
    addMovieDetails,
    toggleLoading,
    toggleInitialLoadData,
} = stateSlice.actions;

export default stateSlice.reducer;
