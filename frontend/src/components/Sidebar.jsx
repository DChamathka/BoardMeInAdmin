import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import styled from "styled-components";

const Btn = styled.button.attrs({
  className: "btn btn-dark",
})`
  width: 10%;
  margin: 3px;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
`;
class Sidebar extends Component {
  state = {
    navigate: false,
  };

  logout = () => {
    localStorage.clear("token");
    this.setState({
      navigate: true,
    });
  };

  render() {
    const { navigate } = this.state;
    if (navigate) {
      return <Redirect to="/admin" push={false} />;
    }
    return (
      <React.Fragment><div class="container">
          <Link
            to="/timeline"
            className="btn btn-dark"
          >
            Timeline
          </Link>
          <Link to="/addpost" className="btn btn-dark" width="40px">
            AddNotices
          </Link>
          <Link to="/guests" className="btn btn-dark">
            Guests
          </Link>
          <Link to="/owners" className="btn btn-dark">
            Owners
          </Link>
          <Link to="/inquiry" className="btn btn-dark">
            Inquiries
          </Link>
          <Link to="/feedback" className="btn btn-dark">
            Feedbacks
          </Link>
          <Btn onClick={this.logout}>Logout</Btn></div>
      </React.Fragment>
    );
  }
}

export default Sidebar;
