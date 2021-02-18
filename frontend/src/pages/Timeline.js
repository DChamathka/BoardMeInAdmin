import React, { Component } from "react";
import {Header} from "../components";
import apis from "../api"


export default class Timeline extends Component {
  constructor(props) {
    super(props)
    this.state = {
        notices: [],
        columns: [],
        loading:" false",
    }
}

componentDidMount = async () => {
  this.setState({ loading: true })

  await apis.getAllNotices().then(notices => {
      this.setState({
         notices: notices.data.data,
          loading: "false",
      })
  })
};

  render() {
    const { notices, loading } = this.state

    const columns = [
      {
          Header: 'ID',
          accessor: 'notice_id',
          filterable: true,
      },
      {
          Header: 'Description',
          accessor: 'description',
          filterable: true,
      },
      {
          Header: 'date',
          accessor: 'createdAt',
          filterable: true,
      },
      {
          Header: 'Time',
          accessor: 'time',
      },
      {
          Header: 'image',
          accessor: 'imgUrl',   
      }
  ]

  let showTable = true
        if (!notices.length) {
            showTable = false
        }
    return (
      <React.Fragment>
        <Header />
        <div>
        {showTable && (
                    <table
                        data={notices}
                        columns={columns}
                        loading={loading}
                        minrows={0}
                    />
                )}
        </div>
      </React.Fragment>
    );
  }
}
