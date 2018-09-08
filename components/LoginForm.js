import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Card, CardSection, Input, Button } from './common';

const LoginForm = (props) => {
  return (
    <Card>

      <CardSection>
        <Input
          label="Email"
          placeholder="example@email.com"
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
};

export default LoginForm;
