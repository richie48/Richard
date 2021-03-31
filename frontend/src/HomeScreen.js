import React from 'react';
import { Row, Col } from 'react-bootstrap';
import products from '../src/products';
import Product from './components/Product';

const HomeScreen = () => {
  return (
    <div>
      <h1>Latest products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeScreen;
