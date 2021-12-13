import {NAME_UPDATE} from '../constants';
const initialState = {
  updateText: '',
};
const updateReducer = (state = initialState, action) => {
  switch (action.type) {
    case NAME_UPDATE:
      return {
        ...state,
        updateText: action.payload,
      };
    default:
      return state;
  }
};
export default updateReducer;
