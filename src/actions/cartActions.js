import axios from 'axios';

import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_CALL_FAIL
    

} from '../constants/cartConstants';

export const addToCart = (id,qty) => async (dispatch,getState) => {

    try {

        const {data} = await axios.get(`/api/products/${id}`)
        console.log('cartactions',getState().cart)

        dispatch ({ 
            type : CART_ADD_ITEM, 
            payload : {
                product : data._id,
                name : data.name,
                image : data.image,
                price : data.price,
                countInStock : data.countInStock,
                qty : qty,
            }
        
        }) 

        console.log('cartactionsssssssss',getState().cart.cartItems)

    }
    catch(error){
        dispatch ({ 
            type : CART_CALL_FAIL,
            payload : error.message && error.response.data.message ? error.response.data.message : error.message })
    }

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => (dispatch, getState) => {

    dispatch ({ 
        type : CART_REMOVE_ITEM, 
        payload : id,
        }) 

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}