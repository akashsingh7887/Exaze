import {createStore, combineReducers} from 'redux';
import updateReducer from './reducers/index';
const rootReducer = combineReducers({update: updateReducer});
const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
