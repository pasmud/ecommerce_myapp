import axios from 'axios';

import {
    PRO_LIST_REQUEST,
    PRO_LIST_SUCCESS,
    PRO_LIST_FAIL,

} from '../constants/proConstants';

export const listProd = (id) => async (dispatch) => {

    try {
        
        dispatch ({ type : PRO_LIST_REQUEST,})

        const {data} = await axios.get(`/api/products/${id}`)

        dispatch ({ type : PRO_LIST_SUCCESS, payload : data}) 


    }
    catch(error){
        dispatch ({ 
            type : PRO_LIST_FAIL,
            payload : error.message && error.response.data.message ? error.response.data.message : error.message })
    }
}