import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './Subtotal.css'

export default class SubTotal extends Component {
  render () {
    return (
      <Row className="show-grid">
        <Col md={6}>Subtotal:</Col>
        <Col md={6} className="move-right">R{this.props.price}</Col>
      </Row>
    );
  }
}
