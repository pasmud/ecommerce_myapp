import React,{useEffect, useState} from 'react'
import {Link,useParams,useNavigate } from 'react-router-dom'
import {Row,Col,Image,ListGroup,Button,Card,Form} from 'react-bootstrap'
import Ratign from '../components/Rating'
import {useDispatch,useSelector} from 'react-redux'
import {listProd} from '../actions/prodActions'
import Spinnerload from '../components/Spinnerload'
import Message from '../components/Message'



// import axios from 'axios'

export function ProductScreen() {


const [qty , setQty] = useState(1)


const  {id}  = useParams();
const navigate = useNavigate();

const dispatch = useDispatch()
const prodList = useSelector(state => state.prodlist)
const { error,loading, product} = prodList

useEffect (() => {

    dispatch(listProd(id))
    
    
},[dispatch,id])

const addToCartHandler = () =>{
    navigate(`/cart/${product._id}?qty=${qty}`)
    // console.log(product)
}

console.log(id)

return (
    <div>
        <Link to='/' className='btn btn-light my-3'>Go Back</Link>

        {loading ? <Spinnerload /> 
            : error ? <Message variant="warning" children={error}/> 
                : 
                <Row style={{display: 'flex' }}>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} style={{width: '100%'}}/>
                </Col>
                <Col md={3}>
                    <ListGroup >
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Ratign value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'}/>
                        </ListGroup.Item>
                    </ListGroup>

                    <ListGroup.Item>
                            price: ${product.price}
                    </ListGroup.Item>

                    <ListGroup.Item>
                            Description: {product.description}
                    </ListGroup.Item>

                </Col>

                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>
                                        <strong>{product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>
                                        {product.countInStock > 0 ? 'In xxStock' : 'Out of Stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Quantity:</Col>
                                    <Col xs='auto'>
                                        {product.countInStock > 0 && (
                                            <Form.Control   
                                                as="select"
                                                value={qty}
                                                onChange={(e) => setQty(e.target.value)}
                                                > 


                                                {
                                                [...Array(product.countInStock).keys()].map((x) => 
                                                
                                                <option key={x+1} value={x+1}>
                                                    {x + 1}
                                                </option>
                                                
                                                
                                                )
                                            }   
                                                
                                            </Form.Control>
                                        )}
                                    </Col>
                                    



                                </Row>
                            </ListGroup.Item>


                            <ListGroup.Item>
                                <Button
                                    onClick = {addToCartHandler}
                                    className='btn-block' 
                                    disabled={product.countInStock === 0} 
                                    type='button'>
                                        Add to Cart
                                
                                </Button>
                            </ListGroup.Item>

                        </ListGroup>
                    </Card>
                </Col>
            </Row>
                
                
                }


            
    </div>
)
}

export default ProductScreen
