import React, { Component } from 'react';
import { connect } from 'redux';
import { emailChanged, passwordChanged } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
  onEmailChange = (text) => {
    this.props.dispatch(emailChanged(text))
  }

  onPasswordChange = (text) => {
    this.props.dispatch(passwordChanged(text))
  }

  render() {
    const { email, password } = this.props;
    return (
      <Card>

        <CardSection>
          <Input
            label="Email"
            placeholder="example@email.com"
            value={email}
            onChangeText={this.onEmailChange}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Password"
            secureTextEntry
            placeholder="password"
            value={password}
            onChangeText={this.onPasswordChange}
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
  const { email, password } = state.auth;
  return { email, password };
};

export default connect(mapStateToProps)(LoginForm);
