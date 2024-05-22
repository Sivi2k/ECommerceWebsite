import React from "react";
import { Card,CardBody,CardFooter, CardText, CardTitle } from "react-bootstrap";
import Rating from './Rating';
const Product = ({product}) =>{
return(
    <Card className="my-3 p-3 rounded">
     <a href={`/product/${product._id}`}>
        <Card.Img src ={product.image} variant='top'></Card.Img>
     </a><CardBody>
        <a href={`/product/${product._id}`}>
            <CardTitle as="div"/>

            <b>{product.name}</b>

        </a>  <CardText as="div">
            <Rating value={product.rating}  text ={`${product.numReviews} Reviews`}></Rating>

           ⭐{product.rating
            }
        </CardText>
        <CardText as="h3">
            ${product.price}
        </CardText>
     </CardBody>
    </Card>
);
}

export default Product;