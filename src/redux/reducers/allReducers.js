import movieFilter from './movieFilter.js'
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    movieFilter:movieFilter
});

export default allReducers;