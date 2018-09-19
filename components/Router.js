import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './LoginForm';
import EmployeeList from './EmployeeList';
import EmployeeCreate from './EmployeeCreate';
import EmployeeEdit from './EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key='root' hideNavBar >

        <Scene key='auth'>
          <Scene key='login' component={LoginForm} title='Please login' initial />
        </Scene>

        <Scene key='main' >
          <Scene
            key='employeeList'
            component={EmployeeList}
            title='Employees'
            rightTitle='Add'
            onRight={() => { Actions.employeeCreate(); }}
            initial
          />
          <Scene
            key='employeeCreate'
            component={EmployeeCreate}
            title='Create Employee'
          />
          <Scene
            key='employeeEdit'
            component={EmployeeEdit}
            title='Edit Employee'
          />
        </Scene>

      </Scene>
    </Router>
  );
};

export default RouterComponent;
