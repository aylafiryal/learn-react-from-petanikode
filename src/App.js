import React from "react";
import "./App.css";
import { render } from "@testing-library/react";
import PhoneData from "./PhoneData";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: "",
    };
  }

  callAPI() {
    fetch("http://localhost:8000/test")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <div>
        <h1>{this.state.apiResponse}</h1>
        <PhoneData />
      </div>
    );
  }
}

export default App;
