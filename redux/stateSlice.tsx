import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
}

// search the below movies name randomly and display it on homepage
let randomInitialMovies = [
    "hulk",
    "superman",
    "batman",
    "terminator",
    "stranger things",
];

const initialState: stateType = {
    movies: [
        {
            Poster: "",
            Title: "",
            Type: "",
            Year: "",
            imdbID: "",
        },
    ],
    showSidebar: false,
    searchMovies:
        randomInitialMovies[
            Math.floor(Math.random() * randomInitialMovies.length)
        ],
    movieDetails: {},
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
    },
});

export const { addMovies, handleSidebar, addSearchMovies, addMovieDetails } =
    stateSlice.actions;

export default stateSlice.reducer;
