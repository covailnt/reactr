import { combineReducers } from 'redux';
import createAccountReducer  from './createAccount';

const rootReducer = combineReducers({
    createAccountForm: createAccountReducer
});

export default rootReducer;