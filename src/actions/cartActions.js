import axios from 'axios';

import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM

} from '../constants/cartConstants';

export const addToCartns = (id,qty) => async (dispatch,getState) => {

    try {

        const {data} = await axios.get(`/api/products/${id}`)

        dispatch ({ 
            type : CART_ADD_ITEM, 
            payload : {
                product : date._id,
                name : date.name,
                image : date.image,
                price : date.price,
                countInStock : date.countInStock,
                qty
            }
        
        }) 

    }
    catch(error){
        dispatch ({ 
            type : PRO_LIST_FAIL,
            payload : error.message && error.response.data.message ? error.response.data.message : error.message })
    }

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.CartItems))
}