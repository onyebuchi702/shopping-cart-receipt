import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import './TaxesFees.css'

export default class TaxesFees extends Component {
  render () {
    return (
      <Row className="show-grid">
        <Col md={6}>Estimates taxes & fees (Based on 94085):</Col>
        <Col md={6} className="move-left">R{this.props.taxes}</Col>
      </Row>
    );
  }
}
