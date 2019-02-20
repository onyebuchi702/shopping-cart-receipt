import React, { Component } from 'react';
import { Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';

const styles = {
  pickupSavings: {
    textDecoration: 'underline'
  },

  totalSavings: {
    fontWeight: 800,
    color: 'red',
    paddingLeft: '7.2em',
    fontSize: '13.2px'
  }
}

export default class PickupSavings extends Component {
  render () {
    const tooltip = (
      <Tooltip id="tooltip">
        <p>Picking up your order in store helps cut costs, and we pass the savings to you.</p>
      </Tooltip>
    )
    return (
      <Row className="show-grid">
        <Col md={6}>
          <OverlayTrigger
            placement="bottom"
            overlay={tooltip}>
            <div style={styles.pickupSavings}>Pickup Savings:</div>
          </OverlayTrigger>
        </Col>
        <Col md={6} style={styles.totalSavings}>
          R{this.props.price}
        </Col>
      </Row>
    );
  }
}
