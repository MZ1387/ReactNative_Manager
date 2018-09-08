import React, { Component } from 'react';
import { connect } from 'redux';
import { emailChanged } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
  onEmailChange = (text) => {
    this.props.dispatch(emailChanged(text))
  }

  render() {
    return (
      <Card>

        <CardSection>
          <Input
            label="Email"
            placeholder="example@email.com"
            onChangeText={this.onEmailChange}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Password"
            secureTextEntry
            placeholder="password"
          />
        </CardSection>

        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>

      </Card>
    );
  }
};

const mapStateToProps = (state) => {
  return {};
}

export default connect(mapStateToProps)(LoginForm);
