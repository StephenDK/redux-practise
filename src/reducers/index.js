import { combineReducers } from 'redux';
import postReducer from './reducer_post';

export default combineReducers({
    posts: postReducer
});

