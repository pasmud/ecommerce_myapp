import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addToCart,removeFromCart} from '../actions/cartActions'
import {Row, Col, ListGroup, Image, Form, Button} from 'react-bootstrap'
import {Link,useParams,useLocation,useNavigate} from 'react-router-dom'
import Message from '../components/Message'

function CartScreen() {

    const  {id}  = useParams()
    const { search } = useLocation();
    const qty = new URLSearchParams(search).get("qty");
    console.log(id, qty)
    const dispatch = useDispatch()
    const navigate = useNavigate();



    useEffect (() => {

        if (id){

            dispatch(addToCart(id, qty))
        }
        
        
        
    },[dispatch,id,qty]) 

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }
    const cart = useSelector(state => state.cart)

    const { cartItems ,error} = cart
    console.log('caRT',cartItems)

    const checkoutHandler =  () =>{
        navigate('/login?redirect=shipping')}


    return (
        <Row >
            
            <Col md={8} className="cartitemlist">
            <h2>Shopping Cart</h2>

                {cartItems.length === 0 ? 
                    <Message variant = "info" children = 'Please add Items to the cart' /> : 
                    
                    <ListGroup variant='flush'>

                        {cartItems.map(item =>(
                            <ListGroup.Item key={item.product} sm={12} md={6} lg={4} xl={3}>
                                <Row >
                                    <Col md={3}>
                                    <Link to={`/product/${item.product}`} >
                                        <Image src={item.image} fluid rounded/>
                                        </Link>
                                    </Col>
                                    <Col md={2}>
                                        <Link to={`/product/${item.product}`} >{item.name}</Link>
                                    </Col>
                                    <Col md={3}>
                                        ${item.price}
                                    </Col>
                                    <Col md={2}>


                                    <Form.Control   
                                                as="select"
                                                value={item.qty}
                                                onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
                                                > 


                                                {
                                                [...Array(item.countInStock).keys()].map((x) => 
                                                
                                                <option key={x+1} value={x+1}>
                                                    {x + 1}
                                                </option>
                                                
                                                
                                                )
                                            }   
                                                
                                            </Form.Control>
                                        
                                    </Col >
                                    <Col md={1} className='mr-5'>
                                        <Button
                                        className="trashicon"
                                        onClick = {() => removeFromCartHandler(item.product)}
                                        type='button'>
                                            <i className="far fa-trash-alt "></i>
                                    
                                        </Button>
                                        
                                    </Col>

                                </Row>
                            </ListGroup.Item>
                        ) )}

                    </ListGroup>

                    }
                    

            </Col>

            <Col className="cartitemlist2" md={3}>
                <Row>
                    <Col >
                    <h2 className="p-3">{cartItems.reduce((acc,item)=> acc + item.qty,0 )} items</h2>

                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <h5>Price Total</h5>
                    </Col>

                    <Col className="toalvalue">
                    {cartItems.reduce((acc,item)=> acc + (item.qty*item.price),0 ).toFixed(2)}
                    </Col>
                </Row>

                <Row>
                    <Col md={8}>
                        <h5>Price Total + GST</h5>
                    </Col>

                    <Col className="toalvalue">
                    ${cartItems.reduce((acc,item)=> acc + (item.qty*(item.price*1.2)),0).toFixed(2)}
                    </Col>
                </Row>
                
                <Row>
                <Button
                                    // onClick = {addToCartHandler}
                                    className='btn-block' 
                                    disabled={cartItems.length === 0}
                                    onClick = {checkoutHandler}
                                    type='button'>
                                    {cartItems.length === 0 ? 'Please add Items' : 'Proceed to checkout'}
                                
                                </Button>

                </Row>

                
                
            </Col>


        </Row>
    )
}

export default CartScreen
