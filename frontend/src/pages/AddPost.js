import React, { Component } from "react";
import adminapis from "../api";
import "../style/css.css";
import Header from "../components/Header";

class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      imgUrl: null,
    };
  }

  handleChangeInputDsp = async (event) => {
    const description = event.target.value;
    this.setState({ description });
  };

  handleChangeInputImage = async (event) => {
    const imgUrl = URL.createObjectURL(event.target.files[0]);
    this.setState({ imgUrl });
  };

  handleIncludePost = async () => {
    const { description, imgUrl } = this.state;
    const payload = { description, imgUrl };

    await adminapis.createNotice(payload).then((res) => {
      window.alert(`Post added successfully`);
      this.setState({
        description: "",
        imgUrl: "",
      });
      window.location.reload();
    });
  };

  render() {
    const { description, imgUrl } = this.state;
    return (
      <React.Fragment>
        <Header />
        <div class="container" direction="row">
          <div class="card w-100 ">
            <div class="card-body">
              <div>
                <h3 class="display-4">Add New Notice</h3>
                <h1 class="lead ">Description:</h1>
              </div>
              <form onSubmit={this.handleIncludePost} method="POST">
                <div class="form-group">
                  <textarea
                    class="w-100"
                    rows="3"
                    placeholder="Write something here...."
                    value={description}
                    onChange={this.handleChangeInputDsp}
                  />
                  <div
                    class="container-fluid"
                    style={{
                      backgroundImage: `url("https://cdn.pixabay.com/photo/2017/02/04/15/25/desk-2037545__340.png")`,
                      backgroundRepeat: "no-repeat",
                      width: "100%",
                      height: "300px",
                      color: "white",
                      margin: "0px",
                    }}
                  >
                    <input
                      type="file"
                      name="myImage"
                      onChange={this.handleChangeInputImage}
                      accept="images/*"
                    />
                    <img
                      src={this.state.imgUrl}
                      alt=""
                      value={imgUrl}
                      width="250px"
                      height="250px"
                    />
                    <br />
                    <button class="btn btn-primary" type="submit">
                      Upload
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default AddPost;
