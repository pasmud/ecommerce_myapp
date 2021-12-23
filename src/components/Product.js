import React from "react";
import { Card } from "react-bootstrap";
import Rating from './Rating'
import {Link} from 'react-router-dom'

function Product({ product }) {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} style={{height: '15rem'}}/>
      </Link>
      <Card.Body>
      <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <div className="my-3">
            <Rating value={product.rating} color={'#F8E825'} text={`${product.numReviews} reviews`}/>
          </div>
        </Card.Text>

        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default Product;
