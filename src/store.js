import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer } from './reducers/productReducers';
import { proReducer } from './reducers/proReducer';
import { cartReducer } from './reducers/cartReducers';

const reducer = combineReducers({
    productList : productListReducer,
    prodlist : proReducer,
    cart : cartReducer,
})

// console.log(localStorage === window.localStorage);


// const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []



const initialState = {
    
}

const middleware = [thunk]

const store= createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store;