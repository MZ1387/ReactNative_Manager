import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
  render() {
    const { dispatch, name, phone } = this.props;
    return (
      <Card>

        <CardSection>
          <Input
            label='Name'
            placeholder='John Doe'
            value={name}
            onChangeText={(value) => dispatch(employeeUpdate({ prop: 'name', value }))}
          />
        </CardSection>

        <CardSection>
          <Input
            label='Phone'
            placeholder='555-5555'
            value={phone}
            onChangeText={(value) => dispatch(employeeUpdate({ prop: 'phone', value }))}
          />
        </CardSection>

        <CardSection>
        </CardSection>

        <CardSection>
          <Button>
            Create
          </Button>
        </CardSection>

      </Card>
    );
  }
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps)(EmployeeCreate);
