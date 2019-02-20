import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import SubTotal from './components/Subtotal/Subtotal'
import PickupSavings from './components/PickupSavings/PickupSavings'
import TaxesFees from './components/TaxesFees/TaxesFees'
import EstimatedTotal from './components/EstimatedTotal/EstimatedTotal'
import ItemDetails from './components/ItemDetails/ItemDetails'
import PromoCode from './components/PromoCode/PromoCode'
import { connect } from 'react-redux'
import { handleChange } from './actions/promoCodeActions'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 200,
      PickupSavings: -3.85,
      taxes: 0,
      estimatedTotal: 0,
      disablePromoButton: false
    };
  }

  componentDidMount = () => {
    this.setState({
      taxes: (this.state.total + this.state.PickupSavings) * 0.0875
    },
      function() {
        this.setState({
          estimatedTotal: this.state.total + this.state.PickupSavings + this.state.taxes
        });
      }
    )
  }

  giveDiscountHandler = () => {
    if(this.props.promoCode === 'DISCOUNT') {
      this.setState({
        estimatedTotal: this.state.estimatedTotal * 0.9
      },
        function(){
          this.setState({
            disablePromoButton: true
          })
        })
    }
  }

  render() {
    return (
      <div className="container">
        <Row className="purchase-card">
          <div>
            <SubTotal
              price={this.state.total.toFixed(2)}
              />
          </div>
          <div>
            <PickupSavings
              price={this.state.PickupSavings}
              />
          </div>
          <div>
            <TaxesFees
              taxes={this.state.taxes.toFixed(2)}
              />
            <hr/>
          </div>
          <div>
            <EstimatedTotal
              price={this.state.estimatedTotal.toFixed(2)}
              />
          </div>
          <div>
            <ItemDetails
              price={this.state.estimatedTotal.toFixed(2)}
            />
            <br />
          </div>
          <div>
            <br/>
            <hr />
          </div>
          <div>
            <PromoCode
              giveDiscount={() => this.giveDiscountHandler()}
              isDisabled= {this.state.disablePromoButton}/>
          </div>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
})

export default connect (mapStateToProps, {handleChange})(App)
