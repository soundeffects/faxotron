import { CardForm } from 'react-payment';
import React, { Component } from 'react';

let loadedStripe = false;

class Payment extends Component {
  /*componentWillMount() {
    if (loadedStripe) {
      return;
    }

    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v2/";
    script.type = "text/javascript";
    script.async = true;
    script.onload = () => {
      Stripe.setPublishableKey('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
    };
    document.body.appendChild(script);

    loadedStripe = true;
  }*/

  onSubmitCard = (card) => {
    const { number, exp_month, exp_year, cvc, name, zip } = card;
    /*Stripe.card.createToken({
      number,
      exp_month,
      exp_year,
      cvc,
      name,
      address_zip: zip
    }, (status, response) => {
      if (response.error) {
        alert('Adding card failed with error: ' + response.error.message)
      } else {
        const cardToken = response.id;
        server.saveCard(cardToken);
        this.closeDialog();
        show success message
      }
    });*/
  };

  render() {
    return <CardForm onSubmit={this.onSubmitCard}/>;
  }
}

export default Payment;
