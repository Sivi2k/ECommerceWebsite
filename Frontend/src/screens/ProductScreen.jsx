import {useParams} from 'react-router-dom'
import products from '../products';
import { Link } from 'react-router-dom';
import { Row ,Col,Image,ListGroup,Card,Button, ListGroupItem } from 'react-bootstrap';
import Rating from '../components/Rating';

const ProductScreen =() =>{
    const {id:productId} =useParams();
    const product =products.find((p)=>p._id ===productId);
    console.log(product);
    return(
         <>
         <Link classname='btn btn-light my-2' to='/'>
            Go Back
         </Link>
         <Row>
            <Col md={3}>
                <Image src={product.image} alt={product.name} fluid></Image>
            </Col>


            <Col md={4}>
                <ListGroup.Item>
                    <h3>
                        {product.name}
                    </h3>
                </ListGroup.Item>
                  <ListGroup.Item>
                   <Rating value={product.Rating} text={`${product.numReviews} Reviews`}></Rating>
                </ListGroup.Item>
                <ListGroup.Item>
                  price : ${product.price}
                </ListGroup.Item>
                 <ListGroup.Item>
                  Description : {product.description}
                </ListGroup.Item>

            </Col>

            <Col md={5}>
            <Card>
                <ListGroup.Item>
                    <Row>
                        <Col>
                        Price
                        </Col>
                        <Col><b>${product.price}</b></Col>

                    </Row>
                </ListGroup.Item>

                <ListGroupItem>
                    <Row>
                        <Col>Status</Col>
                        <Col>
                        <b>
                            {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                        </b>
                        </Col>
                    </Row>

                </ListGroupItem>
                <ListGroupItem>
                    <Button className='btn-block' type='button' disabled={product.countInStock===0}>Buy Now </Button>
                </ListGroupItem>
            </Card>
            </Col>
         </Row>
         </>
    );
}

export default ProductScreen;