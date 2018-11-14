import { createStore, combineReducers} from 'redux';


function productsReducer(state=[], action){
    switch(action.type) {
        case 'GET_ALL_PRODUCTS':
          return state.concat([action.data]);
        default:
          return state;
    }
}

let rootReducer = combineReducers({
    products: productsReducer,
});

const store = createStore(rootReducer)

export default store;