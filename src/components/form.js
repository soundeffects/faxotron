import React, { Component } from 'react';
import { Typography, Button, Stepper, Step, StepLabel } from '@material-ui/core';

import FaxInfo from './faxInfo';
import CostStep from './costStep';

function getSteps() {
  return ['Fax Information', 'Cost Summary', 'Payment'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <FaxInfo/>;
    case 1:
      return <CostStep/>;
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown step';
  }
}

class Form extends Component {
  state = { activeStep: 0 };

  handleNext = () => {
    const { activeStep } = this.state;
    this.setState({ activeStep: activeStep + 1 });
  };

  handleBack = () => {
    const { activeStep } = this.state;
    if (activeStep === 0) {
      this.props.handleView(false);
    } else {
      this.setState({ activeStep: activeStep - 1 });
    }
  };

  render() {
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const props = {};
            const labelProps = {};
            return (
              <Step key={label} {...props}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <Typography>
              All steps completed - you&quot;re finished
            </Typography>
          ) : (
            <div>
              {getStepContent(activeStep)}
              <Button onClick={this.handleBack}>Back</Button>
              <Button variant="contained" color="primary" onClick={this.handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Form;
