import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loveMeter: 0
    };
  }

  onClick = () => {
    this.setState({ ...this.state, loveMeter: this.state.loveMeter + 10 });
    //window.alert("we love guy fieri this much" + this.state.loveMeter);
  };

  render() {
    const title = "React Project Boilerplate :(";

    return (
      <div>
        <div>{title}</div>
        <span> I love Guy Feiri this much {this.state.loveMeter}/100 </span>
        <button onClick={this.onClick}> give guy love</button>
      </div>
    );
  }
}

export default App;
