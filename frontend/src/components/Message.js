import React from 'react';
import { Alert } from 'react-bootstrap';
//it takes in 2 props the children and the variant
const Message = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>;
};

Message.defaultProps = {
  variant: 'info',
};

export default Message;
