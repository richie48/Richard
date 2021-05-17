import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Message from './components/Message';
import Loader from './components/Loader';
import Rating from './Rating';
import { listProductDetails } from '../src/actions/productActions';

//Have to bring in match as props before using match.params.id
const ProductScreen = ({ match }) => {
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  //we use useeffect when we are tryig to fire up something while the application is running
  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);

  const products = [];

  return (
    <div>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="red">{error}</Message>
      ) : (
        <Row>
          <Col>
            <Image src={product.image} alt={product.name} fluid />
          </Col>

          <Col>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>Price:${product.price}</ListGroup.Item>
            </ListGroup>
            <ListGroup.Item>Description:{product.description}</ListGroup.Item>
          </Col>
          <Col lg={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price: </Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status: </Col>
                    <Col>
                      {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    className="btn-block"
                    type="button"
                    disabled={!product.countInStock > 0}
                  >
                    Add To Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </div>
  );
};
//flush makes your details remain within its div or container
//You can now use Bootstrap classes with ReactJS code after the Bootstrap stylesheet issuccessfully integrated into a React app.
//To best use ReactJS, it would be ideal to import Bootstrap classes as React components. Luckily, this is done by utilizing third-party libraries like react-bootstrap and reactstrap
export default ProductScreen;
