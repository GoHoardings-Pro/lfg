import React, { Component } from "react";
import { LinkedIn } from "react-linkedin-oauth2";

class App extends Component {
  state = {
    code: "",
    errorMessage: ""
  };

  handleSuccess = (data) => {
    console.log(data);
    this.setState({
      code: data.code,
      
      errorMessage: ""
    });
  };

  handleFailure = (error) => {
    this.setState({
      code: "",
      errorMessage: error.errorMessage
    });
  };

  render() {
    const { code, errorMessage } = this.state;
    return (
      <div>
        <LinkedIn
          clientId="86pd3xemm2f2qa"
          onFailure={this.handleFailure}
          onSuccess={this.handleSuccess}
          redirectUri="https://www.linkedin.com/signup"
        >
          <img alt="Log in with Linked In" style={{ maxWidth: "180px" }} />
        </LinkedIn>
        {!code && <div>No code</div>}
        {code && <div>Code: {code}</div>}
        {errorMessage && <div>{errorMessage}</div>}
      </div>
    );
  }
}



export default App;
