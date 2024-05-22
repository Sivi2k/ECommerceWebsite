import React from "react";
import { useEffect,useState } from "react";
import { Row, Col } from "react-bootstrap";
import products from "../products";
import Product from "../components/Product";
import  axios  from "axios";

const HomeScreen = () => {
    const[products,setProducts] =useState([]);
    useEffect(()=>{
        const fetchProducts = async () => {
            const{data} =await axios.get("/api/products");
            setProducts(data);
        };
        fetchProducts(); // calling fetch products function
    },[])
    return (
        <React.Fragment>
            <h1>
                Our Products
            </h1>
            <Row>
                {products.map((product) =>
                    <Col key={Product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product ={product}></Product>
                    </Col>
                )}
            </Row>
        </React.Fragment>
    );
}

export default HomeScreen;