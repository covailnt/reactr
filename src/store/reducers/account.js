import * as actionTypes from "../constants";

const accountReducer = (state = {}, action) => {
    switch (action.type) {

        case actionTypes.SET_SIGNED_IN: {
            //console.log("account reducer - set signed in")                                // --- firebaseReducer handles this
            localStorage.setItem({"firebaseAuth": JSON.stringify(state.firebase.auth)});
            return Object.assign({}, state, { signedIn: "YES" });
        }

        case actionTypes.SET_SIGNED_OUT: {
            //localStorage.setItem({"firebaseAuth": JSON.stringify(state.firebase.auth)});   // ---  firebaseReducer handles this
            return Object.assign({}, state, { signedIn: "NO" });
        }

        default:
            return state;
    };

};

export default accountReducer;