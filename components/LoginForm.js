import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

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

  renderError = () => {
    const { errorTextStyle } = styles;
    const { error } = this.props;
    if (error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={errorTextStyle}>
            {error}
          </Text>
        </View>
      );
    }
  }

  renderButton = () => {
    const { loading } = this.props;
    if (loading) {
      return <Spinner size='large' />
    }

    return (
      <Button onPress={this.onLoginPress}>
        Login
      </Button>
    );
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

        {this.renderError()}

        <CardSection>
          {this.renderButton()}
        </CardSection>

      </Card>
    );
  }
};

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = (state) => {
  const { email, password, error, loading } = state.auth;
  return { email, password, error, loading };
};

export default connect(mapStateToProps)(LoginForm);
