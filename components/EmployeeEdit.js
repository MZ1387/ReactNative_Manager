import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { Card, CardSection, Button, Confirm } from './common';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  state = { showModal: false };

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

  onTextPress = () => {
    const { phone, shift } = this.props;
    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  }

  onAccept = () => {
    const { dispatch, employee: { uid } } = this.props;
    dispatch(employeeDelete({ uid }));
  }

  onDecline = () => {
    this.setState({ showModal: !showModal });
  }

  render() {
    const { showModal } = this.state;

    return (
      <Card>

        <EmployeeForm />

        <CardSection>
          <Button onPress={this.onButtonPress}>
            Save Changes
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onTextPress}>
            Text Schedule
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.setState({ showModal: !showModal })}>
            Remove Employee
          </Button>
        </CardSection>

        <Confirm
          visible={showModal}
          onAccept={this.onAccept}
          onDecline={this.onDecline}
        >
          Are you sure you want to remove this employee?
        </Confirm>

      </Card>
    );
  }
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps)(EmployeeEdit);
