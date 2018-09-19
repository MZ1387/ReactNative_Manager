import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './common';
import { employeeUpdate, employeeSave } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  componentWillMount() {
    const { dispatch, employee } = this.props;

    _.each(employee, (value, prop) => {
      dispatch(employeeUpdate({ prop, value }))
    })
  }

  onButtonPress = () => {
    const { dispatch, name, phone, shift, employee: { uid } } = this.props;
    dispatch(employeeSave({ name, phone, shift, uid }));
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress}>
            Save Changes
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

export default connect(mapStateToProps)(EmployeeEdit);
