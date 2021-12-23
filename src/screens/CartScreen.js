import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
// import {removeFromCart, addToCart, removeItem} from '../redux/actions/cartAction'
import {Row, Col, ListGroup, Image, Form, Cart, Button} from 'react-bootstrap'
import {Link,useParams,useLocation} from 'react-router-dom'
import {Message} from '../components/Message'

function CartScreen() {

    const  {id}  = useParams()
    const { search } = useLocation();
    const qty = new URLSearchParams(search).get("qty");
    console.log('ww',id,search, qty)
    return (
        <div>
            Cart
            
        </div>
    )
}

export default CartScreen
