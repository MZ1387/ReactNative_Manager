import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeFetch } from '../actions';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.dispatch(employeeFetch());
  }

  render() {
    return (
      <View>
        <Text>EMPLOYEE LIST</Text>
      </View>
    );
  }
};

const mapStateToProps = (state) => {
  const { employees } = state;
  return { employees };
};

export default connect(mapStateToProps)(EmployeeList);
