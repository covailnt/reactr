import React from "react";
import { withFirebase } from "../index";  // firebase/index
import AuthUserContext from "../context";

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        authUser: JSON.parse(localStorage.getItem("authUser"))
      };
    }

    componentDidMount() {
      console.log(this.props.firebase)
      this.listener = this.props.firebase.onAuthUserListener(
        authUser => {
          localStorage.setItem("authUser", JSON.stringify(authUser));
          this.setState({ authUser });
        },
        () => {
          localStorage.removeItem("authUser");
          this.setState({ authUser: null });
        }
      );
    }

    componentWillUnmount() {
      this.listener = this.props.firebase.onAuthUserListener(
        authUser => {
          localStorage.setItem("authUser", JSON.stringify(authUser));
          this.setState({ authUser });
        },
        () => {
          localStorage.removeItem("authUser");
          this.setState({ authUser: null });
        }
      );
      this.listener();
    }

    render() {
      return (
        <AuthUserContext.Provider value={this.state.authUser}>
          <Component {...this.props} />
        </AuthUserContext.Provider>
      );
    }
  }

  return withFirebase(WithAuthentication);
};

export default withAuthentication;
