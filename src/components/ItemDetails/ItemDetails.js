import React, { Component } from 'react';
import { Row, Col, Collapse, Card, Media, Button } from 'react-bootstrap';
import './ItemDetails.css';

export default class ItemDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  render () {
    return (
      <div>
        <Button
          className="item-details-button"
          variant="link"
          bsstyle="link"
          onClick={() => this.setState({open: !this.state.open })}
          >
          {this.state.open === false ? `See` : `Hide` } item details
          {this.state.open === false ? `+` : `-` }
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Card>
              <Media>
                <img
                  src="https://media.takealot.com/covers_tsins/46282746/9780409124606-1-pdpxl.jpg"
                  width={100}
                  height={100}
                  alt="educational books"
                  />
                <Media.Body>
                  <p>Auditing Notes For South African Students</p>
                  <Row className="show-grid">
                    <Col md={6}>
                      <strong>R{this.props.price}</strong>
                      <br/>
                      <strong className="price-strike">R{this.props.price}</strong>
                    </Col>
                    <Col md={6}>
                      <strong>Qty 1</strong>
                    </Col>
                  </Row>
                </Media.Body>
              </Media>
            </Card>
          </div>
        </Collapse>
      </div>
    );
  }
}
