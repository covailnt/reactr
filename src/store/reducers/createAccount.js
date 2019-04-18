const createAccountReducer = (state = {}, action) => {
    switch (action.type) {
        case "SET_EMAIL": {
            return { ...state, email: action.payload };
            break;
        }
        case "SET_PASSWORD": {
            return { ...state, password: action.payload };
            break;
        }
        case "LOGGED_IN": {
            return { ...state, created: action.payload};
            break;
        }
        default:
            return state;
   };

};
   
export default createAccountReducer;