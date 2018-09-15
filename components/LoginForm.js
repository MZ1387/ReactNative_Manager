import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
  onEmailChange = (text) => {
    this.props.dispatch(emailChanged(text))
  }

  onPasswordChange = (text) => {
    this.props.dispatch(passwordChanged(text))
  }

  onLoginPress = () => {
    const { email, password } = this.props;
    this.props.dispatch(loginUser({ email, password }));
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
          <Button onPress={this.onLoginPress}>
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
