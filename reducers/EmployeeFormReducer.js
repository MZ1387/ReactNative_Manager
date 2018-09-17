import {
   EMPLOYEE_UPDATE
} from '../actions/types';

const initialState = {

};

export default (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return { ...state };
    default:
      return state;
  }
}
