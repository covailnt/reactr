export function onChange(e) {
  console.log(e.target.value);
  switch (e.target.name) {
    case "email":
      this.props.setEmail(e.target.value);
      break;
    case "password":
      this.props.setPassword(e.target.value);
      break;
    default:
      return;
  }
}

export function mapStateToProps(state) {
  return { email: state.email };
}

export function mapDispatchToProps(dispatch) {
  return {
    // dispatching plain actions
    setEmail: email => dispatch({ type: "SET_EMAIL", payload: email }),
    setPassword: password =>
      dispatch({ type: "SET_PASSWORD", payload: password }),
    createAccount: user => dispatch({ type: "CREATE_ACCOUNT", payload: user })
  };
}

export function setEmail(email) {
  return {
    type: "SET_EMAIL",
    email
  };
}
