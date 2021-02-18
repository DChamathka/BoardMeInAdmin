import React, { Component } from "react";
import "../style/css.css";
import styled from "styled-components";

const Card = styled.div.attrs({
  className: "card",
})`
  background-color: rgba(245, 245, 245, 0.4);
  align-items: center;
  align-content: center;
  height: 657px;
  padding: 50px
`;

const Idiv = styled.div.attrs({
  className: "card",
})`
  background-color: rgba(245, 245, 245, 0.4);
  align-items: center;
  align-content: center;
    padding: 10px
`;

class Landingpage extends Component {
    state = {
        navigate: false,
      };
    
      logout = () => {
        localStorage.clear("token");
        this.setState({
          navigate: false,
        });
      };
  render() {
    return (
      <div class="bg">
        <Card>
          <h1 class="lh1">Board-Me-In</h1>
          <br />
          <Idiv>
              <br />
            <h2 class="lh2">Welcome to the BoardMeIn App</h2>
            <br />
            <br />
            <h2 class="lh2">Login as Admin</h2>
            <button class="btn btn-info" onClick={this.log}>Login</button>
            <br />
            <br />
            <h2 class="lh2">Sign Up as Admin</h2>
            <button class="btn btn-info">Sign Up</button>
            <br />
          </Idiv>
        </Card>
      </div>
    );
  }
}
export default Landingpage;
