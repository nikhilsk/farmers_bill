import userNameReducer from './wordReducer';
import passwordReducer from './passwordReducer'
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    userNameReducer,
    passwordReducer
})

export default allReducers;