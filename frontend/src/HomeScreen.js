import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
// import products from '../src/products';
import Product from './components/Product';
import axios from 'axios';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  //i can't make the arrow function in my use-effect async,need a seperate function
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get('/api/products');
      //we can get access to res.data
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Latest products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeScreen;
