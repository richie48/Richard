import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">Copyright &copy; Bookstore</Col>
        </Row>
      </Container>
    </footer>
  );
};
//py-3 is for padding top and bottom by 3

export default Footer;
