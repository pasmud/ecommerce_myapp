import {
    PRO_LIST_REQUEST,
    PRO_LIST_SUCCESS,
    PRO_LIST_FAIL,

} from '../constants/proConstants';

export const proReducer = (state = {product:[]}, action) =>{


    switch(action.type){
        case PRO_LIST_REQUEST:
            return {loading:true, product:[]}
        
        case PRO_LIST_SUCCESS:
            return { loading : false , product: action.payload }
        
        case PRO_LIST_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
            
    }
} 

