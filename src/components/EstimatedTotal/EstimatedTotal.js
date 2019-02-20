import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './EstimatedTotal.css'

export default class EstimatedTotal extends Component {
  render () {
    return (
      <Row className="show-grid">
        <Col md={6}>
          <h2>Est. Total:</h2>
        </Col>
        <Col md={6}>
          <h2 className="move-lefts">R{this.props.price}</h2>
        </Col>
      </Row>
    );
  }
}
