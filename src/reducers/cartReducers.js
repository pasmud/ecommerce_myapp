import { CART_ADD_ITEM, CART_REMOVE_ITEM , CART_CALL_FAIL } from '../constants/cartConstants'

export const cartReducer = (state = {cartItems:[]}, action) =>{


    switch(action.type){
        case CART_ADD_ITEM:
            const item = action.payload
            const productExist = state.cartItems.find(x => x.product === item.product)
            console.log('cartreducer', item, productExist)

            if (productExist){
        return {  
            ...state,
            cartItems: state.cartItems.map(x => x.product === productExist.product ? item : x)

        }}
        else{
            return {
                ...state,
                cartItems :[...state.cartItems, item]
                
            }
        }
        


        
        case CART_REMOVE_ITEM:
            const id = action.payload
            return {  
                ...state,
                cartItems: state.cartItems.filter(x => x.product !== id )
            }

        case CART_CALL_FAIL:
                return { error: action.payload }
        
        default:
            return state

            
    
}}
