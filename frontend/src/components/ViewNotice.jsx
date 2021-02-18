import React, { Component } from "react";
import apis from "../api";

const Notice = (props) => (
  <tr>
    <td>{props.notice.description}</td>
    <td>{props.notice.date}</td>
    <td>
      <img src={props.todo.todo_priority} alt="" />
    </td>
  </tr>
);

class ViewNotice extends Component {
  constructor(props) {
    super(props);
    this.state = { notices: [] };
  }
  componentDidMount() {
    document.title = "List Page";
    apis.getAllNotices
      .then((response) => {
        this.setState({ notices: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  NoticeList() {
    return this.Object.map(function (currentNotice, i) {
      return <Notice notice={currentNotice} key={i} />;
    });
  }
  render() {
    return (
      <div>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Description</th>
              <th>Date</th>
              <th>img</th>
            </tr>
          </thead>
          <tbody>{this.NoticeList()}</tbody>
        </table>
      </div>
    );
  }
}

export default ViewNotice;
