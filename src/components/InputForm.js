import React, { Component } from "react";
import axios from "axios";
import AboutBooks from "./AboutBooks";

export class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.email,
      title: this.props.title,
      discription: this.props.discription,
      userId: this.props.userId,
      status: this.props.stauts,
    };
  }
  getEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  getTitle = (e) => {
    this.setState({
      title: e.target.value,
    });
  };
  getDiscription = (e) => {
    this.setState({
      discription: e.target.value,
    });
  };
  getStatus = (e) => {
    this.setState({
      status: e.target.value,
    });
  };
  updateData = (e) => {
    let userId = this.props.userId;
    let config = {
      method: "put",
      baseURL: "http://localhost:8000",
      url: `/updat-data/${userId}`,
      data: {
        email: this.state.email,
        title: this.state.title,
        discription: this.state.discription,
        stauts: this.state.status,
      },
    };
    axios(config).then((result) => {
      console.log(result.data);
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.updateData}>
          <input
            onChange={(e) => this.getEmail(e)}
            type="text"
            value={this.state.email}
          />
          <input
            onChange={(e) => this.getDepartment(e)}
            type="text"
            value={this.state.title}
          />
          <input
            onChange={(e) => this.getAge(e)}
            type="text"
            value={this.state.discription}
          />
          <input
            onChange={(e) => this.getAge(e)}
            type="text"
            value={this.state.status}
          />
          <input type="submit" value="Update user" />
        </form>
        
      </div>
    );
  }
}

export default InputForm;
