import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

import { GET_ALL_PRODUCTS } from './typesActions';

function productsReducer(state=[], action){
    switch(action.type) {
        case GET_ALL_PRODUCTS:
          return state.concat([action.products]);
        default:
          return state;
    }
}

let rootReducer = combineReducers({
    products: productsReducer,
});

const store = createStore(rootReducer,applyMiddleware(thunk, logger));

export default store;