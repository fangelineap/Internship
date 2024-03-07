import React, { ReactNode, createContext, useReducer } from "react";
import { MovieDataType, moviesData } from "../assets/data";

interface MovieContextProps {
    children: ReactNode
}

interface MovieState {
    movies: MovieDataType[]
}

interface MovieAction {
    type: string,
    id: string
}

const MovieList: MovieDataType[] = moviesData

const initMovieState: MovieState = {
    movies: MovieList,
}

const MovieReducer = (state: MovieState, action: MovieAction): MovieState => {
    switch(action.type) {
        // return state dengan mengoverride movie dalam state yang dit
        case "TOGGLE BOOKMARK":
            return {
                ...state,
                movies: state.movies.map(movie => {
                    if(movie.id === action.id) {
                        return {...movie, isBookmarked: !movie.isBookmarked}
                    }
                    return movie
                })
            }
        default: 
        return state
    }
}

export const MovieContext = createContext<{
    state: MovieState,
    dispatch: React.Dispatch<MovieAction>
}>({
    state: initMovieState,
    dispatch: () => {}
}
)

export const MovieProvider = ({children}: MovieContextProps) => {
    const [state, dispatch] = useReducer(MovieReducer, initMovieState)
    return <MovieContext.Provider value={{state, dispatch}}>
        {children}
    </MovieContext.Provider>
}