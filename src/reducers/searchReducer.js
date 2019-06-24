import {
    SEARCH_MOVIE,
    FETCH_MOVIES,
    FETCH_MOVIE,
    LOADING
} from '../actions/types';

const initialState = {
    text: '', // The text you are going to type on search bar
    movies: [], // The movies
    loading: false, // A loading spinner  
    movie: [] // Single movie page
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SEARCH_MOVIE:
            return {
                ...state,
                text: action.payload,
                    loading: false
            };
        case FETCH_MOVIES:
            return {
                ...state,
                movies: action.payload,
                    loading: false
            };
        case FETCH_MOVIE:
            return {
                ...state,
                movie: action.payload,
                loading: false
            };
        case LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state
    }
}