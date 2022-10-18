import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Data } from "../components/Data";

// type of state
interface stateType {
    movies: {
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
}

const initialState: stateType = {
    movies: Data,
    showSidebar: false,
    searchMovies: "terminator",
    movieDetails: {},
    loading: true,
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
    },
});

export const {
    addMovies,
    handleSidebar,
    addSearchMovies,
    addMovieDetails,
    toggleLoading,
} = stateSlice.actions;

export default stateSlice.reducer;
