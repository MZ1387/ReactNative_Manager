import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
  render() {
    const { dispatch, name, phone, shift } = this.props;
    const { pickerTextStyle } = styles;
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

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={pickerTextStyle}>Shift</Text>
          <Picker
            selectedValue={shift}
            onValueChange={(value) => dispatch(employeeUpdate({ prop: 'shift', value }))}
          >
            <Picker.Item label='Monday' value='Monday' />
            <Picker.Item label='Tuesday' value='Tuesday' />
            <Picker.Item label='Wednesday' value='Wednesday' />
            <Picker.Item label='Thursday' value='Thursday' />
            <Picker.Item label='Friday' value='Friday' />
            <Picker.Item label='Saturday' value='Saturday' />
            <Picker.Item label='Sunday' value='Sunday' />
          </Picker>
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

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps)(EmployeeCreate);
