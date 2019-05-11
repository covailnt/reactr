const createAccountReducer = (state = {}, action) => {
    switch (action.type) {
        case "SET_EMAIL": {
            return Object.assign({}, state, { email: action.payload });
        }
        case "SET_PASSWORD": {
            return Object.assign({}, state, { password: action.payload });
        }
        case "LOGIN": {
            return Object.assign({}, state, { loggedIn: "YES" });
        }
        case "LOGOUT": {
            return Object.assign({}, state, { loggedIn: "NO" });
        }
        default:
            return state;
    };

};

export default createAccountReducer;