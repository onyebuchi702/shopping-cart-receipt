import React, { Component } from 'react';
import {
  Row,
  Col,
  Button,
  Collapse,
  Card,
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  FormText,
 } from 'react-bootstrap';

 import { connect } from 'react-redux'
 import { handleChange } from '../../actions/promoCodeActions'

class PromoCode extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    //  value: '' using redux for value
    };

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.props.handleChange(e)
  }

  render () {
    return (
      <div>
        <Button
          className="promo-code-button"
          variant="link"
          bsstyle="link"
          onClick={() => this.setState({open: !this.state.open})}
          >
            {this.state.open === false ? `Apply` : `Hide`}
            &nbsp;promo code
            {this.state.open === false ? `+` : `-`}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Card>
              <Row className="show-grid">
                <Col md={12}>
                  <Form>
                    <FormGroup controlId="formBasicEmail">
                      <FormLabel style={{paddingLeft: '2.86em'}}>Promo Code</FormLabel>
                      <FormControl
                        type="text"
                        placeholder="Enter Promo Code"
                        value={this.props.promoCode}
                        onChange={this.handleChange}
                        />
                      <FormText className="text-muted" style={{textAlign: "center"}}>
                        Do Not Share
                      </FormText>
                    </FormGroup>
                    <Button
                      block
                      variant="success"
                      className="btn-round"
                      disabled={this.props.isDisabled}
                      onClick={this.props.giveDiscount}>
                      Apply
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Card>
          </div>
        </Collapse>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
})

export default connect (mapStateToProps, {handleChange})(PromoCode)
