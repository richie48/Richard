import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
// import products from '../src/products';
import Product from './components/Product';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../src/actions/productActions';

const HomeScreen = () => {
  const dispatch = useDispatch();

  //to be able to display our states in redux we use selector,it takes in the state.
  const productList = useSelector((state) => {
    state.productList;
  });
  //we can pull out all we want from the state
  const { loading, error, products } = productList;

  //i can't make the arrow function in my use-effect async,need a seperate function
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]); //passed it in cause its a dependency

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
