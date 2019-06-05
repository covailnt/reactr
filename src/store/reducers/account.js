import * as actionTypes from "../constants";

const accountReducer = (state = {}, action) => {
    switch (action.type) {

        case actionTypes.SET_SIGNED_IN: {
            return Object.assign({}, state, { signedIn: "YES" });
        }
        case actionTypes.SET_SIGNED_OUT: {
            return Object.assign({}, state, { signedIn: "NO" });
        }
        default:
            return state;
    };

};

export default accountReducer;