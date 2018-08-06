import React, { Component } from 'react';
import { Button, Stepper, Step, StepLabel } from '@material-ui/core';

import FaxInfo from './faxInfo';
import CostStep from './costStep';
import PaymentInfo from './paymentInfo';

import styles from '../styles/main';

class Form extends Component {
  state = {
    steps: [
      {
        name: 'Fax Information',
        component: FaxInfo
      }, 
      {
        name: 'Cost Summary',
        component: CostStep
      },
      { 
        name: 'Payment',
        component: PaymentInfo
      }
      ],
    activeStep: 0
  };

  handleNext = () => {
    const { steps, activeStep } = this.state;
    if (activeStep === steps.length - 1) {
      this.props.handleView('finished');
    } else {
      this.setState({ activeStep: activeStep + 1 });
    }
  };

  handleBack = () => {
    const { activeStep } = this.state;
    if (activeStep === 0) {
      this.props.handleView('not started');
    } else {
      this.setState({ activeStep: activeStep - 1 });
    }
  };
  
  getStepContent() {
    const { steps, activeStep } = this.state;
    const StepComponent = steps[activeStep].component;
    
    return <StepComponent mode={this.props.mode}/>;
  }

  render() {
    const { steps, activeStep } = this.state;
    
    return [<Stepper activeStep={activeStep}>
        {steps.map((step, index) => {
          const props = {};
          const labelProps = {};
          return (
            <Step key={step.name} {...props}>
              <StepLabel {...labelProps}>{step.name}</StepLabel>
            </Step>
          );
        })}
      </Stepper>,
      this.getStepContent(activeStep),
      <section style={styles.center}>
        <div className='wrapper'>
          <Button onClick={this.handleBack}>Back</Button>
          <Button variant="contained" color='primary' onClick={this.handleNext}>
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </div>
      </section>
    ];
}
}

export default Form;
