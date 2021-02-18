import React, { Component } from "react";
import { Alignment, Classes, H3, H5, InputGroup, Navbar, Switch, Tab, Tabs } from "@blueprintjs/core";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import {Collapse} from "@blueprintjs/core"
import "../style/css.css";
import Sidebar from "./Sidebar";
import {Timeline,AddPost,Guests,Owners,Feedbacks,Inquiries} from "../pages"

class Header extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      activePanelOnly: false,
        animate: true,
        navbarTabId: "Timeline",
        vertical: false,
      isOpen: false,
      navigate: true
    };
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
}

  render() {
    return (
      <div>
      <Navbar>
                    <Navbar.Group>
                        <Navbar.Heading>
                            Current page: <strong>{this.state.navbarTabId}</strong>
                        </Navbar.Heading>
                    </Navbar.Group>
                    <Navbar.Group align={Alignment.RIGHT}>
                        {/* controlled mode & no panels (see h1 below): */}
                        <Tabs
                            animate={this.state.animate}
                            id="navbar"
                            large={true}
                            onChange={this.handleNavbarTabChange}
                            selectedTabId={this.state.navbarTabId}
                        >
                            <Tab id="Timeline" title="Timeline" />
                            <Tab id="Files" title="Files" />
                            <Tab id="Builds" title="Builds" />
                        </Tabs>
                    </Navbar.Group>
                </Navbar>
            </div>
    );
  }
  
}

export default Header;
