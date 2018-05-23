import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers';


const initialState = {};

const middleware = [reduxThunk];
                                                                    
const store = createStore(
    rootReducer, 
    initialState,
    // The spread operator 
    // takes the middleware
    // array and seperates each entry 
    applyMiddleware(...middleware))


export default store;