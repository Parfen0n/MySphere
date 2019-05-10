import { combineReducers } from 'redux';
import vacancyReducer from './vacancyReducer';

const rootReducer = combineReducers({
  receipt: vacancyReducer
})

export default rootReducer;