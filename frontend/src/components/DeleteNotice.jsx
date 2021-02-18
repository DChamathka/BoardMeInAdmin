import React, { Component } from "react";
import styled from "styled-components";
import apis from "../api"
const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

class DeleteNotice extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do tou want to delete the notice ${this.props.id} permanently?`,
            )
        ) {
            apis.deleteMovieById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}

export default DeleteNotice